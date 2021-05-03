export class Object {}

export class Buyer {
  id: string = '';
  rut: string = '';
  name: string = '';
  region: string = '';
  register: string = '';
  cellphone: number = 0;
  address: string = '';
  email: string = '';
  type: string = '';
}

export class Seller {
  id: string = '';
  rut: string = '';
  name: string = '';
  region: string = '';
  ratings: Array<Rating> = new Array<Rating>();
  register: string = '';
  cellphone: number = 0;
  address: string = '';
  email: string = '';
  type: string = '';
}

export class Rating {
  id: string = '';
  seller: Seller = new Seller();
  buyer: Buyer = new Buyer();
  rating: number = 0;
}

export class Purchase {
  id: string = '';
  date: string = '';
  seller: Seller = new Seller();
  product: Product = new Product();
  buyer: Buyer = new Buyer();
  quantity: number = 0;
  total: number = 0;
}

export class Product {
  id: string = '';
  name: string = '';
  creation: string = '';
  description: string = '';
  category: Category = new Category();
  photos: Array<Photo> = new Array<Photo>();
  seller: Seller = new Seller();
  available: number = 0;
  state: string = '';
  price: number = 0;
}

export class Category {
  id: string = '';
  name: string = '';
}

export class Photo {
  id: string = '';
  creation: string = '';
  url: string = '';
}
