export type PkgUsers = {
  name: string | null;
  email: string | null;
  role: string;
};

export type PkgProducts = {
  name: string;
  price: number;
  createdAt: string | Date;
  user: {
    name: string| null;
  };
};
