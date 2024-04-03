import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    templateUrl: './validation.html',
})
export class ValidationComponent {
    constructor(public fb: FormBuilder) {
        this.initForm();
    }

    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    initForm() {
        this.form1 = this.fb.group({
            fullname: ['', Validators.required],
        });
        this.form2 = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });
        this.form3 = this.fb.group({
            select: ['', Validators.required],
        });
        this.form4 = this.fb.group({
            firstName: ['Shaun', Validators.required],
            lastName: ['Park', Validators.required],
            userName: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            isTerms: [false, Validators.requiredTrue],
        });
        this.form6 = this.fb.group({
            firstName: ['Shaun', Validators.required],
            lastName: ['Park', Validators.required],
            userName: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            isTerms: [false, Validators.requiredTrue],
        });
    }

    form1!: FormGroup;
    isSubmitForm1 = false;
    submitForm1() {
        this.isSubmitForm1 = true;
        if (this.form1.valid) {
            //form validated success
            this.showMessage('Form submitted successfully.');
        }
    }

    form2!: FormGroup;
    isSubmitForm2 = false;
    submitForm2() {
        this.isSubmitForm2 = true;
        if (this.form2.valid) {
            //form validated success
            this.showMessage('Form submitted successfully.');
        }
    }

    form3!: FormGroup;
    isSubmitForm3 = false;
    submitForm3() {
        this.isSubmitForm3 = true;
        if (this.form3.valid) {
            //form validated success
            this.showMessage('Form submitted successfully.');
        }
    }

    form4!: FormGroup;
    isSubmitForm4 = false;
    submitForm4() {
        this.isSubmitForm4 = true;
        if (this.form4.valid) {
            //form validated success
            this.showMessage('Form submitted successfully.');
        }
    }

    form5 = {
        firstName: 'Shaun',
        lastName: 'Park',
        userName: '',
        city: '',
        state: '',
        zip: '',
        isTerms: false,
    };
    submitForm5() {
        //form validated success
        this.showMessage('Form submitted successfully.');
    }

    form6!: FormGroup;
    isSubmitForm6 = false;
    submitForm6() {
        this.isSubmitForm6 = true;
        if (this.form6.valid) {
            //form validated success
            this.showMessage('Form submitted successfully.');
        }
    }

    showMessage(msg = '', type = 'success') {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    }
}
