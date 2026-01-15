
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Software from './components/Software';
import ProcessAndPayments from './components/ProcessAndPayments';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { EXPERT_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header expertEmail={EXPERT_INFO.email} expertPhone={EXPERT_INFO.phone} />
      <main className="flex-grow">
        {/* Sección principal de héroe/banner */}
        <Hero expertEmail={EXPERT_INFO.email} expertPhone={EXPERT_INFO.phone} />

        {/* Sección sobre el experto */}
        <About expertName={EXPERT_INFO.name} specialty={EXPERT_INFO.specialty} />

        {/* Sección de servicios por nivel académico */}
        <Services />

        {/* Sección de software utilizado */}
        <Software softwareList={EXPERT_INFO.software} />

        {/* Sección de proceso de trabajo y pagos */}
        <ProcessAndPayments />

        {/* Sección de preguntas frecuentes automatizadas */}
        <FAQ expertEmail={EXPERT_INFO.email} />

        {/* Sección de formulario de contacto */}
        <Contact expertEmail={EXPERT_INFO.email} />
      </main>
      <Footer expertName={EXPERT_INFO.name} expertEmail={EXPERT_INFO.email} expertPhone={EXPERT_INFO.phone} />
    </div>
  );
};

export default App;
    