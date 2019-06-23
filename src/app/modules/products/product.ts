import { Category } from './category';


export class Product {
    id?: string;
    name: string;
    desc?: string;
    category?: string;
    categoryId?: string;
    items?: Array<string>;
    img?: string;

    constructor() {}
}
/*export class Product {
    id: string;
    name: string;
    category?: string;

    ctg?: Category;
    img?: string;
set ctg(value: Category): void{
        this.categoryId = value.id;
        this.category = value.name;
    }
    constructor(name: string, ctg?: Category) {}
        getCategory(){
        let categ = new Category(this.category);
        if(this.categoryId !== null){
            categ.id = this.categoryId;
        } 
        return categ;
    }
}
*/
/*
Banane
Barbe à papa
Framboise
Framboise bleue
Fraise
Raisin
Kiwi
Gomme balloune
Sensation extrême
Cerise
Orange
Citron
Melon
Lime
Bleuet
Bonbon sûr
Pêche
Limonade
Thé glacé
Pomme grenade
Verglas d’été
Pomme surette
Rouge électrolyte
*/