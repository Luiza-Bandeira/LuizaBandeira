
import { ArrowRight } from 'lucide-react';
import { useSchedulePopup } from '../context/SchedulePopupContext';

const Hero = () => {
  const { openPopup } = useSchedulePopup();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-azul-escuro to-azul-medio min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div className="economiza-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Organize suas finanças com estratégia e clareza
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl mb-8">
            Consultoria personalizada para <span className="font-semibold text-rosa">pessoas físicas</span> e <span className="font-semibold text-rosa">empresas</span>
          </p>
          
          <button
            onClick={openPopup}
            className="btn-secondary flex items-center justify-center mx-auto gap-2 text-lg"
          >
            Agende sua consultoria gratuita <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {/* Para Pessoas Físicas */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-opacity-20 transition-all">
            <h3 className="text-white text-2xl font-bold mb-4">Para Pessoas Físicas</h3>
            <ul className="text-white/90 space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-rosa flex items-center justify-center mr-3 mt-1 shrink-0">
                  <span className="text-azul-escuro font-bold">✓</span>
                </div>
                <span>Organização financeira personalizada</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-rosa flex items-center justify-center mr-3 mt-1 shrink-0">
                  <span className="text-azul-escuro font-bold">✓</span>
                </div>
                <span>Estratégias para eliminação de dívidas</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-rosa flex items-center justify-center mr-3 mt-1 shrink-0">
                  <span className="text-azul-escuro font-bold">✓</span>
                </div>
                <span>Planejamento financeiro pessoal</span>
              </li>
            </ul>
          </div>

          {/* Para Empresas */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-opacity-20 transition-all">
            <h3 className="text-white text-2xl font-bold mb-4">Para Empresas</h3>
            <ul className="text-white/90 space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-rosa flex items-center justify-center mr-3 mt-1 shrink-0">
                  <span className="text-azul-escuro font-bold">✓</span>
                </div>
                <span>Gestão de fluxo de caixa eficiente</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-rosa flex items-center justify-center mr-3 mt-1 shrink-0">
                  <span className="text-azul-escuro font-bold">✓</span>
                </div>
                <span>Estratégias de precificação</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-rosa flex items-center justify-center mr-3 mt-1 shrink-0">
                  <span className="text-azul-escuro font-bold">✓</span>
                </div>
                <span>Estruturação financeira completa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
