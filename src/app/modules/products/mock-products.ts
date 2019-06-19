import { Product } from './product';
import { Category } from './category';


export const PRODUCTS: Product[] = [
    { id: 0, name: '1 boule de pâte à biscuits crue', ctg: Category.COOKIEDOUGH },
    { id: 1, name: '2 boules de pâte à biscuits crue', ctg: Category.COOKIEDOUGH },
    { id: 2, name: 'Combo molle', ctg: Category.COOKIEDOUGH },
    { id: 3, name: 'Combo dure', ctg: Category.COOKIEDOUGH },
    { id: 4, name: 'Tarte pâte à biscuits', ctg: Category.COOKIEDOUGH },
    { id: 5, name: 'Biscuits (pâte à biscuits cuite)', ctg: Category.COOKIEDOUGH },
    { id: 6, name: 'Minis (petites boules de pâte à biscuits crue enrobées)', ctg: Category.COOKIEDOUGH },
    { id: 7, name: 'Crème glacée molle', ctg: Category.ICECREAM },
    { id: 8, name: 'Crème glacée dure', ctg: Category.ICECREAM },
    { id: 9, name: 'Coupe glacée (sundae)', ctg: Category.ICECREAM },
    { id: 10, name: 'Tourbillon', ctg: Category.ICECREAM },
    { id: 11, name: 'Yogourt glacé', ctg: Category.ICECREAM },
    { id: 12, name: 'Ultra Smart', ctg: Category.ICECREAM },
    { id: 13, name: 'Fiesta', ctg: Category.ICECREAM },
    {   id: 14, name: 'Banane Royale', ctg: Category.ICECREAM,
        img: "assets/img/products/banane-royale.png" 
    },
    { id: 15, name: 'Peanut Buster', ctg: Category.ICECREAM,
        img: "assets/img/products/peanut-buster.png"
    },
    { id: 16, name: 'Parfait', ctg: Category.ICECREAM },
    { id: 17, name: 'Skorr', ctg: Category.ICECREAM },
    {   id: 18, name: 'Duo', ctg: Category.ICECREAM,
        img: "assets/img/products/duo.png"
    },{   
        id: 19, name: 'Poutine', ctg: Category.ICECREAM,
        img: "assets/img/products/poutine.png"
    },
    { id: 20, name: 'Carré au chocolat', ctg: Category.ICECREAM },
    { id: 21, name: 'Sundae aux bananes', ctg: Category.ICECREAM },
    { id: 22, name: 'Délice sucre à la crème', ctg: Category.ICECREAM },
    {   id: 23, name: 'Barbotine Slush', ctg: Category.ICECREAM,
        img: "assets/img/products/montblanc.png"   },
    { id: 24, name: 'Arc en ciel ', ctg: Category.ICECREAM },
    { id: 25, name: 'Montblanc', ctg: Category.ICECREAM,
        img: "assets/img/products/montblanc.png"  
    },
    { id: 26, name: 'Mousseline', ctg: Category.ICECREAM },
    { id: 27, name: 'Explosion', ctg: Category.ICECREAM },
    { id: 28, name: 'Lait frappé (milkshake)', ctg: Category.ICECREAM },
    { id: 29, name: 'Smoothies', ctg: Category.DEFAULT },
    { id: 30, name: 'Limonade', ctg: Category.DEFAULT },
    { id: 31, name: 'Cocktail non alcoolisé', ctg: Category.DEFAULT },
    { id: 32, name: 'Souris pour enfant', ctg: Category.DEFAULT },
    { id: 33, name: 'Recettes en pot', ctg: Category.DEFAULT },
    { id: 34, name: 'Pop slush', ctg: Category.DEFAULT },
    { id: 35, name: 'Smoothies glacés', ctg: Category.DEFAULT },
    { id: 36, name: 'Sandwichs à la crème glacée régulière ou à la pâte à biscuits', ctg: Category.DEFAULT }    
]

