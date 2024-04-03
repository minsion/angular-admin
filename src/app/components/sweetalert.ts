import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    templateUrl: './sweetalert.html',
})
export class SweetalertComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    async showAlert(type: number) {
        if (type === 1) {
            Swal.fire({
                title: 'Saved succesfully',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 2) {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'You clicked the!',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 3) {
            const ipAPI = 'https://api.ipify.org?format=json';
            Swal.fire({
                title: 'Your public IP',
                confirmButtonText: 'Show my public IP',
                text: 'Your public IP will be received ' + 'via AJAX request',
                showLoaderOnConfirm: true,
                customClass: 'sweet-alerts',
                preConfirm: () => {
                    return fetch(ipAPI)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            Swal.fire({
                                title: data.ip,
                                customClass: 'sweet-alerts',
                            });
                        })
                        .catch(() => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Unable to get your public IP',
                                customClass: 'sweet-alerts',
                            });
                        });
                },
            });
        } else if (type === 4) {
            Swal.fire({
                icon: 'question',
                title: 'The Internet?',
                text: 'That thing is still around?',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 5) {
            const steps = ['1', '2', '3'];
            const swalQueueStep = Swal.mixin({
                confirmButtonText: 'Next →',
                showCancelButton: true,
                progressSteps: steps,
                input: 'text',
                inputAttributes: {
                    required: 'true',
                },
                validationMessage: 'This field is required',
                padding: '2em',
                customClass: 'sweet-alerts',
            });

            const values: any = [];
            let currentStep;

            for (currentStep = 0; currentStep < steps.length; ) {
                const result = await swalQueueStep.fire({
                    title: `Question ${steps[currentStep]}`,
                    text: currentStep == 0 ? 'Chaining swal modals is easy.' : '',
                    inputValue: values[currentStep] || '',
                    showCancelButton: currentStep > 0,
                    currentProgressStep: currentStep,
                    customClass: 'sweet-alerts',
                });
                if (result.value) {
                    values[currentStep] = result.value;
                    currentStep++;
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    currentStep--;
                } else {
                    break;
                }
            }

            if (currentStep === steps.length) {
                Swal.fire({
                    title: 'All done!',
                    padding: '2em',
                    html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                    confirmButtonText: 'Lovely!',
                    customClass: 'sweet-alerts',
                });
            }
        } else if (type === 6) {
            Swal.fire({
                title: 'Custom animation with Animate.css',
                showClass: {
                    popup: 'animate__animated animate__flip',
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp',
                },
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 7) {
            let timerInterval: any;

            Swal.fire({
                title: 'Auto close alert!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                customClass: 'sweet-alerts',
                didOpen: () => {
                    Swal.showLoading();
                    const b: any = Swal.getHtmlContainer()?.querySelector('b');
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
        } else if (type === 8) {
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: '/assets/images/custom-swal.svg',
                imageWidth: 224,
                imageHeight: 'auto',
                imageAlt: 'Custom image',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 9) {
            Swal.fire({
                icon: 'info',
                title: '<i>HTML</i> <u>example</u>',
                html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
                cancelButtonAriaLabel: 'Thumbs down',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 10) {
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonText: 'Delete',
                padding: '2em',
                customClass: 'sweet-alerts',
            }).then((result) => {
                if (result.value) {
                    Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
                }
            });
        } else if (type === 11) {
            const swalWithBootstrapButtons = Swal.mixin({
                buttonsStyling: false,
                customClass: {
                    popup: 'sweet-alerts',
                    confirmButton: 'btn btn-secondary',
                    cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
                },
            });
            swalWithBootstrapButtons
                .fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true,
                    padding: '2em',
                })
                .then((result) => {
                    if (result.value) {
                        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                });
        } else if (type === 12) {
            Swal.fire({
                title: 'Custom width, padding, background.',
                width: 600,
                padding: '7em',
                customClass: 'background-modal sweet-alerts',
                background: '#fff url(' + '/assets/images/sweet-bg.jpg' + ') no-repeat 100% 100%',
            });
        } else if (type === 13) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="javascript:;">Why do I have this issue?</a>',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 14) {
            Swal.fire({
                title: 'هل تريد الاستمرار؟',
                confirmButtonText: 'نعم',
                cancelButtonText: 'لا',
                showCancelButton: true,
                showCloseButton: true,
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        } else if (type === 15) {
            const toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: 'success',
                title: 'Signed in successfully',
                padding: '10px 20px',
            });
        }
    }

    constructor() {}
}
