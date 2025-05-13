
import { createContext, useState, useContext, ReactNode } from 'react';
import SchedulePopup from '../components/SchedulePopup';

interface SchedulePopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const SchedulePopupContext = createContext<SchedulePopupContextType | undefined>(undefined);

export const SchedulePopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <SchedulePopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
      <SchedulePopup isOpen={isOpen} onClose={closePopup} />
    </SchedulePopupContext.Provider>
  );
};

export const useSchedulePopup = () => {
  const context = useContext(SchedulePopupContext);
  if (context === undefined) {
    throw new Error('useSchedulePopup must be used within a SchedulePopupProvider');
  }
  return context;
};
