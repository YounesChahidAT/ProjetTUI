"use strict";

// Class definition
var KTCardsWidget1 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_card_widget_1_chart");
        
        if (!element) {
            return;
        }

        var color = element.getAttribute('data-kt-chart-color');
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');         
        var baseColor = KTUtil.isHexColor(color) ? color : KTUtil.getCssVariableValue('--bs-' + color);
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');        

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 75, 55, 45, 30, 60, 75, 50],
                margin: {
					left: 5,
					right: 5
				}   
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['35%'],
                    borderRadius: 6
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 4,
                colors: ['transparent']
            },
            xaxis: {                
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },               
                crosshairs: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                type: 'solid'
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Impression: " + val
                    }
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " revenue"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: false,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: 10,
					left: 25,
					right: 25     
				}               
            }
        };

        // Set timeout to properly get the parent elements width
        var chart = new ApexCharts(element, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);  
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget1.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardsWidget10 = function () {
    // Private methods
    var initChart = function() {
        var el = document.getElementById('kt_card_widget_10_chart'); 

        if (!el) {
            return;
        }

        var options = {
            size: el.getAttribute('data-kt-size') ? parseInt(el.getAttribute('data-kt-size')) : 70,
            lineWidth: el.getAttribute('data-kt-line') ? parseInt(el.getAttribute('data-kt-line')) : 11,
            rotate: el.getAttribute('data-kt-rotate') ? parseInt(el.getAttribute('data-kt-rotate')) : 145,            
            //percent:  el.getAttribute('data-kt-percent') ,
        }

        var canvas = document.createElement('canvas');
        var span = document.createElement('span'); 
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        // Init 
        drawCircle('#E4E6EF', options.lineWidth, 100 / 100); 
        drawCircle(KTUtil.getCssVariableValue('--bs-primary'), options.lineWidth, 100 / 150);
        drawCircle(KTUtil.getCssVariableValue('--bs-success'), options.lineWidth, 100 / 250);   
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget10;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget10.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardsWidget4 = function () {
    // Private methods
    var initChart = function() {
        var el = document.getElementById('kt_card_widget_4_chart'); 

        if (!el) {
            return;
        }

        var options = {
            size: el.getAttribute('data-kt-size') ? parseInt(el.getAttribute('data-kt-size')) : 70,
            lineWidth: el.getAttribute('data-kt-line') ? parseInt(el.getAttribute('data-kt-line')) : 11,
            rotate: el.getAttribute('data-kt-rotate') ? parseInt(el.getAttribute('data-kt-rotate')) : 145,            
            //percent:  el.getAttribute('data-kt-percent') ,
        }

        var canvas = document.createElement('canvas');
        var span = document.createElement('span'); 
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        // Init 
        drawCircle('#E4E6EF', options.lineWidth, 100 / 100); 
        drawCircle(KTUtil.getCssVariableValue('--bs-danger'), options.lineWidth, 100 / 150);
        drawCircle(KTUtil.getCssVariableValue('--bs-primary'), options.lineWidth, 100 / 250);   
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget4.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardsWidget6 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_card_widget_6_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');

        var options = {
            series: [{
                name: 'Sales',
                data: [30, 60, 53, 45, 60, 75, 53]
            }, ],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['55%'],
                    borderRadius: 6
                }
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 9,
                colors: ['transparent']
            },
            xaxis: {                
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                    tickPlacement: 'between'
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                type: 'solid'
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return 'Impressions: ' + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "K"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                padding: {
                    left: 10,
                    right: 10
                },
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }             
            }
        }; 

        var chart = new ApexCharts(element, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);     
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget6;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget6.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardWidget8 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_card_widget_8_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));       
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
        var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

        var options = {
            series: [{
                name: 'Net Profit',
                data: [35, 25, 45, 15, 60, 50, 57, 35, 70, 40, 45, 25, 45, 30, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },             
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 0
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                 
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Impression " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [lightColor],
            grid: {                 
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    right: -20,
                    bottom: -20,
                    left: -20
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 2
            }
        }; 

        var chart = new ApexCharts(element, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);  
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardWidget8;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardWidget8.init();
});

"use strict";

// Class definition
var KTCardWidget9 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_card_widget_9_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));       
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
        var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

        var options = {
            series: [{
                name: 'Net Profit',
                data: [35, 25, 35, 15, 40, 60, 25, 40, 70, 30, 55, 45, 45, 30, 50]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },             
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 0
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                 
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Sales " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [lightColor],
            grid: {                 
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    right: -20,
                    bottom: -20,
                    left: -20
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 2
            }
        }; 

        var chart = new ApexCharts(element, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);  
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardWidget9;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardWidget9.init();
});
"use strict";

// Class definition
var KTTimelineWidget1 = function () {
    // Private methods
    // Day timeline
    const initTimelineDay = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_1_1');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-1-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: "research",
                content: "Research",
                order: 1
            },
            {
                id: "qa",
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: "ui",
                content: "UI Design",
                order: 3
            },
            {
                id: "dev",
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 'research',
                start: now,
                end: moment(now).add(1.5, 'hours'),
                content: 'Meeting',
                progress: "60%",
                color: 'primary',
                users: [
                    'avatars/150-1.jpg',
                    'avatars/150-2.jpg'
                ]
            },
            {
                id: 2,
                group: 'qa',
                start: moment(now).add(1, 'hours'),
                end: moment(now).add(2, 'hours'),
                content: 'Testing',
                progress: "47%",
                color: 'success',
                users: [
                    'avatars/150-3.jpg'
                ]
            },
            {
                id: 3,
                group: 'ui',
                start: moment(now).add(30, 'minutes'),
                end: moment(now).add(2.5, 'hours'),
                content: 'Landing page',
                progress: "55%",
                color: 'danger',
                users: [
                    'avatars/150-4.jpg',
                    'avatars/150-5.jpg'
                ]
            },
            {
                id: 4,
                group: 'dev',
                start: moment(now).add(1.5, 'hours'),
                end: moment(now).add(3, 'hours'),
                content: 'Products module',
                progress: "75%",
                color: 'info',
                users: [
                    'avatars/150-6.jpg',
                    'avatars/150-7.jpg',
                    'avatars/150-8.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,
            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                const target = element.closest('[data-kt-timeline-widget-1-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);      
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Week timeline
    const initTimelineWeek = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_1_2');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-1-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: 1,
                content: "Research",
                order: 1
            },
            {
                id: 2,
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: 3,
                content: "UI Design",
                order: 3
            },
            {
                id: 4,
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 1,
                start: now,
                end: moment(now).add(7, 'days'),
                content: 'Framework',
                progress: "71%",
                color: 'primary',
                users: [
                    'avatars/150-1.jpg',
                    'avatars/150-2.jpg'
                ]
            },
            {
                id: 2,
                group: 2,
                start: moment(now).add(7, 'days'),
                end: moment(now).add(14, 'days'),
                content: 'Accessibility',
                progress: "84%",
                color: 'success',
                users: [
                    'avatars/150-3.jpg'
                ]
            },
            {
                id: 3,
                group: 3,
                start: moment(now).add(3, 'days'),
                end: moment(now).add(20, 'days'),
                content: 'Microsites',
                progress: "69%",
                color: 'danger',
                users: [
                    'avatars/150-4.jpg',
                    'avatars/150-5.jpg'
                ]
            },
            {
                id: 4,
                group: 4,
                start: moment(now).add(10, 'days'),
                end: moment(now).add(21, 'days'),
                content: 'Deployment',
                progress: "74%",
                color: 'info',
                users: [
                    'avatars/150-6.jpg',
                    'avatars/150-7.jpg',
                    'avatars/150-8.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,

            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                const target = element.closest('[data-kt-timeline-widget-1-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);      
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Month timeline
    const initTimelineMonth = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_1_3');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-1-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: "research",
                content: "Research",
                order: 1
            },
            {
                id: "qa",
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: "ui",
                content: "UI Design",
                order: 3
            },
            {
                id: "dev",
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 'research',
                start: now,
                end: moment(now).add(2, 'months'),
                content: 'Tags',
                progress: "79%",
                color: 'primary',
                users: [
                    'avatars/150-1.jpg',
                    'avatars/150-2.jpg'
                ]
            },
            {
                id: 2,
                group: 'qa',
                start: moment(now).add(0.5, 'months'),
                end: moment(now).add(5, 'months'),
                content: 'Testing',
                progress: "64%",
                color: 'success',
                users: [
                    'avatars/150-3.jpg'
                ]
            },
            {
                id: 3,
                group: 'ui',
                start: moment(now).add(2, 'months'),
                end: moment(now).add(6.5, 'months'),
                content: 'Media',
                progress: "82%",
                color: 'danger',
                users: [
                    'avatars/150-4.jpg',
                    'avatars/150-5.jpg'
                ]
            },
            {
                id: 4,
                group: 'dev',
                start: moment(now).add(4, 'months'),
                end: moment(now).add(7, 'months'),
                content: 'Plugins',
                progress: "58%",
                color: 'info',
                users: [
                    'avatars/150-6.jpg',
                    'avatars/150-7.jpg',
                    'avatars/150-8.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,

            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                const target = element.closest('[data-kt-timeline-widget-1-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);                    
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Handle BlockUI
    const handleBlockUI = () => {
        // Select block ui elements
        const elements = document.querySelectorAll('[data-kt-timeline-widget-1-blockui="true"]');

        // Init block ui
        elements.forEach(element => {
            const blockUI = new KTBlockUI(element, {
                overlayClass: "bg-body",
            });

            blockUI.block();
        });
    }

    // Handle tabs visibility
    const tabsVisibility = () => {
        const tabs = document.querySelectorAll('[data-kt-timeline-widget-1="tab"]');

        tabs.forEach(tab => {
            tab.addEventListener('shown.bs.tab', e => {
                // Week tab
                if(tab.getAttribute('href') === '#kt_timeline_widget_1_tab_week'){
                    initTimelineWeek();
                }

                // Month tab
                if(tab.getAttribute('href') === '#kt_timeline_widget_1_tab_month'){
                    initTimelineMonth();
                }
            });
        });
    }

    // Public methods
    return {
        init: function () {
            initTimelineDay();
            handleBlockUI();
            tabsVisibility();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTimelineWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTimelineWidget1.init();
});

"use strict";

// Class definition
var KTTablesWidget3 = function () {
    var table;
    var datatable;

    // Private methods
    const initDatatable = () => {
        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            'paging': false,
            'pageLength': false,
        });
    }

    const handleTabStates = () => {
        const tabs = document.querySelector('[data-kt-table-widget-3="tabs_nav"]');
        const tabButtons = tabs.querySelectorAll('[data-kt-table-widget-3="tab"]');
        const tabClasses = ['border-bottom', 'border-3', 'border-primary'];

        tabButtons.forEach(tab => {
            tab.addEventListener('click', e => {
                // Get datatable filter value
                const value = tab.getAttribute('data-kt-table-widget-3-value');
                tabButtons.forEach(t => {
                    t.classList.remove(...tabClasses);
                    t.classList.add('text-muted');
                });

                tab.classList.remove('text-muted');
                tab.classList.add(...tabClasses);

                // Filter datatable
                if (value === 'Show All') {
                    datatable.search('').draw();
                } else {
                    datatable.search(value).draw();
                }
            });
        });
    }

    // Handle status filter dropdown
    const handleStatusFilter = () => {
        const select = document.querySelector('[data-kt-table-widget-3="filter_status"]');

        $(select).on('select2:select', function (e) {
            const value = $(this).val();
            if (value === 'Show All') {
                datatable.search('').draw();
            } else {
                datatable.search(value).draw();
            }
        });
    }

    // Public methods
    return {
        init: function () {
            table = document.querySelector('#kt_widget_table_3');

            if (!table) {
                return;
            }

            initDatatable();
            handleTabStates();
            handleStatusFilter();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget3;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget3.init();
});

"use strict";

// Class definition
var KTTablesWidget4 = function () {
    var table;
    var datatable;
    var template;

    // Private methods
    const initDatatable = () => {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[1].innerHTML, "DD MMM YYYY, LT").format(); // select date from 2nd column in table

            // Skip template
            if (!row.closest('[data-kt-table-widget-4="subtable_template"]')) {
                dateRow[1].setAttribute('data-order', realDate);
                dateRow[1].innerText = moment(realDate).fromNow();
            }
        });

        // Get subtable template
        const subtable = document.querySelector('[data-kt-table-widget-4="subtable_template"]');
        template = subtable.cloneNode(true);
        template.classList.remove('d-none');

        // Remove subtable template
        subtable.parentNode.removeChild(subtable);

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "lengthChange": false,
            'pageLength': 6,
            'ordering': false,
            'paging': false,
            'columnDefs': [
                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)
                { orderable: false, targets: 6 }, // Disable ordering on column 6 (actions)
            ]
        });

        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
        datatable.on('draw', function () {
            resetSubtable();
            handleActionButton();
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-table-widget-4="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            datatable.search(e.target.value).draw();
        });
    }

    // Handle status filter
    const handleStatusFilter = () => {
        const select = document.querySelector('[data-kt-table-widget-4="filter_status"]');

        $(select).on('select2:select', function (e) {
            const value = $(this).val();
            if (value === 'Show All') {
                datatable.search('').draw();
            } else {
                datatable.search(value).draw();
            }
        });
    }

    // Subtable data sample
    const data = [
        {
            image: '76',
            name: 'Go Pro 8',
            description: 'Latest  version of Go Pro.',
            cost: '500.00',
            qty: '1',
            total: '500.00',
            stock: '12'
        },
        {
            image: '60',
            name: 'Bose Earbuds',
            description: 'Top quality earbuds from Bose.',
            cost: '300.00',
            qty: '1',
            total: '300.00',
            stock: '8'
        },
        {
            image: '211',
            name: 'Dry-fit Sports T-shirt',
            description: 'Comfortable sportswear.',
            cost: '89.00',
            qty: '1',
            total: '89.00',
            stock: '18'
        },
        {
            image: '21',
            name: 'Apple Airpod 3',
            description: 'Apple\'s latest earbuds.',
            cost: '200.00',
            qty: '2',
            total: '400.00',
            stock: '32'
        },
        {
            image: '83',
            name: 'Nike Pumps',
            description: 'Apple\'s latest headphones.',
            cost: '200.00',
            qty: '1',
            total: '200.00',
            stock: '8'
        }
    ];

    // Handle action button
    const handleActionButton = () => {
        const buttons = document.querySelectorAll('[data-kt-table-widget-4="expand_row"]');

        // Sample row items counter --- for demo purpose only, remove this variable in your project
        const rowItems = [3, 1, 3, 1, 2, 1];

        buttons.forEach((button, index) => {
            button.addEventListener('click', e => {
                e.stopImmediatePropagation();
                e.preventDefault();

                const row = button.closest('tr');
                const rowClasses = ['isOpen', 'border-bottom-0'];

                // Get total number of items to generate --- for demo purpose only, remove this code snippet in your project
                const demoData = [];
                for (var j = 0; j < rowItems[index]; j++) {
                    demoData.push(data[j]);
                }
                // End of generating demo data

                // Handle subtable expanded state
                if (row.classList.contains('isOpen')) {
                    // Remove all subtables from current order row
                    while (row.nextSibling && row.nextSibling.getAttribute('data-kt-table-widget-4') === 'subtable_template') {
                        row.nextSibling.parentNode.removeChild(row.nextSibling);
                    }
                    row.classList.remove(...rowClasses);
                    button.classList.remove('active');
                } else {
                    populateTemplate(demoData, row);
                    row.classList.add(...rowClasses);
                    button.classList.add('active');
                }
            });
        });
    }

    // Populate template with content/data -- content/data can be replaced with relevant data from database or API
    const populateTemplate = (data, target) => {
        data.forEach((d, index) => {
            // Clone template node
            const newTemplate = template.cloneNode(true);

            // Stock badges
            const lowStock = `<div class="badge badge-light-warning">Low Stock</div>`;
            const inStock = `<div class="badge badge-light-success">In Stock</div>`;

            // Select data elements
            const image = newTemplate.querySelector('[data-kt-table-widget-4="template_image"]');
            const name = newTemplate.querySelector('[data-kt-table-widget-4="template_name"]');
            const description = newTemplate.querySelector('[data-kt-table-widget-4="template_description"]');
            const cost = newTemplate.querySelector('[data-kt-table-widget-4="template_cost"]');
            const qty = newTemplate.querySelector('[data-kt-table-widget-4="template_qty"]');
            const total = newTemplate.querySelector('[data-kt-table-widget-4="template_total"]');
            const stock = newTemplate.querySelector('[data-kt-table-widget-4="template_stock"]');

            // Populate elements with data
            const imageSrc = image.getAttribute('src');
            image.setAttribute('src', imageSrc + d.image + '.gif');
            name.innerText = d.name;
            description.innerText = d.description;
            cost.innerText = d.cost;
            qty.innerText = d.qty;
            total.innerText = d.total;
            if (d.stock > 10) {
                stock.innerHTML = inStock;
            } else {
                stock.innerHTML = lowStock;
            }

            // New template border controller
            // When only 1 row is available
            if (data.length === 1) {
                //let borderClasses = ['rounded', 'rounded-end-0'];
                //newTemplate.querySelectorAll('td')[0].classList.add(...borderClasses);
                //borderClasses = ['rounded', 'rounded-start-0'];
                //newTemplate.querySelectorAll('td')[4].classList.add(...borderClasses);

                // Remove bottom border
                //newTemplate.classList.add('border-bottom-0');
            } else {
                // When multiple rows detected
                if (index === (data.length - 1)) { // first row
                    //let borderClasses = ['rounded-start', 'rounded-bottom-0'];
                   // newTemplate.querySelectorAll('td')[0].classList.add(...borderClasses);
                    //borderClasses = ['rounded-end', 'rounded-bottom-0'];
                    //newTemplate.querySelectorAll('td')[4].classList.add(...borderClasses);
                }
                if (index === 0) { // last row
                    //let borderClasses = ['rounded-start', 'rounded-top-0'];
                    //newTemplate.querySelectorAll('td')[0].classList.add(...borderClasses);
                    //borderClasses = ['rounded-end', 'rounded-top-0'];
                    //newTemplate.querySelectorAll('td')[4].classList.add(...borderClasses);

                    // Remove bottom border on last row
                    //newTemplate.classList.add('border-bottom-0');
                }
            }

            // Insert new template into table
            const tbody = table.querySelector('tbody');
            tbody.insertBefore(newTemplate, target.nextSibling);
        });
    }

    // Reset subtable
    const resetSubtable = () => {
        const subtables = document.querySelectorAll('[data-kt-table-widget-4="subtable_template"]');
        subtables.forEach(st => {
            st.parentNode.removeChild(st);
        });

        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(r => {
            r.classList.remove('isOpen');
            if (r.querySelector('[data-kt-table-widget-4="expand_row"]')) {
                r.querySelector('[data-kt-table-widget-4="expand_row"]').classList.remove('active');
            }
        });
    }

    // Public methods
    return {
        init: function () {
            table = document.querySelector('#kt_table_widget_4_table');

            if (!table) {
                return;
            }

            initDatatable();
            handleSearchDatatable();
            handleStatusFilter();
            handleActionButton();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget4.init();
});

"use strict";

// Class definition
var KTTablesWidget5 = function () {
    var table;
    var datatable;

    // Private methods
    const initDatatable = () => {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[2].innerHTML, "MMM DD, YYYY").format(); // select date from 3rd column in table
            dateRow[2].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "lengthChange": false,
            'pageLength': 6,
            'paging': false,
            'columnDefs': [
                { orderable: false, targets: 1 }, // Disable ordering on column 1 (product id)
            ]
        });
    }

    // Handle status filter
    const handleStatusFilter = () => {
        const select = document.querySelector('[data-kt-table-widget-5="filter_status"]');

        $(select).on('select2:select', function (e) {
            const value = $(this).val();
            if (value === 'Show All') {
                datatable.search('').draw();
            } else {
                datatable.search(value).draw();
            }
        });
    }

    // Public methods
    return {
        init: function () {
            table = document.querySelector('#kt_table_widget_5_table');

            if (!table) {
                return;
            }

            initDatatable();
            handleStatusFilter();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget5;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget5.init();
});

"use strict";

// Class definition
var KTChartsWidget1 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_1");

        if (!element) {
            return;
        }

        var negativeColor = element.hasAttribute('data-kt-negative-color') ? element.getAttribute('data-kt-negative-color') : KTUtil.getCssVariableValue('--bs-success');

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');

        var options = {
            series: [{
                name: 'Net Profit',
                data: [20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55, 20]
            }, {
                name: 'Revenue',
                data: [-20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15, -5, -10, -5, -15]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                stacked: true,
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    //horizontal: false,
                    columnWidth: "35%",
                    barHeight: "70%",
                    borderRadius: [6, 6]
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Jan 5', 'Jan 7', 'Jan 9', 'Jan 11', 'Jan 13', 'Jan 15', 'Jan 17', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 24', 'Jan 28', 'Jan 29'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 10,
                labels: {
                    //rotate: -45,
                    //rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false
                }
            },
            yaxis: {
                min: -50,
                max: 80,
                tickAmount: 6,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return parseInt(val) + "K"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    borderRadius: 4
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, negativeColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,               
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);    
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget1.init();
});

"use strict";

// Class definition
var KTChartsWidget10 = function () {
    // Private methods
    var initChart = function(tabSelector, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');

        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');    

        var options = {
            series: [{
                name: 'Net Profit',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['22%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -30,                                             
                style: {
                    fontSize: '13px',
                    colors: ['labelColor']
                },
                formatter: function(val) {
                    return val + "%";
                }          
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Metals', 'Energy', 'Agro', 'Machines', 'Transport', 'Textile', 'Wood'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    }                    
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    },
                    formatter: function (val) {
                        return parseInt(val) + "K"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);

        var init = false;
        var tab = document.querySelector(tabSelector);
        
        if (initByDefault === true) {
            chart.render();
            init = true;
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (init == false) {
                chart.render();
                init = true;
            }
        })
    }

    // Public methods
    return {
        init: function () {   
            initChart('#kt_charts_widget_10_tab_1', '#kt_charts_widget_10_chart_1', [30, 18, 43, 70, 13, 37, 23], true);
            initChart('#kt_charts_widget_10_tab_2', '#kt_charts_widget_10_chart_2', [25, 55, 35, 50, 45, 20, 31], false); 
            initChart('#kt_charts_widget_10_tab_3', '#kt_charts_widget_10_chart_3', [45, 15, 35, 70, 45, 50, 21], false);
            initChart('#kt_charts_widget_10_tab_4', '#kt_charts_widget_10_chart_4', [15, 55, 25, 50, 25, 60, 31], false);            
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget10;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget10.init();
});


 
"use strict";

// Class definition
var KTChartsWidget11 = function () {
    // Private methods
    var initChart = function(tabSelector, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);
        var height = parseInt(KTUtil.css(element, 'height'));

        if (!element) {
            return;
        }        
        
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--bs-success');
        var lightColor = KTUtil.getCssVariableValue('--bs-success');

        var options = {
            series: [{
                name: 'Sales',
                data: data
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.7,
                stops: [0, 90, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 06', 'Apr 06', 'Apr 05', 'Apr 06', 'Apr 10', 'Apr 08', 'Apr 09', 'Apr 14', 'Apr 10', 'Apr 12', 'Apr 18', 'Apr 14', 
                    'Apr 15', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 02', 'Apr 06', 'Apr 18', 'Apr 05', 'Apr 06', 'Apr 10', 'Apr 08', 'Apr 22', 'Apr 14', 'Apr 11', 'Apr 12', ''
                ],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 5,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '13px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '13px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 24,
                min: 10,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '13px'
                    }                     
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "K"
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        var init = false;
        var tab = document.querySelector(tabSelector);
        
        if (initByDefault === true) {
            chart.render();
            init = true;
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (init == false) {
                chart.render();
                init = true;
            }
        })   
    }

    // Public methods
    return {
        init: function () {           
            initChart('#kt_chart_widget_11_tab_1', '#kt_chart_widget_11_chart_1', [16, 19, 19, 16, 16, 14, 15, 15, 17, 17, 19, 19, 18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 20, 20, 22], false);
            initChart('#kt_chart_widget_11_tab_2', '#kt_chart_widget_11_chart_2', [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22, 15, 18, 18, 17, 17, 15, 15, 17, 17, 19, 17], false); 
            initChart('#kt_chart_widget_11_tab_3', '#kt_chart_widget_11_chart_3', [17, 20, 20, 19, 19, 17, 17, 19, 19, 21, 21, 19, 19, 21, 21, 18, 18, 16, 17, 17, 19, 19, 21, 21, 19, 19, 17, 17, 18, 18], true); 
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget11;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget11.init();
});

"use strict";

// Class definition
var KTChartsWidget12 = function () {
    // Private methods
    var initChart = function(tabSelector, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');

        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');    

        var options = {
            series: [{
                name: 'Net Profit',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['22%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -28,                                             
                style: {
                    fontSize: '13px',
                    colors: ['labelColor']
                }                         
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Grossey', 'Pet Food', 'Flowers', 'Restaurant', 'Kids Toys', 'Clothing', 'Still Water'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    }                    
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    },
                    formatter: function (val) {
                        return parseInt(val) + "K"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);

        var init = false;
        var tab = document.querySelector(tabSelector);
        
        if (initByDefault === true) {
            chart.render();
            init = true;
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (init == false) {
                chart.render();
                init = true;
            }
        })
    }

    // Daterangepicker
    var initDaterangepicker = function () {
        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            $('#kt_charts_widget_12_daterangepicker span').html(start.format('D MMM YYYY') + ' - ' + end.format('D MMM YYYY'));
        }

        $('#kt_charts_widget_12_daterangepicker').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);
    } 

    // Public methods
    return {
        init: function () {   
            initChart('#kt_charts_widget_12_tab_1', '#kt_charts_widget_12_chart_1', [54, 42, 75, 110, 23, 87, 50], true);
            initChart('#kt_charts_widget_12_tab_2', '#kt_charts_widget_12_chart_2', [25, 55, 35, 50, 45, 20, 31], false); 
            initChart('#kt_charts_widget_12_tab_3', '#kt_charts_widget_12_chart_3', [45, 15, 35, 70, 45, 50, 21], false); 
            
            // Daterangepicker
            initDaterangepicker();
        }        
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget12;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget12.init();
});


 
"use strict";

// Class definition
var KTChartsWidget2 = function () {
    // Private methods
    var initChart = function() {
        var element = document.querySelectorAll('.charts-widget-2');

        [].slice.call(element).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [15, 15, 45, 45, 25, 25, 55, 55, 20, 20, 37]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [lightColor],
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            }; 
            
            var chart = new ApexCharts(element, options);

            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.render();   
            }, 300);  
        });           
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget2;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget2.init();
});

"use strict";

// Class definition
var KTChartsWidget3 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_3");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--bs-success');
        var lightColor = KTUtil.getCssVariableValue('--bs-success');

        var options = {
            series: [{
                name: 'Sales',
                data: [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22]
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.7,
                stops: [0, 90, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 24,
                min: 10,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return '$' + Number(val / 10).toFixed(1) + "K"
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "K"
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);     
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget3;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget3.init();
});

"use strict";

// Class definition
var KTChartsWidget4 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_4");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-primary');

        var options = {
            series: [{
                name: 'Discounted',
                data: [34.5,34.5,35,35,35.5,35.5,35,35,34.5,34.5,34.5,34.5,35,35,34.5,35.5,35.5,35.5,35]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.7,
                stops: [0, 90, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 21', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 36.3,
                min: 33,
                tickAmount: 6,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();
        }, 300);           
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget4.init();
});

"use strict";

// Class definition
var KTChartsWidget5 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_5"); 

        if (!element) {
            return;
        }
        
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        
        var options = {
            series: [{
                data: [15, 12, 10, 8, 7, 4, 3],
                show: false                                                                              
            }],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }                             
            },                    
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    distributed: true,
                    barHeight: 23                   
                }
            },
            dataLabels: {
                enabled: false                               
            },             
            legend: {
                show: false
            },                               
            colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA', '#50CDCD', '#3F4254'],                                                                      
            xaxis: {
                categories: ['Phones', 'Laptops', 'Headsets', 'Games', 'Keyboardsy', 'Monitors', 'Speakers'],
                labels: {
                    formatter: function (val) {
                      return val + "K"
                    },
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-400'),
                        fontSize: '14px',
                        fontWeight: '600',
                        align: 'left'                                              
                    }                  
                },
                axisBorder: {
					show: false
				}                         
            },
            yaxis: {
                labels: {                   
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-800'),
                        fontSize: '14px',
                        fontWeight: '600'                                                                 
                    },
                    offsetY: 2,
                    align: 'left' 
                }              
            },
            grid: {                
                borderColor: borderColor,                
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: false  
                    }
                },
                strokeDashArray: 4              
            }                                 
        };  
          
        var chart = new ApexCharts(element, options);
        
        setTimeout(function() {
            chart.render();   
        }, 300); 
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget5;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget5.init();
});


 
"use strict";

// Class definition
var KTChartsWidget6 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_6"); 

        if (!element) {
            return;
        }
        
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-800');    
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
        var maxValue = 18;
        
        var options = {
            series: [{
                name: 'Sales',
                data: [15, 12, 10, 8, 7]                                                                                                             
            }],           
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }                             
            },                    
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    horizontal: true,
                    distributed: true,
                    barHeight: 50,
                    dataLabels: {
				        position: 'bottom' // use 'bottom' for left and 'top' for right align(textAnchor)
			        }                                                       
                }
            },
            dataLabels: {  // Docs: https://apexcharts.com/docs/options/datalabels/
                enabled: true,              
                textAnchor: 'start',  
                offsetX: 0,                 
                formatter: function (val, opts) {
                    var val = val * 1000;
                    var Format = wNumb({
                        //prefix: '$',
                        //suffix: ',-',
                        thousand: ','
                    });

                    return Format.to(val);
                },
                style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    align: 'left',                                                            
                }                                       
            },             
            legend: {
                show: false
            },                               
            colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA'],                                                                      
            xaxis: {
                categories: ["ECR - 90%", "FGI - 82%", 'EOQ - 75%', 'FMG - 60%', 'PLG - 50%'],
                labels: {
                    formatter: function (val) {
                        return val + "K"
                    },
                    style: {
                        colors: labelColor,
                        fontSize: '14px',
                        fontWeight: '600',
                        align: 'left'                                              
                    }                  
                },
                axisBorder: {
					show: false
				}                         
            },
            yaxis: {
                labels: {       
                    formatter: function (val, opt) {
                        if (Number.isInteger(val)) {
                            var percentage = parseInt(val * 100 / maxValue) . toString(); 
                            return val + ' - ' + percentage + '%';
                        } else {
                            return val;
                        }
                    },            
                    style: {
                        colors: labelColor,
                        fontSize: '14px',
                        fontWeight: '600'                                                                 
                    },
                    offsetY: 2,
                    align: 'left' 
                }           
            },
            grid: {                
                borderColor: borderColor,                
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: false  
                    }
                },
                strokeDashArray: 4              
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val + 'K';
                    }
                }
            }                                 
        };  
          
        var chart = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);        
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget6;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget6.init();
});


 
"use strict";

// Class definition
var KTChartsWidget7 = function () {
    // Private methods
    var initChart = function(chartSelector) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');

        var options = {
            series: [{
                name: 'Net Profit',
                data: data1
            }, {
                name: 'Revenue',
                data: data2
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['40%'],
                    borderRadius: [6]
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-700'),
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-700'),
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);

        var init = false;
        var tab = document.querySelector(tabSelector);
        
        if (initByDefault === true) {
            chart.render();
            init = true;
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (init == false) {
                chart.render();
                init = true;
            }
        })
          
        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    // Public methods
    return {
        init: function () {          
            initChart('#kt_chart_widget_7_tab_1', '#kt_chart_widget_7_chart_1', [44, 55, 57, 56, 61, 58], [76, 85, 101, 98, 87, 105], true);
            initChart('#kt_chart_widget_7_tab_2', '#kt_chart_widget_7_chart_2', [35, 60, 35, 50, 45, 30], [65, 80, 50, 80, 75, 105], false);
            initChart('#kt_chart_widget_7_tab_3', '#kt_chart_widget_7_chart_3', [25, 40, 45, 50, 40, 60], [76, 85, 101, 98, 87, 105], false);
            initChart('#kt_chart_widget_7_tab_4', '#kt_chart_widget_7_chart_4', [50, 35, 45, 55, 30, 40], [76, 85, 101, 98, 87, 105], false);             
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget7;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    //KTChartsWidget7.init();
});


 
"use strict";

// Class definition
var KTChartsWidget8 = function () {
    // Private methods
    var initChart = function(toggle, selector, data, initByDefault) {
        var element = document.querySelector(selector);

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));    
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');    

        var options = {
            series: [
                {
                    name: 'Social Campaigns',
                    data: data[0]  // array value is of the format [x, y, z] where x (timestamp) and y are the two axes coordinates,
                }, {
                    name: 'Email Newsletter',
                    data: data[1]
                }, {
                    name: 'TV Campaign',
                    data: data[2]
                }, {
                    name: 'Google Ads',
                    data: data[3]
                }, {
                    name: 'Courses',
                    data: data[4]
                }, {
                    name: 'Radio',
                    data: data[5]
                }                
            ],
            chart: {
                fontFamily: 'inherit',
                type: 'bubble',    
                height: height,
                toolbar: {
                    show: false
                }                         
            },                                 
            plotOptions: {
                bubble: {
                }
            },
            stroke: {
                show: false,
                width: 0
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                type: 'numeric',             
                tickAmount: 7,
                min: 0,
                max: 700,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: true,
                    height: 0,
                },
                labels: {
                    show: true,
                    trim: true,
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    }
                }
            },
            yaxis: {
                tickAmount: 7,
                min: 0,
                max: 700,
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    }
                }               
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Clicks: " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "K"
                    }
                },
                z: {
                    title: 'Impression: '
                }
            },
            crosshairs: {
                show: true,
                position: 'front',
                stroke: {
                    color: KTUtil.getCssVariableValue('--bs-border-dashed-color'),
                    width: 1,
                    dashArray: 0,
                }
            },           
            colors: [
                KTUtil.getCssVariableValue('--bs-primary'),
                KTUtil.getCssVariableValue('--bs-success'),   
                KTUtil.getCssVariableValue('--bs-warning'),
                KTUtil.getCssVariableValue('--bs-danger'),
                KTUtil.getCssVariableValue('--bs-info'),
                '#43CED7'
            ],
            fill: {
                opacity: 1,                
            },
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var initialized = false;
        var chart = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.render();  
                initialized = true;
            }, 300);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (initialized === false) {
                chart.render();
                initialized = true;
            }
        })        
    }

    // Public methods
    return {
        init: function () {    
            var data1 = [
                [[100, 250, 30]], [[225, 300, 35]], [[300, 350, 25]], [[350, 350, 20]], [[450, 400, 25]], [[550, 350, 35]]
            ];

            var data2 = [
                [[125, 300, 40]], [[250, 350, 35]], [[350, 450, 30]], [[450, 250, 25]], [[500, 500, 30]], [[650, 250, 28]]
            ];

            initChart('#kt_chart_widget_8_week_toggle', '#kt_chart_widget_8_week_chart', data1, false);
            initChart('#kt_chart_widget_8_month_toggle', '#kt_chart_widget_8_month_chart', data2, true);    
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget8;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget8.init();
});


 
"use strict";

// Class definition
var KTChartsWidget9 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_9");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-400');
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');    

        var baseColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-primary');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [21, 21, 26, 26, 31, 31, 27]
            }, {
                name: 'Revenue',
                data: [12, 16, 16, 21, 21, 18, 18]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['', '06 Sep', '13 Sep', '20 Sep', '27 Sep', '30 Sep', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: labelColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            crosshairs: {
                show: true,
                position: 'front',
                stroke: {
                    color: KTUtil.getCssVariableValue('--bs-border-dashed-color'),
                    width: 1,
                    dashArray: 0,
                },
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                colors: [baseColor, secondaryColor],
                strokeColor: [KTUtil.getCssVariableValue('--bs-danger'), KTUtil.getCssVariableValue('--bs-warning')],
                strokeWidth: 3
            }
        };        
          
        var chart = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);        
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget9;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget9.init();
});


 