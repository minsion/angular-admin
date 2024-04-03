import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-desktop',
    template: `
        <ng-template #template>
            <svg *ngIf="fill" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    opacity="0.5"
                    d="M13.3332 2.6665H18.6665C23.6948 2.6665 26.209 2.6665 27.7711 4.2286C29.3332 5.7907 29.3332 8.30486 29.3332 13.3332V14.6665C29.3332 15.402 29.3332 16.7324 29.3245 17.3332H2.67519C2.6665 16.7324 2.6665 15.402 2.6665 14.6665V13.3332C2.6665 8.30486 2.6665 5.7907 4.2286 4.2286C5.7907 2.6665 8.30486 2.6665 13.3332 2.6665Z"
                    fill="currentColor"
                />
                <path
                    d="M10.646 23.3335C6.86021 23.3335 4.96734 23.3335 3.79125 22.1619C3.02926 21.4029 2.76097 20.344 2.6665 18.6668V17.3335H29.3332V18.6668C29.2387 20.344 28.9704 21.4029 28.2084 22.1619C27.0323 23.3335 25.1395 23.3335 21.3537 23.3335H17.0037V28.6668H21.3537C21.9081 28.6668 22.3576 29.1145 22.3576 29.6668C22.3576 30.2191 21.9081 30.6668 21.3537 30.6668H10.646C10.0916 30.6668 9.64212 30.2191 9.64212 29.6668C9.64212 29.1145 10.0916 28.6668 10.646 28.6668H14.996V23.3335H10.646Z"
                    fill="currentColor"
                />
            </svg>

            <svg *ngIf="!fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 13.8284 22 15.2426 21.1213 16.1213C20.2426 17 18.8284 17 16 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path opacity="0.5" d="M16 22H8M12 17V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path opacity="0.5" d="M22 13H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </ng-template>
    `,
})
export class IconDesktopComponent {
    @Input() fill: boolean = false;
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
