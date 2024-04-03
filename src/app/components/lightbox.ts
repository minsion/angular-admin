import { Component } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
    moduleId: module.id,
    templateUrl: './lightbox.html',
})
export class LightboxComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    allcontrols = true;
    items: any = [];

    bindFancybox() {
        if (this.allcontrols) {
            this._lightboxConfig.showImageNumberLabel = true;
            this._lightboxConfig.showZoom = true;
            this._lightboxConfig.showRotate = true;
            this._lightboxConfig.albumLabel = '%1 of %2';

            this.items = [
                {
                    src: '/assets/images/lightbox1.jpg',
                    caption: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                    title: 'Photo: Samuel Rohl',
                },
                {
                    src: '/assets/images/lightbox2.jpeg',
                    caption: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                    title: 'Photo: Samuel Rohl',
                },
                {
                    src: '/assets/images/lightbox3.jpeg',
                    caption: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
                    title: 'Photo: Michael Hull',
                },
                {
                    src: '/assets/images/lightbox4.jpeg',
                    caption: 'This is dummy caption.',
                    title: 'Photo: Folkert Gorter',
                },
                {
                    src: '/assets/images/lightbox5.jpeg',
                    caption: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                    title: 'Photo: Thomas Lefebvre',
                },
                {
                    src: '/assets/images/lightbox6.jpeg',
                    caption: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                    title: 'Photo: Thomas Lefebvre',
                },
            ];
        } else {
            this._lightboxConfig.showImageNumberLabel = false;
            this._lightboxConfig.showZoom = false;
            this._lightboxConfig.showRotate = false;
            this._lightboxConfig.albumLabel = '';

            this.items = [
                {
                    src: '/assets/images/lightbox1.jpg',
                },
                {
                    src: '/assets/images/lightbox2.jpeg',
                },
                {
                    src: '/assets/images/lightbox3.jpeg',
                },
                {
                    src: '/assets/images/lightbox4.jpeg',
                },
                {
                    src: '/assets/images/lightbox5.jpeg',
                },
                {
                    src: '/assets/images/lightbox6.jpeg',
                },
            ];
        }
    }

    constructor(private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
        this.bindFancybox();

        _lightboxConfig.enableTransition = false;
        _lightboxConfig.wrapAround = true;
        _lightboxConfig.positionFromTop = 0;
        _lightboxConfig.disableScrolling = true;
    }
    open(index: number): void {
        // open lightbox
        this._lightbox.open(this.items, index);
    }
}
