import { Component } from '@angular/core';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

@Component({
    moduleId: module.id,
    templateUrl: './carousel.html',
})
export class CarouselComponent {
    codeArr: any = [];
    swiper1: any;
    swiper2: any;
    swiper3: any;
    swiper4: any;
    swiper5: any;

    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
    ngAfterViewInit() {
        this.swiper1 = new Swiper('#slider1', {
            modules: [Navigation, Pagination],
            navigation: { nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' },
            pagination: {
                el: '#slider1 .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
        this.swiper2 = new Swiper('#slider2', {
            modules: [Navigation, Autoplay],
            navigation: { nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' },
            autoplay: { delay: 2000 },
        });
        this.swiper3 = new Swiper('#slider3', {
            modules: [Pagination, Autoplay],
            direction: 'vertical',
            autoplay: { delay: 2000 },
            pagination: {
                el: '#slider3 .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
        this.swiper4 = new Swiper('#slider4', {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            navigation: { nextEl: '.swiper-button-next-ex4', prevEl: '.swiper-button-prev-ex4' },
            pagination: {
                el: '#slider4 .swiper-pagination',
                type: 'fraction',
                clickable: true,
            },
        });
        this.swiper5 = new Swiper('#slider5', {
            modules: [Navigation, Pagination],
            navigation: { nextEl: '.swiper-button-next-ex5', prevEl: '.swiper-button-prev-ex5' },
            breakpoints: {
                1024: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                320: { slidesPerView: 1, spaceBetween: 20 },
            },
            pagination: {
                el: '#slider5 .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
    }
    constructor() {}
}
