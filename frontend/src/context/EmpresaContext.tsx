import { createContext, useContext, useState } from 'react';

export type EmpresaLandingData = {
  slug: string;
  nombre: string;
  logo: string;
  demo?: boolean;
  colores?: {
    primary: string;
    secondary?: string;
  };
  redes?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
  landing: {
    hero?: {
      titulo: string;
      subtitulo?: string;
      imagenes?: string[];
      imagenDecorativa?: string;
      cta?: {
        label: string;
        href: string;
      };
    };
    clases?: {
      nombre: string;
      descripcion: string;
      imagen: string;
    }[];
    sedes?: {
      nombre: string;
      direccion: string;
      horarios: string;
      imagen: string;
    }[];
    cta?: {
      titulo?: string;
      subtitulo?: string;
      imagen?: string;
      imagenHover?: string;
      fondo?: string;
      cta?: {
        label: string;
        href: string;
      };
    };
    planes?: {
      nombre: string;
      precio: string;
      descripcion: string;
      beneficios: string[];
      destacado?: boolean;
    }[];
  };
};
type ContextType = {
  empresa: EmpresaLandingData | null;
  setEmpresa: (empresa: EmpresaLandingData | null) => void;
  isReady: boolean;
  setIsReady: (isReady: boolean) => void;
};

const EmpresaContext = createContext<ContextType>({
  empresa: null,
  setEmpresa: () => {},
  isReady: false,
  setIsReady: () => {},
});

export const EmpresaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [empresa, setEmpresa] = useState<EmpresaLandingData | null>(null);
  const [isReady, setIsReady] = useState(false);

  return (
    <EmpresaContext.Provider
      value={{ empresa, setEmpresa, isReady, setIsReady }}
    >
      {children}
    </EmpresaContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEmpresa = () => useContext(EmpresaContext);
