import {
    trigger, animateChild, group, state,
    transition, animate, style, query
  } from '@angular/animations';

export const animateTimer = '300ms';

// Routable animations
export const routeAnimation =
trigger('routeAnimation', [
    transition('menu <=> submenu', [
        query(':enter', [
            style({ opacity: 0 }),
            animate(animateTimer, style({ opacity: 1 }))
        ]),
        query(':leave', [
            style({ opacity: 1 }),
            animate('200ms',style({ opacity: 0.7 })),
            animate(animateTimer, style({ opacity: 0 }))
        ])
    ])
]);