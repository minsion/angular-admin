import { Component } from '@angular/core';
import { FileUploadWithPreview } from 'file-upload-with-preview';

@Component({
    moduleId: module.id,
    templateUrl: './file-upload.html',
})
export class FileUploadComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    ngOnInit() {
        // single image upload
        new FileUploadWithPreview('myFirstImage', {
            images: {
                baseImage: '/assets/images/file-preview.svg',
                backgroundImage: '',
            },
        });

        // multiple image upload
        new FileUploadWithPreview('mySecondImage', {
            images: {
                baseImage: '/assets/images/file-preview.svg',
                backgroundImage: '',
            },
            multiple: true,
        });
    }
}
