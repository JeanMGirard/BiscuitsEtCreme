// https://angular.io/api/common/WeekDay#weekday
import { WeekDay } from '@angular/common';
import { Product } from './product';

export class Promo {
    weekday?: WeekDay;
    reduct100?: number;
    product: Product;

    constructor(product: Product, day?: WeekDay) {
        this.product = product;
        this.weekday = day;
    }
}

