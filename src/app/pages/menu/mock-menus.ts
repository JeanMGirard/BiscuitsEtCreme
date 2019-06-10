import { Menu } from './menu';

export const MENUS: Menu[] = [
    {
        name: 'pates-a-biscuit',
        title: 'Pâtes à biscuit',
        elem: 'app-cookie-dough',
        linkImgUrl: '/assets/img/backgrounds/biscuits-bg-600.png',

        tileTitle: 'Pâtes à biscuit',
        tileDesc: 'Pâtes à biscuit',
        tileImage: '/assets/img/home/grid-1-1.1.jpg'
    }, {
        name: 'cremerie',
        title: 'Crèmerie',
        elem: 'app-ice-cream',
        linkImgUrl: '/assets/img/backgrounds/ice-cream-bg-600.png',
        
        tileTitle: 'Crèmerie',
        tileDesc: '',
        tileImage: '/assets/img/home/grid-1-1.2.jpg'
    }, {
        name: 'autre-produits',
        title: 'Autres spécialitées',
        elem: 'app-other-products',
        linkImgUrl: '/assets/img/menu/menu-other-prod.jpg',
        
        tileTitle: 'spécialitées',
        tileDesc: 'Autres produits',
        tileImage: '/assets/img/menu/menu-other-prod.jpg'
    }
];
export const MENUS_EN: Menu[] = [
    {
        name: 'cookie-dough',
        title: 'cookie-dough',
        elem: 'app-cookie-dough',
        linkImgUrl: '/assets/img/backgrounds/biscuits-bg-600.png'
    }, {
        name: 'ice-cream',
        title: 'Crèmerie',
        elem: 'app-ice-cream',
        linkImgUrl: '/assets/img/backgrounds/ice-cream-bg-600.png'
    }, {
        name: 'other-products',
        title: 'Autres spécialitées',
        elem: 'app-other-products',
        linkImgUrl: '/assets/img/menu/menu-other-prod.jpg'
    }
];
