'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Dynamically set page title
    document.title = 'Vše Pro Stavby - Kompletní stavební řešení';

    // Generate a simple SVG favicon
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4299E1" /><stop offset="100%" stop-color="#3182CE" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);

  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition duration-300">
            Vše Pro Stavby
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">O nás</a>
            <a href="#services" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">Služby</a>
            <a href="#references" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">Reference</a>
            <a href="#contact" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">Kontakt</a>
          </nav>
          <button className="md:hidden text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-white z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex justify-end p-4">
            <button className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 pt-10">
            <a href="#about" className="text-2xl text-gray-700 hover:text-blue-600 transition duration-300" onClick={closeMenu}>O nás</a>
            <a href="#services" className="text-2xl text-gray-700 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Služby</a>
            <a href="#references" className="text-2xl text-gray-700 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Reference</a>
            <a href="#contact" className="text-2xl text-gray-700 hover:text-blue-600 transition duration-300" onClick={closeMenu}>Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[600px] bg-cover bg-center text-white flex items-center justify-center text-center p-4"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/project-house-new-roof-facade.jpg)' }}>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Vše Pro Stavby: Váš Partner Pro Dokonalé Stavební Projekty
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 leading-relaxed">
              Komplexní řešení pro rekonstrukce, novostavby, zateplení a fasády. Spolehlivost a kvalita pro váš domov.
            </p>
            <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
              Získat Nezávaznou Nabídku
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">O nás</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Vše Pro Stavby je stavební společnost s dlouholetými zkušenostmi v oboru. Zaměřujeme se na poskytování komplexních stavebních služeb, od drobných rekonstrukcí až po realizaci velkých stavebních projektů. Naším cílem je spokojený zákazník a precizně odvedená práce.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Dbáme na kvalitu materiálů, dodržování technologických postupů a individuální přístup ke každému klientovi. S námi máte jistotu, že váš projekt bude v těch nejlepších rukou.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Naše Služby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-2 10v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2h18z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Rekonstrukce</h3>
                <p className="text-gray-700 leading-relaxed">Kompletní i částečné rekonstrukce rodinných domů a bytů. Moderní řešení pro vaše stávající prostory.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-2V5h2c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2zM7 20h2V9H7c-1.105 0-2 .895-2 2v7c0 1.105.895 2 2 2zM9 4.1C9 3.492 8.508 3 7.9 3H4.1C3.492 3 3 3.492 3 4.1v2.8C3 7.508 3.492 8 4.1 8h3.8c.608 0 1.1-.492 1.1-1.1V4.1zm6 0c0-.608-.492-1.1-1.1-1.1h-3.8c-.608 0-1.1-.492-1.1-1.1V4.1c0 0.608.492 1.1 1.1 1.1h3.8c.608 0 1.1-.492 1.1-1.1V4.1zm6 0c0-.608-.492-1.1-1.1-1.1h-3.8c-.608 0-1.1-.492-1.1-1.1V4.1c0 0.608.492 1.1 1.1 1.1h3.8c.608 0 1.1-.492 1.1-1.1V4.1z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Zateplení Budov</h3>
                <p className="text-gray-700 leading-relaxed">Efektivní zateplení fasád a střech pro úsporu energie a zvýšení komfortu bydlení.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Fasádní Práce</h3>
                <p className="text-gray-700 leading-relaxed">Realizace všech typů fasád, včetně nátěrů, omítek a dekorativních prvků.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v4M12 14v4M16 14v4M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Zednické Práce</h3>
                <p className="text-gray-700 leading-relaxed">Kompletní zednické práce, od zdění přes omítky až po drobné stavební úpravy.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 .546.126 1.07.368 1.554.242.484.593.903 1.026 1.258C5.82 20.217 6.4 20.5 7 20.5h10a2 2 0 002-2v-3.5L16 12l3-3V7c0-.546-.126-1.07-.368-1.554a3.001 3.001 0 00-1.026-1.258C18.18 3.783 17.6 3.5 17 3.5H7.001c-.546 0-1.07.126-1.554.368A3.001 3.001 0 004.187 5.094C3.783 5.733 3.5 6.4 3.5 7v10h.5zM12 9v6m-3-3h6" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hydroizolace</h3>
                <p className="text-gray-700 leading-relaxed">Profesionální řešení hydroizolací základů, střech a vlhkých prostor.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sádrokarton</h3>
                <p className="text-gray-700 leading-relaxed">Montáž sádrokartonových konstrukcí, příček a podhledů pro moderní interiéry.</p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Máte Otázky? Kontaktujte Nás!
              </a>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Naše Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                <img
                  src="/images/project-house-new-roof-facade.jpg"
                  alt="Nově zrekonstruovaný dům s bílou fasádou a tmavou střechou."
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Rodinný dům - Nová Fasáda & Střecha</h3>
                  <p className="text-gray-700 leading-relaxed">Kompletní rekonstrukce fasády a střechy rodinného domu v moderním stylu. Zvýšení energetické účinnosti a atraktivního vzhledu.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                <img
                  src="/images/project-mountain-house-renovation.jpg"
                  alt="Rekonstrukce horské chaty s modernizovanou přízemní fasádou."
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Rekonstrukce Horské Chatky</h3>
                  <p className="text-gray-700 leading-relaxed">Rozsáhlá renovace tradiční horské chaty, včetně zateplení a modernizace přízemní části. Zachován původní ráz s moderními prvky.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Kontaktujte Nás</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Máte dotazy nebo si přejete nezávaznou konzultaci? Neváhejte nás kontaktovat. Jsme tu pro vás, abychom prodiskutovali váš projekt a nabídli optimální řešení.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0 text-lg">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@vseprostavby.cz</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.113L9.349 19H4.011a2 2 0 01-1.995-1.858L3 5z" />
                </svg>
                <span>+420 777 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pražská 123, 110 00 Praha</span>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-2xl font-semibold mb-4">Napište nám:</p>
              <a href="mailto:info@vseprostavby.cz" className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105">
                Poslat Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Vše Pro Stavby. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-sm">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300">DigitalFusion</a></p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
