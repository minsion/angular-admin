import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './edit.html',
})
export class InvoiceEditComponent {
    constructor() {}
    items: any = [];
    selectedFile = null;
    params = {
        title: 'Tailwind',
        invoiceNo: '#0001',
        to: {
            name: 'Jesse Cory',
            email: 'redq@company.com',
            address: '405 Mulberry Rd. Mc Grady, NC, 28649',
            phone: '(128) 666 070',
        },

        invoiceDate: new Date().toString(),
        dueDate: '',
        bankInfo: {
            no: '1234567890',
            name: 'Bank of America',
            swiftCode: 'VS70134',
            country: 'United States',
            ibanNo: 'K456G',
        },
        notes: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
    };
    currencyList = [
        'USD - US Dollar',
        'GBP - British Pound',
        'IDR - Indonesian Rupiah',
        'INR - Indian Rupee',
        'BRL - Brazilian Real',
        'EUR - Germany (Euro)',
        'TRY - Turkish Lira',
    ];
    selectedCurrency = 'USD - US Dollar';
    tax = 0;
    discount = 0;
    shippingCharge = 0;
    paymentMethod = 'bank';

    ngOnInit() {
        //set default data
        this.items.push(
            {
                id: 1,
                title: 'Calendar App Customization',
                description: 'Make Calendar App Dynamic',
                quantity: 2,
                amount: 120,
                isTax: false,
            },
            {
                id: 2,
                title: 'Chat App Customization',
                description: 'Customized Chat Application to resolve some Bug Fixes',
                quantity: 1,
                amount: 25,
                isTax: false,
            }
        );

        let dt: Date = new Date();
        const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
        let date = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
        this.params.invoiceDate = dt.getFullYear() + '-' + month + '-' + date;
        this.params.dueDate = dt.getFullYear() + '-' + month + '-' + date;
    }

    addItem() {
        let maxId = 0;
        if (this.items && this.items.length) {
            maxId = this.items.reduce((max: number, character: any) => (character.id > max ? character.id : max), this.items[0].id);
        }
        this.items.push({
            id: maxId + 1,
            title: '',
            description: '',
            rate: 0,
            quantity: 0,
            amount: 0,
        });
    }

    removeItem(item: any = null) {
        this.items = this.items.filter((d: any) => d.id != item.id);
    }
}
