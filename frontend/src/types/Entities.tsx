export interface User {
  id: number;
  nombre: string;
  email: string;
  rol: 'administrador' | 'usuario';
  pass_provisional: boolean;
  createdAt: Date;
}
