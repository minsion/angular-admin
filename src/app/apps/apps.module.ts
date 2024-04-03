import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modal
import { ModalModule } from 'angular-custom-modal';

// sortable
import { SortablejsModule } from '@dustfoundation/ngx-sortablejs';

// headlessui
import { MenuModule } from 'headlessui-angular';

// perfect-scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

// quill editor
import { QuillModule } from 'ngx-quill';

// fullcalendar
import { FullCalendarModule } from '@fullcalendar/angular';

// tippy
import { NgxTippyModule } from 'ngx-tippy-wrapper';

// datatable
import { DataTableModule } from '@bhplugin/ng-datatable';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

import { ScrumboardComponent } from './scrumboard';
import { ContactsComponent } from './contacts';
import { NotesComponent } from './notes';
import { TodolistComponent } from './todolist';
import { InvoicePreviewComponent } from './invoice/preview';
import { InvoiceAddComponent } from './invoice/add';
import { InvoiceEditComponent } from './invoice/edit';
import { CalendarComponent } from './calendar';
import { ChatComponent } from './chat';
import { MailboxComponent } from './mailbox';
import { InvoiceListComponent } from './invoice/list';

const routes: Routes = [
    { path: 'apps/chat', component: ChatComponent, title: 'Chat | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/mailbox', component: MailboxComponent, title: 'Mailbox | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/scrumboard', component: ScrumboardComponent, title: 'Scrumboard | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/contacts', component: ContactsComponent, title: 'Contacts | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/notes', component: NotesComponent, title: 'Notes | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/todolist', component: TodolistComponent, title: 'Todolist | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/invoice/list', component: InvoiceListComponent, title: 'Invoice List | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/invoice/preview', component: InvoicePreviewComponent, title: 'Invoice Preview | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/invoice/add', component: InvoiceAddComponent, title: 'Invoice Add | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/invoice/edit', component: InvoiceEditComponent, title: 'Invoice Edit | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'apps/calendar', component: CalendarComponent, title: 'Calendar | VRISTO - Multipurpose Tailwind Dashboard Template' },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        SortablejsModule,
        MenuModule,
        NgScrollbarModule.withConfig({
            visibility: 'hover',
            appearance: 'standard',
        }),
        QuillModule.forRoot(),
        FullCalendarModule,
        NgxTippyModule,
        DataTableModule,
        IconModule,
    ],
    declarations: [
        ChatComponent,
        ScrumboardComponent,
        ContactsComponent,
        NotesComponent,
        TodolistComponent,
        InvoiceListComponent,
        InvoicePreviewComponent,
        InvoiceAddComponent,
        InvoiceEditComponent,
        CalendarComponent,
        MailboxComponent,
    ],
})
export class AppsModule {}
