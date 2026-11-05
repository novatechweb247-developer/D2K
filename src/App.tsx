import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string>('');

  const handleOpenContactModal = (serviceName?: string) => {
    if (serviceName) {
      setDefaultService(serviceName);
    } else {
      setDefaultService('Business Consulting');
    }
    setContactModalOpen(true);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onOpenContactModal={handleOpenContactModal} />;
      case 'about':
        return <About onNavigate={handleNavigate} onOpenContactModal={() => handleOpenContactModal()} />;
      case 'services':
        return <Services onNavigate={handleNavigate} onOpenContactModal={handleOpenContactModal} />;
      case 'experience':
        return <Experience onNavigate={handleNavigate} onOpenContactModal={() => handleOpenContactModal()} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} onOpenContactModal={handleOpenContactModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F5F5F5] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0a0a0a]">
      {/* Premium Loading Screen */}
      <LoadingScreen onLoaded={() => setLoading(false)} />

      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Contact / Consultation Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService={defaultService}
      />
    </div>
  );
}
