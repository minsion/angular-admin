import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-info-circle',
    template: `
        <ng-template #template>
            <svg *ngIf="!fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                <path d="M12 7V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
            </svg>

            <svg *ngIf="fill" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    opacity="0.5"
                    d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                    fill="currentColor"
                />
                <path
                    d="M10 4.25C10.4142 4.25 10.75 4.58579 10.75 5V11C10.75 11.4142 10.4142 11.75 10 11.75C9.58579 11.75 9.25 11.4142 9.25 11V5C9.25 4.58579 9.58579 4.25 10 4.25Z"
                    fill="currentColor"
                />
                <path
                    d="M10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
                    fill="currentColor"
                />
            </svg>
        </ng-template>
    `,
})
export class IconInfoCircleComponent {
    @Input() fill: boolean = false;
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
