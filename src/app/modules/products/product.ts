import { Category } from './category';

export class Product {
    id?: number;
    name: string;
    ctg?: Category;

    img?: string;

    constructor(name: string, ctg?: Category) {}
}