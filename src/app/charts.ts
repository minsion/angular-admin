import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './charts.html',
})
export class ChartsComponent {
    codeArr: any = [];
    toggleCode = (name: string) => {
        if (this.codeArr.includes(name)) {
            this.codeArr = this.codeArr.filter((d: string) => d != name);
        } else {
            this.codeArr.push(name);
        }
    };

    store: any;
    lineChart: any;
    areaChart: any;
    columnChart: any;
    simpleColumnStacked: any;
    barChart: any;
    mixedChart: any;
    radarChart: any;
    pieChart: any;
    donutChart: any;
    polarAreaChart: any;
    radialBarChart: any;
    bubbleChart: any;
    isLoading = true;
    constructor(public storeData: Store<any>) {
        this.initStore();
        this.isLoading = false;
    }

    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                const hasChangeTheme = this.store?.theme !== d?.theme;
                const hasChangeLayout = this.store?.layout !== d?.layout;
                const hasChangeMenu = this.store?.menu !== d?.menu;
                const hasChangeSidebar = this.store?.sidebar !== d?.sidebar;

                this.store = d;

                if (hasChangeTheme || hasChangeLayout || hasChangeMenu || hasChangeSidebar) {
                    if (this.isLoading || hasChangeTheme) {
                        this.initCharts(); //init charts
                    } else {
                        setTimeout(() => {
                            this.initCharts(); // refresh charts
                        }, 300);
                    }
                }
            });
    }

    initCharts() {
        const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
        const isRtl = this.store.rtlClass === 'rtl' ? true : false;
        this.lineChart = {
            series: [
                {
                    name: 'Sales',
                    data: [45, 55, 75, 25, 45, 110],
                },
            ],
            chart: {
                height: 300,
                type: 'line',
                toolbar: false,
            },
            colors: ['#4361ee'],
            tooltip: {
                marker: false,
                y: {
                    formatter(number: string) {
                        return '$' + number;
                    },
                },
                theme: isDark ? 'dark' : 'light',
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -20 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
        };

        this.areaChart = {
            series: [
                {
                    name: 'Income',
                    data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
                },
            ],
            chart: {
                type: 'area',
                height: 300,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#805dca'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            xaxis: {
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -40 : 0,
                },
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            legend: {
                horizontalAlign: 'left',
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
        };

        this.columnChart = {
            series: [
                {
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                },
                {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                },
            ],
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#805dca', '#e7515a'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
                y: {
                    formatter: function (val: any) {
                        return val;
                    },
                },
            },
        };

        this.simpleColumnStacked = {
            series: [
                {
                    name: 'PRODUCT A',
                    data: [44, 55, 41, 67, 22, 43],
                },
                {
                    name: 'PRODUCT B',
                    data: [13, 23, 20, 8, 13, 27],
                },
            ],
            chart: {
                height: 300,
                type: 'bar',
                stacked: true,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#2196f3', '#3b3f5c'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 5,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -20 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            legend: {
                position: 'right',
                offsetY: 40,
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
            fill: {
                opacity: 0.8,
            },
        };

        this.barChart = {
            series: [
                {
                    name: 'Sales',
                    data: [44, 55, 41, 67, 22, 43, 21, 70],
                },
            ],
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
            },
            colors: ['#4361ee'],
            xaxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                reversed: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            fill: {
                opacity: 0.8,
            },
        };

        this.mixedChart = {
            series: [
                {
                    name: 'TEAM A',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                    name: 'TEAM B',
                    type: 'area',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                    name: 'TEAM C',
                    type: 'line',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
            ],
            chart: {
                height: 300,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#2196f3', '#00ab55', '#4361ee'],
            stroke: {
                width: [0, 2, 2],
                curve: 'smooth',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            fill: {
                opacity: [1, 0.25, 1],
            },

            labels: [
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
            ],
            markers: {
                size: 0,
            },
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                title: {
                    text: 'Points',
                },
                min: 0,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            tooltip: {
                shared: true,
                intersect: false,
                theme: isDark ? 'dark' : 'light',
                y: {
                    formatter: (y: number) => {
                        if (typeof y !== 'undefined') {
                            return y.toFixed(0) + ' points';
                        }
                        return y;
                    },
                },
            },
            legend: {
                itemMargin: {
                    horizontal: 4,
                    vertical: 8,
                },
            },
        };

        this.radarChart = {
            series: [
                {
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                },
            ],
            chart: {
                height: 300,
                type: 'radar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#4361ee'],
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June'],
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColors: isDark ? '#191e3a' : '#e0e6ed',
                        connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                    },
                },
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
        };

        this.pieChart = {
            series: [44, 55, 13, 43, 22],
            chart: {
                height: 300,
                type: 'pie',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
            stroke: {
                show: false,
            },
            legend: {
                position: 'bottom',
            },
        };

        this.donutChart = {
            series: [44, 55, 13],
            chart: {
                height: 300,
                type: 'donut',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                show: false,
            },
            labels: ['Team A', 'Team B', 'Team C'],
            colors: ['#4361ee', '#805dca', '#e2a03f'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
            legend: {
                position: 'bottom',
            },
        };

        this.polarAreaChart = {
            series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
            chart: {
                height: 300,
                type: 'polarArea',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3', '#3b3f5c'],
            stroke: {
                show: false,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeColor: isDark ? '#191e3a' : '#e0e6ed',
                    },
                    spokes: {
                        connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                    },
                },
            },
            legend: {
                position: 'bottom',
            },
            fill: {
                opacity: 0.85,
            },
        };

        this.radialBarChart = {
            series: [44, 55, 41],
            chart: {
                height: 300,
                type: 'radialBar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#4361ee', '#805dca', '#e2a03f'],
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w: any) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249;
                            },
                        },
                    },
                },
            },
            labels: ['Apples', 'Oranges', 'Bananas'],
            fill: {
                opacity: 0.85,
            },
        };

        this.bubbleChart = {
            series: [
                {
                    name: 'Bubble1',
                    data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
                {
                    name: 'Bubble2',
                    data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 60,
                    }),
                },
            ],
            chart: {
                height: 300,
                type: 'bubble',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#4361ee', '#00ab55'],
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                tickAmount: 12,
                type: 'category',
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                max: 70,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
            stroke: {
                colors: isDark ? ['#191e3a'] : ['#e0e6ed'],
            },
            fill: {
                opacity: 0.85,
            },
        };
    }

    generateData(baseval: number, count: number, yrange: any) {
        var i = 0;
        var series: any = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
}
