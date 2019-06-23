import { Menu } from './menu';

export const MENUS: Menu[] = [
    {
        name: 'pates-a-biscuit',
        title: 'Pâtes à biscuit',
        elem: 'app-cookie-dough',
        linkImgUrl: 'assets/img/menu-bg/menu-biscuits-bg-600.jpg',

        tileTitle: 'Pâtes à biscuit',
        tileDesc: 'Pâtes à biscuit',
        tileImage: 'assets/img/menu-bg/menu-biscuits-tile-200.jpg'
    }, {
        name: 'cremerie',
        title: 'Crèmerie',
        elem: 'app-ice-cream',
        linkImgUrl: 'assets/img/menu-bg/menu-icecream-bg-600.jpg',
        
        tileTitle: 'Crèmerie',
        tileDesc: '',
        tileImage: 'assets/img/menu-bg/menu-icecream-tile-200.jpg'
    }, {
        name: 'autre-produits',
        elem: 'app-other-products',
        title: 'Autres',
        linkImgUrl: 'assets/img/menu-bg/menu-other-bg-600.jpg',
        
        tileTitle: 'Autres',
        tileDesc: 'Autres produits',
        tileImage: 'assets/img/menu-bg/menu-other-tile-200.jpg'
    }
];
export const MENUS_EN: Menu[] = [
    {
        name: 'cookie-dough',
        title: 'cookie-dough',
        elem: 'app-cookie-dough',
        linkImgUrl: 'assets/img/menu-bg/menu-biscuits-bg-600.jpg'
    }, {
        name: 'ice-cream',
        title: 'Crèmerie',
        elem: 'app-ice-cream',
        linkImgUrl: 'assets/img/menu-bg/menu-icecream-bg-600.jpg'
    }, {
        name: 'other-products',
        title: 'Autres spécialitées',
        elem: 'app-other-products',
        linkImgUrl: 'assets/img/menu-bg/menu-other-bg-600.jpg'
    }
];
