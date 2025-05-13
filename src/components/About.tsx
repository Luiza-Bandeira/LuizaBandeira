
import { Target, Book, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="economiza-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Sobre a ECONOMIZA</h2>
          <div className="h-1 w-20 bg-vinho mx-auto mt-4 mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A ECONOMIZA nasceu da paixão em ajudar pessoas e empresas a transformarem sua realidade financeira através da educação e estratégias personalizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Missão */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-azul-escuro hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-azul-escuro/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="text-azul-escuro" size={32} />
            </div>
            <h3 className="text-xl font-bold text-azul-escuro text-center mb-4">Nossa Missão</h3>
            <p className="text-gray-700 text-center">
              Transformar a relação com o dinheiro através da educação e estratégia, criando uma nova realidade financeira para nossos clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-vinho hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-vinho/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Book className="text-vinho" size={32} />
            </div>
            <h3 className="text-xl font-bold text-vinho text-center mb-4">Nossos Valores</h3>
            <p className="text-gray-700 text-center">
              Transparência, confiança e comprometimento são a base do nosso trabalho. Acreditamos que a educação financeira transforma vidas.
            </p>
          </div>

          {/* Abordagem */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-azul-medio hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-azul-medio/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Lightbulb className="text-azul-medio" size={32} />
            </div>
            <h3 className="text-xl font-bold text-azul-medio text-center mb-4">Nossa Abordagem</h3>
            <p className="text-gray-700 text-center">
              Atuação personalizada e humanizada, com foco em resultados reais. Entendemos que cada cliente possui necessidades específicas.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-azul-escuro mb-6 text-center">Nossa Filosofia</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
            Na ECONOMIZA, acreditamos que a organização financeira vai além dos números. 
            Trabalhamos para mudar comportamentos e criar hábitos que transformam a relação 
            dos nossos clientes com o dinheiro, gerando resultados sólidos e duradouros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
