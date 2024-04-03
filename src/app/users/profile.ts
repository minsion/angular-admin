import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    moduleId: module.id,
    templateUrl: './profile.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class ProfileComponent {
    constructor() {}
}
