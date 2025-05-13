
import { useState } from 'react';
import { X, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { salvarLead } from '../services/supabaseService';

interface SchedulePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulePopup = ({ isOpen, onClose }: SchedulePopupProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Salva dados no Supabase
      await salvarLead({
        nome: name,
        email: email,
        telefone: phone
      });
      
      toast.success('Redirecionando para o agendamento...');
      
      // Redireciona para o Google Agenda
      window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2NKKykzH1HQ-P5s5oKMoZVh8FGlo3aBJqFdG7vFjYnBivcVOSja6d7HccZLHtSrKxtW9VZgZEM', '_blank');
      
      onClose();
      
    } catch (error) {
      toast.error('Ocorreu um erro ao salvar seus dados. Tente novamente.');
      console.error('Erro:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Máscara para o telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
      // Formata como (XX) XXXXX-XXXX
      if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      }
      if (value.length > 9) {
        value = `${value.slice(0, 9)}-${value.slice(9)}`;
      }
      setPhone(value);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        <div className="bg-gradient-to-r from-azul-escuro to-azul-medio p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Calendar size={28} />
            <h3 className="text-2xl font-bold">Agende sua consultoria</h3>
          </div>
          <p className="text-white/90">
            Preencha seus dados para agendar uma consultoria gratuita
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="popup-name" className="block text-gray-700 font-medium mb-2">Nome completo</label>
            <input 
              type="text" 
              id="popup-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-medio"
              placeholder="Digite seu nome completo"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="popup-email" className="block text-gray-700 font-medium mb-2">E-mail</label>
            <input 
              type="email" 
              id="popup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-medio"
              placeholder="seu.email@exemplo.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="popup-phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
            <input 
              type="tel" 
              id="popup-phone"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-medio"
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-secondary w-full text-center flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Processando...
              </>
            ) : (
              <>
                Prosseguir para o agendamento <ExternalLink size={20} />
              </>
            )}
          </button>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            Após o envio, você será redirecionado para o Google Agenda para escolher a melhor data e horário para sua consultoria gratuita.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SchedulePopup;
