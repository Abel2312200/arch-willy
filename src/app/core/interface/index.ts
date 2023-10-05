export interface HttpRequestParams {
  method: string;
  body: {};
  isEnc: boolean;
  url: string;
}

export interface IOrder {
  user: IUser;
  product?: number;
  quantity: number;
  total: number;
}

export interface IFullUser {
  country: string;
  email: string;
  firstname: string;
  guid: string;
  id: number;
  isActive: number;
  lastname: string;
  password: string;
  phone: string;
  role_id: number;
}

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface IProduct {
  titre: string;
  marque_id: string;
  price: number;
  quantity: number;
  dateLivraison: Date;
  guid: string;
  description: string;
  fileUrl?: string;
}

export interface IFullCommandDetail {
  createdAt: string;
  delivery: number;
  description: string;
  email: string;
  guid: string;
  id: number;
  marque: string;
  nom: string;
  prenom: string;
  prix: string;
  quantity: number;
  telephone: string;
  titre: string;
  total: number;
}
export interface IProductFullInfo {
  id: string;
  createdAt: string;
  createdBy: string;
  dateLivraison: string;
  description: string;
  guid: string;
  isActive: 1;
  marque: string;
  price: string;
  quantity: number;
  title: string;
  fileUrl?: string;
}

export interface IShoppingProduct {
  idf?: number;
  title: string;
  marque: string;
  type?: string;
  description: string;
  price: number;
  reduction?: number;
  quantity: number;
  guid?: string;
  fileUrl?: string;
  images: {
    image1?: string;
    image2?: string;
    image3?: string;
  };
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ICategorie {
  id: number;
  name: string;
  isActive: string | number;
  marque_name: string;
  marque_id: string | number;
}

export interface IMarque {
  id: number;
  name: string;
  isActive: string | number;
}

export interface ICommand {
  delivery: number;
  email: string;
  guid: string;
  id: number;
  nom: string;
  prenom: string;
  quantity: number;
  telephone: string;
  total: number;
  createdAt: Date;
}
