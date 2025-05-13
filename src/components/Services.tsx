
import { CheckCircle } from 'lucide-react';
import { useSchedulePopup } from '../context/SchedulePopupContext';

const Services = () => {
  const { openPopup } = useSchedulePopup();

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="economiza-container">
        <div className="text-center mb-14">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-vinho mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções personalizadas para atender às necessidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Serviços para Pessoa Física */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-azul-escuro">
              <h3 className="text-2xl font-bold text-azul-escuro mb-6">Para Pessoas Físicas</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-azul-escuro shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Diagnóstico financeiro</h4>
                    <p className="text-gray-600 mt-1">Análise completa da situação financeira atual, identificando oportunidades de melhoria.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-azul-escuro shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Planejamento para metas</h4>
                    <p className="text-gray-600 mt-1">Criação de estratégias personalizadas para alcançar seus objetivos financeiros.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-azul-escuro shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Quitação de dívidas</h4>
                    <p className="text-gray-600 mt-1">Desenvolvimento de planos estruturados para eliminar dívidas de forma organizada.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-azul-escuro shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Acompanhamento mensal</h4>
                    <p className="text-gray-600 mt-1">Suporte contínuo para implementação das estratégias e ajustes necessários.</p>
                  </div>
                </li>
              </ul>
              
              <button
                onClick={openPopup}
                className="btn-primary w-full mt-8 text-center"
              >
                Conheça nossos planos
              </button>
            </div>
          </div>

          {/* Serviços para Empresas */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-vinho">
              <h3 className="text-2xl font-bold text-vinho mb-6">Para Empresas</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-vinho shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Diagnóstico e estruturação financeira</h4>
                    <p className="text-gray-600 mt-1">Análise completa da saúde financeira e implementação de estrutura organizacional.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-vinho shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Precificação e análise de lucratividade</h4>
                    <p className="text-gray-600 mt-1">Estratégias para definir preços adequados e otimizar a lucratividade do negócio.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-vinho shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Gestão de fluxo de caixa</h4>
                    <p className="text-gray-600 mt-1">Implantação de sistemas para controle eficiente das entradas e saídas financeiras.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-vinho shrink-0 mr-3 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-semibold text-azul-medio">Treinamentos e consultorias mensais</h4>
                    <p className="text-gray-600 mt-1">Capacitação da equipe e acompanhamento contínuo para garantir resultados sustentáveis.</p>
                  </div>
                </li>
              </ul>
              
              <button
                onClick={openPopup}
                className="btn-secondary w-full mt-8 text-center"
              >
                Solicite uma proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
