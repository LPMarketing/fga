import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../utils/router';
import { CaseQualificationModal } from './CaseQualificationModal';
import {
  hasConverted,
  has15MinPopupBeenShown,
  mark15MinPopupShown,
  hasExitIntentBeenShown,
  markExitIntentShown,
  isPopupInCooldown,
  getActiveSessionSeconds,
  setActiveSessionSeconds,
  setPendingLeadOrigin,
  recordPopupInteraction,
  LeadOrigin,
} from '../utils/qualificationStorage';

// 15 minutes = 15 * 60 = 900 seconds
const FIFTEEN_MINUTES_SECONDS = 15 * 60;

export const QualificationModalManager: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'timed_qualification' | 'exit_intent';
  }>({
    isOpen: false,
    type: 'timed_qualification',
  });

  const { currentPath, navigate } = useRouter();
  const currentPathRef = useRef(currentPath);

  useEffect(() => {
    currentPathRef.current = currentPath;
  }, [currentPath]);

  // 1. Timer for 15 minutes of ACTIVE browsing across routes
  useEffect(() => {
    if (hasConverted() || has15MinPopupBeenShown()) {
      return;
    }

    let activeSeconds = getActiveSessionSeconds();

    const interval = setInterval(() => {
      // Pause count when document is hidden (background tab)
      if (document.visibilityState !== 'visible') {
        return;
      }

      activeSeconds += 1;
      setActiveSessionSeconds(activeSeconds);

      if (activeSeconds >= FIFTEEN_MINUTES_SECONDS) {
        clearInterval(interval);

        // Double check conversion and cooldown before opening
        if (!hasConverted() && !has15MinPopupBeenShown() && !isPopupInCooldown()) {
          mark15MinPopupShown();
          setModalState({
            isOpen: true,
            type: 'timed_qualification',
          });
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 2. Desktop Exit Intent detection (mouseleave through top edge)
  useEffect(() => {
    // Only bind on non-touch devices with fine cursor support
    if (typeof window === 'undefined') return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Exit intent condition: cursor moves beyond top of viewport (clientY <= 0)
      if (e.clientY <= 0) {
        if (
          !hasConverted() &&
          !hasExitIntentBeenShown() &&
          !isPopupInCooldown() &&
          !modalState.isOpen
        ) {
          markExitIntentShown();
          setModalState({
            isOpen: true,
            type: 'exit_intent',
          });
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [modalState.isOpen]);

  const handleClose = () => {
    recordPopupInteraction();
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleExplainCase = () => {
    handleClose();

    // Determine sector origin based on current route
    let origin: LeadOrigin = 'geral';
    const path = currentPathRef.current;

    if (path.includes('previdenciario')) {
      origin = 'previdenciario';
    } else if (path.includes('publico')) {
      origin = 'servidor';
    }

    setPendingLeadOrigin(origin);

    // If already on Home, smooth scroll directly to the form
    if (path === '/') {
      navigate('/#apresente-seu-caso');
    } else {
      // Navigate to Home with form anchor, which router will handle and scroll
      navigate('/#apresente-seu-caso');
    }
  };

  return (
    <CaseQualificationModal
      isOpen={modalState.isOpen}
      type={modalState.type}
      onClose={handleClose}
      onExplainCase={handleExplainCase}
    />
  );
};
