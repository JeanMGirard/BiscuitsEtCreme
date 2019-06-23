import { Category } from './category';
import { Product } from './product';
import { Promo } from './promo';
import { WeekDay } from '@angular/common';


export const PROMOS_PRODUCTS: Product[] = [
    { 
        id: 'promo-sun',
        name: 'Items du menu Mini',
        img: 'assets/img/promos/promo-menu-mini-200.png',
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }, 
    { 
        id: 'promo-mon',
        name: '1 ou 2 boules de pâte à biscuits',
        img: 'assets/img/promos/promo-pab-200.png',
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }, 
    { 
        id: 'promo-tue',
        name: 'Cornets de crème glacée dure',
        img: 'assets/img/promos/promo-dure-200.png',
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }, 
    { 
        id: 'promo-wed',
        name: 'Items à base de crème glacée molle au chocolat',
        img: 'assets/img/promos/promo-choco-200.png' ,
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }, 
    { 
        id: 'promo-thu',
        name: 'Peanut Buster',
        img: 'assets/img/promos/promo-peanut-buster-200.png',
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }, 
    { 
        id: 'promo-thu',
        name: 'Peanut Buster',
        img: 'assets/img/promos/promo-peanut-buster-200.png',
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }, 
    { 
        id: 'promo-fri',
        name: 'Tourbillons',
        img: 'assets/img/promos/promo-tourbillons-200.png',
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }, 
    {  
        id: 'promo-sat',
        name: 'Cornets de crème glacée molle',
        img: 'assets/img/promos/promo-molles-200.png',
        categoryId: 'promotions',
        category: 'Promotions',
        items: []
    }

]
export const PROMOS: Promo[] = [
    { 
        weekday: WeekDay.Sunday,
        product: PROMOS_PRODUCTS[0]
    },{   
        weekday: WeekDay.Monday,
        product: PROMOS_PRODUCTS[1]
    },{ 
        weekday: WeekDay.Tuesday,
        product: PROMOS_PRODUCTS[2]
    },{ 
        weekday: WeekDay.Wednesday,
        product: PROMOS_PRODUCTS[3]
    },{ 
        weekday: WeekDay.Thursday,
        product: PROMOS_PRODUCTS[4]
    },{ 
        weekday: WeekDay.Friday,
        product: PROMOS_PRODUCTS[5]
    },{ 
        weekday: WeekDay.Saturday,
        product: PROMOS_PRODUCTS[6]
    }
];