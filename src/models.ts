export interface NavItem {
  label: string;
  href: string;
}

export type ItemKey = "cart" | "wishlist" | "checkout";

export interface IRating {
    rate: number;
    count: number;
  }
  
  export interface IDish {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: IRating;
    slug: string;
    mainImage: string;
    category?: ICategory;
    gallery?: string[];
  }
  
  export interface ICategory {
    id: string;
    name: string;
    image: string;
    slug: string;
  }
  
  export interface IFeaturedItems {
    topCategories: ICategory[];
    topDishes: IDish[];
    bestSellingDishes: IDish[];
    mostRatedDishes: IDish[];
  }
  
  export interface IState {
    cart: IItem[];
    wishlist: IItem[];
    checkout: IItem[];
  }
  
  export interface IItem extends IDish {
    count: number;
  }
  
  export interface IBreadcrumbItem {
    name: string;
    link: string;
  }
  
  export interface IContext {
    state: IState;
    addItem: (key: ItemKey, dish: IDish, count?: number) => void;
    removeItem: (key: ItemKey, dishId: string) => void;
    increaseCount: (key: ItemKey, dishId: string) => void;
    decreaseCount: (key: ItemKey, dishId: string) => void;
    isAdded: (key: ItemKey, dishId: string) => boolean;
    resetItems: (key: ItemKey) => void;
  }