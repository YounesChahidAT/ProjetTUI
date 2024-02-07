"use strict";

// Class definition
var KTProjectsAdd = function () {
    // Base elements
    var _wizardEl;
    var _formEl;
    var _submitButton;
    var _wizardObj;
    var _token = $('input:hidden[name="__RequestVerificationToken"]').val();
    var _validations = [];

    // Private functions
    var _initWizard = function () {
        // Initialize form wizard
        _wizardObj = new KTStepper(_wizardEl);

        // Validation before going to next page
        _wizardObj.on("kt.stepper.next", function (stepper) {
            // Validate form before change wizard step
            var validator = _validations[stepper.getCurrentStepIndex() - 1]; // get validator for currnt step

            if (validator) {
                validator.validate().then(function (status) {
                    if (status == 'Valid') {
                        stepper.goNext();
                        KTUtil.scrollTop();
                    }
                });
            }
            else {
                stepper.goNext();
                KTUtil.scrollTop();
            }

            return false;  // Do not change wizard step, further action will be handled by he validator
        });

        _wizardObj.on("kt.stepper.previous", function (stepper) {
            stepper.goPrevious(); // go previous step
        });

        // Change event
        _wizardObj.on('changed', function (wizard) {
            KTUtil.scrollTop();
        });

        // Submit event
        $(_submitButton).on('click', function (wizard) {
            _formEl.submit();
        });

    }

    var _initValidation = function () {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        // Step 1
        _validations.push(FormValidation.formValidation(
            _formEl,
            {
                fields: {
                    'Projet.Code': {
                        validators: {
                            notEmpty: {
                                message: 'Ce champ est requis'
                            },
                        }
                    },
                    'Projet.Name': {
                        validators: {
                            notEmpty: {
                                message: 'Ce champ est requis'
                            }
                        }
                    },
                    'Projet.Designation': {
                        validators: {
                            notEmpty: {
                                message: 'Ce champ est requis'
                            }
                        }
                    },
                    'Projet.Logo': {
                        validators: {
                            file: {
                                extension: 'jpeg,jpg,png',
                                type: 'image/jpeg,image/png',
                                message: 'Veuillez choisir une image valid (PNG ou JPEG)',
                            }
                        },
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    autoFocus: new FormValidation.plugins.AutoFocus(),
                    // Bootstrap Framework Integration
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        //rowSelector: '.fv-row',
                        eleInvalidClass: 'is-invalid',
                        eleValidClass: ''
                    })
                }
            }
        ));
    }

    return {
        // public functions
        init: function () {
            _wizardEl = document.getElementById('kt_stepper_example_basic');
            _formEl = document.getElementById('kt_projects_add_form');
            _submitButton = document.getElementById('submitButton');

            _initWizard();
            _initValidation();
        }
    };
}();

jQuery(document).ready(function () {
    KTProjectsAdd.init();
});
