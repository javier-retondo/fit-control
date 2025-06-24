export type User = {
  id: number;
  nombre: string;
  email: string;
  rol: 'administrador' | 'usuario';
  pass_provisional: boolean;
  createdAt: Date;
};

export type Plan = {
  nombre: string;
  precio: string;
  descripcion: string;
  beneficios: string[];
  destacado?: boolean;
};

export type WorkoutClass = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

export type Headquarter = {
  nombre: string;
  direccion: string;
  horarios: string;
  imagen: string;
};
