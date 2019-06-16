export class Category {
    static readonly DEFAULT      = new Category('Autres produits');
    static readonly ICECREAM     = new Category('Cremerie');
    static readonly COOKIEDOUGH  = new Category('Pates a biscuits');
    static readonly PROMO        = new Category('Promotions');

    id?: number;
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

