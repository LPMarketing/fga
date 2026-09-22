/**
 * Centralized UX state management for FGA modals, popups, and user qualification flow.
 * Respects strict privacy rules: NO personal data, names, phones or case texts are stored.
 * Only UX flags (booleans, timestamps, active elapsed seconds, and origin sector) are kept.
 */

export const STORAGE_KEYS = {
  // localStorage: Persistent across visits
  CASE_POPUP_SHOWN: 'fga_case_popup_shown', // 15-minute qualification popup shown
  FORM_SUBMITTED: 'fga_case_submitted', // User already converted/submitted form

  // sessionStorage: Active session lifecycle
  EXIT_INTENT_SHOWN: 'fga_exit_intent_shown', // Exit intent triggered in this session
  LAST_POPUP_TIMESTAMP: 'fga_popup_last_interaction', // Timestamp of last popup closed or shown
  ACTIVE_SESSION_SECONDS: 'fga_active_visit_time', // Total accumulated seconds of active browsing
  PENDING_LEAD_ORIGIN: 'fga_pending_lead_origin', // Origin to preselect in form ('previdenciario' | 'servidor')
} as const;

export type LeadOrigin = 'previdenciario' | 'servidor' | 'geral';

/**
 * Check if the user has already converted (submitted a case).
 */
export function hasConverted(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(STORAGE_KEYS.FORM_SUBMITTED) === 'true';
  } catch {
    return false;
  }
}

/**
 * Mark that the user converted, suppressing future popups.
 */
export function markAsConverted(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.FORM_SUBMITTED, 'true');
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Check if the 15-minute qualification popup was already shown to this visitor.
 */
export function has15MinPopupBeenShown(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(STORAGE_KEYS.CASE_POPUP_SHOWN) === 'true';
  } catch {
    return false;
  }
}

/**
 * Mark the 15-minute qualification popup as shown.
 */
export function mark15MinPopupShown(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.CASE_POPUP_SHOWN, 'true');
    recordPopupInteraction();
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Check if exit intent was already shown in the current session.
 */
export function hasExitIntentBeenShown(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(STORAGE_KEYS.EXIT_INTENT_SHOWN) === 'true';
  } catch {
    return false;
  }
}

/**
 * Mark exit intent as shown in current session.
 */
export function markExitIntentShown(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(STORAGE_KEYS.EXIT_INTENT_SHOWN, 'true');
    recordPopupInteraction();
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Records the timestamp of when a modal was either shown or closed.
 */
export function recordPopupInteraction(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(STORAGE_KEYS.LAST_POPUP_TIMESTAMP, Date.now().toString());
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Checks whether a 5-minute (300,000ms) cooldown has elapsed since the last popup was shown or closed.
 */
export function isPopupInCooldown(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.LAST_POPUP_TIMESTAMP);
    if (!raw) return false;
    const lastTime = parseInt(raw, 10);
    if (isNaN(lastTime)) return false;
    const elapsed = Date.now() - lastTime;
    const COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes minimum between popups
    return elapsed < COOLDOWN_MS;
  } catch {
    return false;
  }
}

/**
 * Stores the pending lead origin before smooth-navigating to the form.
 */
export function setPendingLeadOrigin(origin: LeadOrigin): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(STORAGE_KEYS.PENDING_LEAD_ORIGIN, origin);
  } catch {
    // Ignore
  }
}

/**
 * Retrieves and consumes the pending lead origin (one-time read).
 */
export function consumePendingLeadOrigin(): LeadOrigin | null {
  if (typeof window === 'undefined') return null;
  try {
    const origin = sessionStorage.getItem(STORAGE_KEYS.PENDING_LEAD_ORIGIN) as LeadOrigin | null;
    if (origin) {
      sessionStorage.removeItem(STORAGE_KEYS.PENDING_LEAD_ORIGIN);
    }
    return origin;
  } catch {
    return null;
  }
}

/**
 * Gets the current accumulated active browsing seconds in this session.
 */
export function getActiveSessionSeconds(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION_SECONDS);
    return raw ? parseInt(raw, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

/**
 * Updates the accumulated active browsing seconds in this session.
 */
export function setActiveSessionSeconds(seconds: number): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION_SECONDS, seconds.toString());
  } catch {
    // Ignore
  }
}
