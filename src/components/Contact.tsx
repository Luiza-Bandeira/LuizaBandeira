
import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import { useSchedulePopup } from '../context/SchedulePopupContext';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { openPopup } = useSchedulePopup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Este seria o código para enviar o formulário para uma API
      // Como não temos backend implementado, apenas simularemos o envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Mensagem enviada com sucesso!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
      console.error('Erro de envio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="economiza-container">
        <div className="text-center mb-14">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="h-1 w-20 bg-vinho mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estamos prontos para atender às suas necessidades e ajudar a transformar sua realidade financeira.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-azul-escuro mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-medio"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-medio"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-medio"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full text-center"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div>
            <div className="bg-azul-escuro p-8 rounded-lg shadow-lg text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="shrink-0 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <a href="tel:+553186460883" className="text-white/80 hover:text-white transition-colors">
                      (31) 8646-0883
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="shrink-0 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <a href="mailto:luizamariellybc@gmail.com" className="text-white/80 hover:text-white transition-colors">
                      luizamariellybc@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="shrink-0 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <address className="not-italic text-white/80">
                      Av. Augusto de Lima, 233, Bloco 1, Sala 1510<br />
                      Centro, Belo Horizonte/MG<br />
                      CEP 30.190-000
                    </address>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Instagram className="shrink-0 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a href="https://www.instagram.com/econo.m.iza" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                      @econo.m.iza
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-vinho p-8 rounded-lg shadow-lg text-white" id="agendar">
              <h3 className="text-2xl font-bold mb-4">Consultoria Gratuita</h3>
              <p className="mb-6">
                Agende um papo para entendermos melhor sua situação financeira e propormos caminhos possíveis. Sem compromisso!
              </p>
              <button
                onClick={openPopup}
                className="bg-white text-vinho hover:bg-rosa/90 hover:text-white py-3 px-6 rounded-md font-medium transition-all duration-300 w-full text-center"
              >
                Agende sua consultoria gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
