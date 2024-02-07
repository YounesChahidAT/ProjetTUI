// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    //---DropDownList------------
    $('.select2-basic').select2();
    //--Simple DatePicker
    var arrows;
    if (KTUtil.isRTL()) {
        arrows = {
            leftArrow: '<i class="la la-angle-right"></i>',
            rightArrow: '<i class="la la-angle-left"></i>'
        }
    } else {
        arrows = {
            leftArrow: '<i class="la la-angle-left"></i>',
            rightArrow: '<i class="la la-angle-right"></i>'
        }
    }

    $('.simple-date-picker').flatpickr({
        todayHighlight: true,
        orientation: "bottom left",
        language: 'fr',
        dateFormat: 'Y/m/d'
    });

    //---DatePicker Start - End

    $('.simple-date-picker.startDate').on('change', function (e) {
        $('.simple-date-picker.endDate').flatpickr().set('minDate', $(this).val());
    });
    $('.simple-date-picker.endDate').on('change', function (e) {
        $('.simple-date-picker.startDate').flatpickr().set('maxDate', $(this).val());
    });
    //----With valider button
    $('.custom-date-picker').daterangepicker(
        {
            autoUpdateInput: false,
            singleDatePicker: true,
            showDropdowns: true,
            locale:
            {
                "format": "DD/MM/YYYY", "separator": " - ", "applyLabel": "Valider", "cancelLabel": "Annuler", "fromLabel": "De", "toLabel": "à ", "customRangeLabel": "Custom", "daysOfWeek": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], "monthNames": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], "firstDay": 1
            }
        }, function (chosen_date) {
            this.element.val(chosen_date.format('DD/MM/YYYY'));
        });
    $('.custom-date-picker').on('apply.daterangepicker', function (ev, chosen_date) {
        $(this).val(chosen_date.startDate.format('DD/MM/YYYY'));
    });
    $('.custom-date-picker').on('cancel.daterangepicker', function (ev, chosen_date) {
        $(this).val('');
    });
    $('.single-date-time-picker').daterangepicker(
        {
            autoUpdateInput: false,
            singleDatePicker: true,
            showDropdowns: true,
            timePicker: true,
            timePicker24Hour: true,
            timePickerIncrement: 15,
            locale:
            {
                "format": "DD/MM/YYYY H:mm", "separator": " - ", "applyLabel": "Valider", "cancelLabel": "Annuler", "fromLabel": "De", "toLabel": "à ", "customRangeLabel": "Custom", "daysOfWeek": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], "monthNames": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], "firstDay": 1
            }
        }, function (chosen_date) { this.element.val(chosen_date.format('DD/MM/YYYY H:mm')); })
});

$('.mask_money').autoNumeric('init', { aSep: ' ', aDec: ',', aSign: '' });
$('.mask_integer').autoNumeric('init', { aSep: '', aDec: ',', mDec: '0' });
//-----Template-------------
$('#swapper').attr("data-kt-swapper-parent", "{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}");
//-----Lunch Modal Edit
$(document).on('click', '.editModal', function (ev) {
    ev.preventDefault();
    var target = $(this).attr("href");
    var modalid = $(this).data("target");
    if (!modalid) {
        modalid = '#modal-edit';
    }
    $(modalid + " .modal-content").load(target, function () {
        $(modalid).modal('show');
    });
});
//---Base Functions

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}