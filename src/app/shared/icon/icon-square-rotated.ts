import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-square-rotated',
    template: `
        <ng-template #template>
            <svg width="15" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    d="M8.01731 8.01736C11.3506 4.68402 13.0173 3.01736 15.0884 3.01736C17.1594 3.01736 18.8261 4.68402 22.1594 8.01736C25.4927 11.3507 27.1595 13.0174 27.1594 15.0884C27.1594 17.1595 25.4928 18.8262 22.1594 22.1595C18.8261 25.4928 17.1594 27.1595 15.0884 27.1594C13.0173 27.1595 11.3506 25.4928 8.01731 22.1595C4.68397 18.8262 3.01731 17.1595 3.01734 15.0884C3.01729 13.0174 4.68401 11.3507 8.01731 8.01736Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
            </svg>
        </ng-template>
    `,
})
export class IconSquareRotatedComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
