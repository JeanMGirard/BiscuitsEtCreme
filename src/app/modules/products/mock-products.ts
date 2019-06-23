import { Product } from './product';
import { PROMOS_PRODUCTS } from './mock-promos';
import { ICECREAM_PRODUCTS } from '../../pages/menu/ice-cream/mock-products';

export const PRODUCTS: Product[] = [
    ...PROMOS_PRODUCTS,
    ...ICECREAM_PRODUCTS

    
];

