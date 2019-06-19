import {
    trigger, animateChild, group, state,
    transition, animate, style, query
  } from '@angular/animations';

export const animateTimer = '0.3s ease';

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
    ]),
    transition('submenu => home', [
        query(':enter', [
            style({ opacity: 0 }),
            animate('200ms',style({ opacity: 0 })),
            animate(animateTimer, style({ opacity: 1 }))
        ]),
        query(':leave', [
            style({ opacity: 1 }),
            animate('200ms',style({ opacity: 0 }))
        ])
    ])
]);