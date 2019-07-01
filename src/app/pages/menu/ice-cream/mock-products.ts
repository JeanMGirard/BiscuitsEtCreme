import { Product } from '../../../modules/products/product';



export const ICECREAM_PRODUCTS: Product[] = [
    // CARROUSSEL
    { 
        id: 'cremerie.carousel.a',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Carré au chocolat',
        desc: '...',
        img: '/assets/img/menu-products/x-carre-chocolat.png',
        items: []
    }, { 
        id: 'cremerie.carousel.b',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Le peanut buster',
        desc: '...',
        img: '/assets/img/menu-products/x-peanut-buster.png',
        items: []
    }, { 
        id: 'cremerie.carousel.c',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Carré au sucre à la crème',
        desc: '...',
        img: '/assets/img/menu-products/x-carre-sucrecreme.png',
        items: []
    }, { 
        id: 'cremerie.carousel.d',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Banane-oréo',
        desc: '...',
        img: '/assets/img/menu-products/x-banane-oreo.png',
        items: []
    }, { 
        id: 'cremerie.carousel.e',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Le duo',
        desc: '...',
        img: '/assets/img/menu-products/x-duo.png',
        items: []
    }, { 
        id: 'cremerie.carousel.f',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Parfait',
        desc: '...',
        img: '/assets/img/menu-products/x-parfait.png',
        items: []
    }, { 
        id: 'cremerie.carousel.g',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'Le Skorr',
        desc: '...',
        img: '/assets/img/menu-products/x-skorr.png',
        items: []
    }, { 
        id: 'cremerie.carousel.h',
        categoryId: 'cremerie.carousel',
        category: 'Crèmerie Carousel',
        name: 'La fiesta',
        desc: '...',
        img: '/assets/img/menu-products/x-fiesta.png',
        items: []
    },
    
    // REAL PRODUCTS
    { 
        id: 'cornets.molles',
        name: 'Molle',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'vanille', 'chocolat', 'choco-vanille' 
        ]
    },{ 
        id: 'cornets.dures.nestle',
        name: 'Creme dures (Nestle)',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'Rolo'
        ]
    },{ 
        id: 'cornets.dures.coaticook',
        name: 'Creme dures (Coaticook)',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'cerises noires', 'doubles fraises',
            'tire et pépites d\'érable', 'ribambelle', 'érable et noix',
            'biscuits et crème', 'brownies', 'pâte à biscuits et fudge', 'gomme balloune',
            'pistache', 'praline et crème', 'mokaramel', 'barbe à papa'
        ]
    },{ 
        id: 'cornets.dures.vegan',
        name: 'Creme dure vegan',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'vanille et fraises bio', 
            'biscuits et crème'
        ]
    },{ 
        id: 'cornets.fruits',
        name: 'Molle aux fruits',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'fraise', 'ananas', 'bleuet', 'cerise rouge', 'framboise', 'mangue',
            'mûre', 'pomme', 'kiwi', 'pêche', 'rhubarbe', 'banane'
        ]
    },{
        id: 'garnitures',
        name: 'Garnitures',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'caramel chaud', 'chocolat', 'fudge chaud','caramel', 
            'fraises', 'ananas', 'bleuets', 'cerises', 'framboises',
            'sauce sucre à la crème'
        ]
    }, { 
        id: 'tourbillons',
        name: 'Tourbillons',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'Reese', 'Smarties', 'Skor', 'Oréo', 'Kit Kat', 
            'Crunchie', 'Coffee Crisp', 'Arachides', 'Aéro', 
            'Aéro menthe', 'Biscuits & crème (Hershey’s)',
            'Fraise', 'Bleuet', 'Nerds', 'Framboise', 
            'Brownies', 'Bonbons arc-en-ciel', 'Pâte à biscuits au choix'
        ]
    }, { 
        id: 'barbotines',
        name: 'Barbotines',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'banane', 'barbe à papa', 'framboise', 'framboise bleue', 'fraise', 
            'raisin', 'gomme balloune', 'sensation extrême', 'cerise', 'punch aux fruits',
            'orange', 'citron', 'melon', 'lime', 'bleuet', 'bonbon sûr', 'pêche', 
            'limonade', 'thé glacé', 'pomme grenade', 'verglas d’été', 'pomme surette', 
            'rouge électrolyte'
        ]
    }, { 
        id: 'milkshakes',
        name: 'Milkshakes',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'chocolat', 'banane', 'vanille', 'bleuet', 
            'framboise', 'cerise', 'caramel', 'fraise', 
            'fruits des champs'
        ]
    }, { 
        id: 'milkshakes.nouveaux',
        name: 'Nouveautes Milkshakes',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [
            'noisette', 'thé chai', 'érable', 'espresso', 
            'caramel salé', 'gomme balloune', 'noix de coco', 'cannelle & cassonade'
        ]
    }, { 
        id: 'smoothies',
        name: 'Smoothies',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'fraise', 'ananas', 'bleuet', 'cerise rouge', 'framboise', 'mangue',
            'mûre', 'pomme', 'kiwi', 'pêche', 'rhubarbe', 'banane'
        ]
    }, { 
        id: 'yogourts',
        name: 'Yogourts',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'fraise', 'ananas', 'bleuet', 'cerise rouge', 'framboise', 'mangue',
            'mûre', 'pomme', 'kiwi', 'pêche', 'rhubarbe', 'banane'
        ]
    }, { 
        id: 'yogourts.nouveaux',
        name: 'Nouveautes yogourts',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'pomme-canelle', 'menthe', 'ananas & noix de coco'
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
            'au lait', 'foncé (55% cacao)',
            'érable', 'noisette', 'caramel fleur de sel',
            'biscuits & crème', 'Bailey’s' 
        ]
    },{
        id: 'trempages.enrobages',
        name: 'Enrobages',
        img: null,
        categoryId: 'cremerie',
        category: 'Crèmerie',
        items: [ 
            'bonbons arc-en-ciel', 'arachides', 'Rice Krispies',
            'Oréo émiettés', 'noix de coco', 'bretzels', 'pépites de chocolat'
        ]
    }
]