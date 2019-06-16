import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: [
    '../menu.component.less',
    '../sub-menu/sub-menu.component.less',
    './ice-cream.component.less'
  ]
})
export class IceCreamComponent {

  constructor(public dialog: MatDialog) {}

  openDialogLarge(lists: any): void{
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '800px',
      data: lists
    });
  }
  openDialog(lists: any): void{
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px',
      data: lists
    });

  }


  openIceCreams(): void {
    this.openDialogLarge({ 
      name: 'Crèmes glacées', 
      wide: true,
      lists: [
        { name: 'Molles',    items: ['Vanille', 'Chocolat', 'Torsade']},
        { name: 'Dures',     items: ['Vanille', 'Chocolat', 'Torsade']},
        { name: 'Au fruits', items: ['Vanille', 'Chocolat', 'Torsade']}
    ]});
  }

  openTrempages(): void {
    this.openDialogLarge({ 
      name: 'Chocolats', 
      wide: true,
      lists: [
        { name: 'Reguliers', items: [
        ]},
        { name: 'Belges', items: [
        ]}
      ]
    });
  }
  openGarnitures(): void {
    this.openDialog({ 
      name: 'Garnitures', 
      lists: [
        { items: [
            'Rice crispies'
        ]}
    ]});
  }

  openMilkshakes(): void {
    this.openDialog({ 
      name: 'Milkshake', 
      lists: [
        { items: [
            'chocolat', 'bananes', 'vanille', 'bleuets', 
            'framboises', 'cerises', 'caramel', 'fraises', 
            'fruits des champs'
        ]}
    ]});
  }


  openTourbillons(): void {
    this.openDialogLarge({ 
      name: 'Tourbillons',
      lists: [
        { items: [
          'Reese', 'Smarties', 'Skor', 'oréo', 'Kit Kat', 
          'Crunchie', 'Coffee Crisp', 'arachides', 'Aéro', 
          'Aéro menthe', 'biscuits et crème (Hershey’s)', 
          'fraises', 'bleuets', 'nerds', 'framboises', 
          'brownies', 'bonbons arc-en-ciel', 'pâte à biscuits au choix'
        ]}
    ]});
  }

  openYogourts(): void {
    this.openDialog({ 
      name: 'Yogourts', 
      lists: [
        { items: [
                'fraise'
        ]}
    ]});
  }
  openSlushes(): void {
    this.openDialogLarge({ 
      name: 'Barbotines', 
      lists: [
        { items: [
          'Banane', 'Barbe à papa', 'Framboise', 'Framboise bleue', 'Fraise', 
          'Raisin', 'Kiwi', 'Gomme balloune', 'Sensation extrême', 'Cerise', 
          'Orange', 'Citron', 'Melon', 'Lime', 'Bleuet', 'Bonbon sûr', 'Pêche', 
          'Limonade', 'Thé glacé', 'Pomme grenade', 'Verglas d’été', 'Pomme surette', 
          'Rouge électrolyte'
        ]}
    ]});
  }
}

