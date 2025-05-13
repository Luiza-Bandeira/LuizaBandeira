
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

// Tipagem para a tabela de leads
export interface Lead {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  data_hora_envio?: string;
}

// Função para salvar os dados do formulário
export const salvarLead = async (dadosLead: Omit<Lead, 'id' | 'data_hora_envio'>) => {
  // A coluna data_hora_envio será preenchida automaticamente no Supabase com NOW()
  const { data, error } = await supabase
    .from('leads')
    .insert(dadosLead);
  
  if (error) throw error;
  return data;
};
