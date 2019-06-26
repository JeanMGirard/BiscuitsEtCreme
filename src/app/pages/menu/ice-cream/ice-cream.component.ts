import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MenuService } from '../menu.service';

import { ProductService } from '../../../modules/products/product.service';
import { Product } from '../../../modules/products/product';
import { environment } from '../../../../environments/environment';
import { ICECREAM_PRODUCTS } from './mock-products';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: [
    '../menu.component.less',
    '../sub-menu/sub-menu.component.less',
    './ice-cream.component.less'
  ]
})
export class IceCreamComponent implements OnInit {
  products: Product[];
  carousel: Product[];

  constructor(
    public dialog: MatDialog,
    private service: MenuService,
    private productService: ProductService
    ) {}

  ngOnInit() {
    this.service.onArriveMenu();

    if(environment.api.live) {
      this.productService.getProducts().subscribe(data => {
        this.products = data.map(e => { 
            return {id: e.payload.doc.id, ...e.payload.doc.data()} as Product; 
          }).filter(e => (e.categoryId === 'cremerie')
        );
        this.carousel = data.map(e => { 
            return {id: e.payload.doc.id, ...e.payload.doc.data()} as Product; 
          }).filter(e => (e.categoryId === 'cremerie.carousel')
        );
      });
    } else {
      this.products = ICECREAM_PRODUCTS.filter(e => (e.categoryId === 'cremerie'));
      this.carousel = ICECREAM_PRODUCTS.filter(e => (e.categoryId === 'cremerie.carousel'));
    }

    
  }

  openDialog(lists: any): void{
    this.dialog.open(PopupComponent, {
      data: lists
    });
  }
  filterProducts(element, index, array){
    return (element >= 10);
  }


  openIceCreams(): void {
    this.openDialog({ 
      name: 'Crèmes glacées',
      lists: [
        { name: 'Molles',    
          items: this.products.find(e=> e.id === 'cornets.molles').items
        }, { 
          name: 'Molles aux fruits', 
          items: this.products.find(e=> e.id === 'cornets.fruits').items
        }, { 
          name: 'Dures',     
          items: this.products.find(e=> e.id === 'cornets.dures').items
        }
      ]
    });
  }
  openMolleFruits(): void {
    this.openDialog({ 
      name: 'Molles aux fruits',
      lists: [
        { items: this.products.find(e=> e.id === 'cornets.fruits').items
        }
      ]
    });
  }
  openDures(): void {
    this.openDialog({ 
      name: 'Dures',
      lists: [
        { 
          name: 'Coaticook',
          items: this.products.find(e=> e.id === 'cornets.dures.coaticook').items
        },{ 
          name: 'Nestlé',
          items: this.products.find(e=> e.id === 'cornets.dures.nestle').items
        },{ 
          name: 'vegans',
          items: this.products.find(e=> e.id === 'cornets.dures.vegan').items
        }
      ]
    });
  }

  openEnrobages(): void {
    this.openDialog({ 
      name: 'Enrobages', 
      lists: [
        { 
          items: this.products.find(e=> e.id === 'trempages.enrobages').items 
        }
    ]});
  }
  openTrempages(): void {
    this.openDialog({ 
      name: 'Chocolats', 
      lists: [
        { name: 'Réguliers', 
          items: this.products.find(e=> e.id === 'trempages.choco').items 
        }, { 
          name: 'Belges', 
          items: this.products.find(e=> e.id === 'trempages.belges').items 
        }
      ]
    });
  }
  openTrempagesEnrobages(): void {
    this.openDialog({ 
      name: 'Trempages', 
      lists: [{ 
          name: 'réguliers', 
          items: this.products.find(e=> e.id === 'trempages.choco').items 
        }, { 
          name: 'chocolats belges', 
          items: this.products.find(e=> e.id === 'trempages.belges').items 
        }
      ]
    });
  }
  openGarnitures(): void {
    this.openDialog({ 
      name: 'Garnitures', 
      lists: [
        { items: this.products.find(e=> e.id === 'garnitures').items 
        },{ 
          name: 'enrobages', 
          items: this.products.find(e=> e.id === 'trempages.enrobages').items 
        }
    ]});
  }
  openYogourts(): void {
    this.openDialog({ 
      name: 'Yogourts', 
      lists: [
        { items: this.products.find(e=> e.id === 'yogourts').items },
        { 
          name:'Exclusivités', 

          items: this.products.find(e=> e.id === 'yogourts.nouveaux').items 
        }
    ]});
  }
  openTourbillons(): void {
    this.openDialog({ 
      name: 'Tourbillons',
      lists: [
        { items: this.products.find(e=> e.id === 'tourbillons').items }
    ]});
  }
  openSlushes(): void {
    this.openDialog({ 
      name: ' ', 
      wide: true,
      lists: [
        { items: this.products.find(e=> e.id === 'barbotines').items }
    ]});
  }
  openMilkshakes(): void {
    this.openDialog({ 
      name: 'Milkshakes', 
      lists: [
        { items: this.products.find(e=> e.id === 'milkshakes').items },
        { 
          name:'exclusivités', 
          items: this.products.find(e=> e.id === 'milkshakes.nouveaux').items 
        }
    ]});
  }

  openSmoothies(): void {
    this.openDialog({ 
      name: 'Smoothies', 
      lists: [
        { name: '(3 fruits au choix)',
          items: this.products.find(e=> e.id === 'smoothies').items }
    ]});
  }
}

