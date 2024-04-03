import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './quill-editor.html',
})
export class QuillEditorComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    modules1 = {
        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']],
    };

    content1 = `<h1>This is a heading text...</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor
              tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non
              purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc
              odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus.
              Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper.
            </p>
            <br />
            <p>
              Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras
              auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante
              tempor posuere a at lorem.
            </p>
            <br />
            <p>
              Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras
              auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante
              tempor posuere a at lorem.
            </p>
            <br />
            <p>
              Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel
              leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id
              dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante.
            </p>`;

    modules2 = {
        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']],
    };

    content2 = `<h1>This is a heading text...</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor
              tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non
              purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc
              odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus.
              Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper.
            </p>
            <br />
            <p>
              Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras
              auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante
              tempor posuere a at lorem.
            </p>
            <br />
            <p>
              Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras
              auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante
              tempor posuere a at lorem.
            </p>
            <br />
            <p>
              Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel
              leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id
              dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante.
            </p>`;
}
