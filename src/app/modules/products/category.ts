export class Category {
    static readonly DEFAULT      = new Category('Autres produits');
    static readonly ICECREAM     = new Category('Cremerie');
    static readonly COOKIEDOUGH  = new Category('Pates a biscuits');
    static readonly PROMO        = new Category('Promotions');

    id: string;
    name: string;

    constructor(name: string) {
        this.id = name.toLowerCase()
            .replace(' ', '-')
            .replace('é|è|ê', 'e');
        this.name = name;
    }
}

