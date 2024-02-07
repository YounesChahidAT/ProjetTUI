$('body').on('click', '.ConfirmBeforeSubmitBtn', function (evt) {
    evt.preventDefault();
    var formAction = $(this).attr('formaction'),
        myForm = $(this).closest('form').attr('action', formAction),
        confirmMessage = $(this).data('confirmation-message').replace("&#039;", "\'"),
        confirmBtnMsg = $(this).data('confirm-btn-message') ? $(this).data('confirm-btn-message') : "Oui",
        cancelBtnMsg = $(this).data('cancel-btn-message') ? $(this).data('cancel-btn-message') : "Non";


    console.log($(this).closest('form').attr('action', formAction));

    Swal.fire({
      
        title: confirmMessage,
        icon: 'warning',
        showCancelButton: true,
        customClass: {
            confirmButton: 'btn btn-danger',
            cancelButton: 'btn btn-secondary'
        },
        confirmButtonText: confirmBtnMsg,
        cancelButtonText: cancelBtnMsg,
    }).then((result) => {
        console.log(confirmMessage);
        if (result.isConfirmed) {
            console.log(myForm);
            console.log("zaz");

            $(myForm).submit();
        }
    })
});