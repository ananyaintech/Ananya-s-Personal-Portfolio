import React, { createContext, useContext, useState } from 'react';

interface PortfolioContextType {
  activeProject: string | null;
  setActiveProject: (id: string | null) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <PortfolioContext.Provider value={{ activeProject, setActiveProject }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
};
