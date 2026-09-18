import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';
import { HomePage } from './pages/HomePage';
import { PrevidenciarioLandingPage } from './pages/PrevidenciarioLandingPage';
import { PublicoLandingPage } from './pages/PublicoLandingPage';
import { useRouter } from './utils/router';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/direito-previdenciario':
        return <PrevidenciarioLandingPage />;
      case '/direito-publico':
        return <PublicoLandingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#061321] text-[#F5F3EF] flex flex-col selection:bg-[#C79A52]/30 selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      {/* Semantic Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="conteudo-principal" className="flex-grow">
        {renderPage()}
      </main>

      {/* Semantic Footer */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* LGPD Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
