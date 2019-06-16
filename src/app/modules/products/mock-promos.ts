import { Promo } from './promo';
import { WeekDay } from '@angular/common';


export const PROMOS: Promo[] = [
    { 
        weekday: WeekDay.Sunday,
        product: { 
            name: 'Items du menu Mini',
            img: '/assets/img/promos/promo-menu-mini-200.png'
        }
    },{   
        weekday: WeekDay.Monday,
        product: { 
            name: '1 ou 2 boules de pâte à biscuits',
            img: '/assets/img/promos/promo-pab-200.png'
        }
    },{ 
        weekday: WeekDay.Tuesday,
        product: { 
            name: 'Cornets de crème glacée dure',
            img: '/assets/img/promos/promo-dure-200.png'
        }
    },{ 
        weekday: WeekDay.Wednesday,
        product: { 
            name: 'Tous les items faits avec de la crème glacée molle au chocolat',
            img: '/assets/img/promos/promo-choco-200.png' 
        }
    },{ 
        weekday: WeekDay.Thursday,
        product: { 
            name: 'Peanut Buster',
            img: '/assets/img/promos/promo-peanut-buster-200.png'
     }
    },{ 
        weekday: WeekDay.Friday,
        product: { 
            name: 'Tourbillons',
            img: '/assets/img/promos/promo-tourbillons-200.png' 
    }
    },{ 
        weekday: WeekDay.Saturday,
        product: {  
            name: 'Cornets de crème glacée molle',
            img: '/assets/img/promos/promo-molles-200.png'
        }
    }
];