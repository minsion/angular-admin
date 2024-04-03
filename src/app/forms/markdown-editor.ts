import { Component } from '@angular/core';
import { EasymdeOptions } from 'ngx-easymde/src/config';

@Component({
    moduleId: module.id,
    templateUrl: './markdown-editor.html',
})
export class MarkdownEditorComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    constructor() {}

    options1: EasymdeOptions = {
        renderingConfig: { codeSyntaxHighlighting: true },
        configs: { spellChecker: false },
    };

    content1 = `# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
`;

    options2: EasymdeOptions = {
        renderingConfig: { codeSyntaxHighlighting: true },
        configs: { spellChecker: false, },
        autosave: { enabled: true, delay: 1000, uniqueId: 'mde-autosave-demo' }
    };

    content2 = `# Autosaving!

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.
`;
}
