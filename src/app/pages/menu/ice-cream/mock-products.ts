import { Product } from '../../../modules/products/product';



export const ICECREAM_PRODUCTS: Product[] = [
    // CARROUSSEL
    { 
        id: 'cremerie.carousel.a',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Carré au chocolat',
        desc: '...',
        img: '/assets/img/menu-products/x-carre-chocolat-1200.png',
        items: []
    }, { 
        id: 'cremerie.carousel.b',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Le peanut buster',
        desc: '...',
        img: '/assets/img/menu-products/x-peanut-buster-1200.png',
        items: []
    }, { 
        id: 'cremerie.carousel.c',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Carré au sucre à la crème',
        desc: '...',
        img: '/assets/img/menu-products/x-carre-sucrecreme-1200.png',
        items: []
    }, { 
        id: 'cremerie.carousel.d',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Banane-oréo',
        desc: '...',
        img: '/assets/img/menu-products/x-banane-oreo-1200.png',
        items: []
    }, { 
        id: 'cremerie.carousel.e',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Le duo',
        desc: '...',
        img: '/assets/img/menu-products/x-duo-1200.png',
        items: []
    }, { 
        id: 'cremerie.carousel.f',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Parfait',
        desc: '...',
        img: '/assets/img/menu-products/x-parfait-1200.png',
        items: []
    }, { 
        id: 'cremerie.carousel.g',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'La fiesta',
        desc: '...',
        img: '/assets/img/menu-products/x-fiesta-1200.png',
        items: []
    },
    
    // REAL PRODUCTS
    { 
        id: 'cornets.molles',
        name: 'Molles',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'vanille', 'chocolat', 'choco-vanille' 
        ]
    },{ 
        id: 'cornets.dures',
        name: 'Creme dures',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            // A FAIRE
            'fraises', 'ananas', 'bleuets', 'cerises', 'framboises',
            'caramel', 'caramel chaud',
            'chocolat', 'fudge chaud',
            'sucre à la crème', 'fraises', 'ananas', 'bleuets', 'cerises', 'framboises',
            'caramel', 'caramel chaud',
            'chocolat', 'fudge chaud',
            'sucre à la crème'
        ]
    },{ 
        id: 'cornets.fruits',
        name: 'Molles aux fruits',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'fraises', 'ananas', 'bleuets', 'cerises', 'framboises', 
            // A FAIRE
            'fraises', 'ananas', 'bleuets', 'cerises', 'framboises'
        ]
    },{
        id: 'garnitures',
        name: 'Garnitures',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'fraises', 'ananas', 'bleuets', 'cerises', 'framboises',
            'caramel', 'caramel chaud',
            'chocolat', 'fudge chaud',
            'sucre à la crème'
        ]
    }, { 
        id: 'tourbillons',
        name: 'Tourbillons',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'Reese', 'Smarties', 'Skor', 'oréo', 'Kit Kat', 
            'Crunchie', 'Coffee Crisp', 'arachides', 'Aéro', 
            'Aéro menthe', 'biscuits et crème', 'Hershey’s',
            'fraises', 'bleuets', 'nerds', 'framboises', 
            'brownies', 'bonbons arc-en-ciel', 'pâte à biscuits'
        ]
    }, { 
        id: 'barbotines',
        name: 'Barbotines',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'Banane', 'Barbe à papa', 'Framboise', 'Framboise bleue', 'Fraise', 
            'Raisin', 'Kiwi', 'Gomme balloune', 'Sensation extrême', 'Cerise', 
            'Orange', 'Citron', 'Melon', 'Lime', 'Bleuet', 'Bonbon sûr', 'Pêche', 
            'Limonade', 'Thé glacé', 'Pomme grenade', 'Verglas d’été', 'Pomme surette', 
            'Rouge électrolyte'
        ]
    }, { 
        id: 'milkshakes',
        name: 'Milkshakes',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'chocolat', 'bananes', 'vanille', 'bleuets', 
            'framboises', 'cerises', 'caramel', 'fraises', 
            'fruits des champs'
        ]
    }, { 
        id: 'milkshakes.nouveaux',
        name: 'Nouveautes Milkshakes',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'Noisette', 'Thé chai', 'Érable', 'Espresso', 
            'Caramel salé', 'Gomme balloune', 'Noix de coco', 'Cannelle & cassonade'
        ]
    }, { 
        id: 'smoothies',
        name: 'Smoothies',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'tropical', 'fruits des champs' 
        ]
    }, { 
        id: 'yogourts',
        name: 'Yogourts',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'fraises', 'ananas', 'bleuets', 'cerises', 'framboises'
        ]
    }, { 
        id: 'yogourts.nouveaux',
        name: 'Nouveautes yogourts',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'Pomme-canelle', 'Menthe', 'Noix de coco'
        ]
    }, {
        id: 'trempages.choco',
        name: 'Trempages au chocolat (reg)',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'Chocolat au lait', 'Chocolat foncé', 'Caramel écossais'
        ]
    },{
        id: 'trempages.belges',
        name: 'Trempages aux chocolats (belges)',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [  
            'Chocolat au lait', 'Chocolat Foncé',
            'Érable', 'Noisette', 'Caramel', 'Fleur de sel',
            'Biscuits', 'Oréo', 'Bailey’s' 
        ]
    },{
        id: 'trempages.enrobages',
        name: 'Enrobages',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'Bonbons arc-en-ciel', 'Arachides', 'Rice Crispies',
            'Oréo émiettés', 'Noix de coco', 'Bretzels' 
        ]
    }
]