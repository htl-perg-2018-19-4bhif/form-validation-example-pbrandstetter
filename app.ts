window.onload = function () {
    $('#emailMandatory').hide();
    $('#otherMediaChannel').hide();
    submitButton();

    $('#firstName').on('input', function () {
        if ($('#firstName').val()) {
            $('#firstNameMandatory').hide();
        } else {
            $('#firstNameMandatory').show();
        }
        submitButton();
    });

    $('#lastName').on('input', function () {
        if ($('#lastName').val()) {
            $('#lastNameMandatory').hide();
        } else {
            $('#lastNameMandatory').show();
        }
        submitButton();
    });

    $('#email').on('input', function () {
        if ($('#email').val()) {
            $('#emailMandatory').hide();
        } else if (!$('#email').val() && $('#newsletter').is(':checked')) {
            $('#emailMandatory').show();
        }
        submitButton();
    });

    $('#newsletter').click(function () {
        if ($('#newsletter').is(':checked') && $('#email').val()) {
            $('#emailMandatory').hide();
        } else if ($('#newsletter').is(':checked') && !$('#email').val()) {
            $('#emailMandatory').show();
        } else {
            $('#emailMandatory').hide();
        }
        submitButton();
    });

    $('#mediaChannelSelect').click(function () {
        if ($('#mediaChannelSelect').find(":selected").text() === "Other") {
            $('#otherMediaChannel').show();
        } else {
            $('#otherMediaChannel').hide();
        }
        submitButton();
    });

    function submitButton() {
        if ($('#firstName').val() && $('#lastName').val() && ((!$('#newsletter').is(':checked') && !$('#email').val()) ||
            ($('#newsletter').is(':checked') && $('#email').val()))) {
            $(":submit").prop("disabled", false);
        } else {
            $(":submit").prop("disabled", true);
        }
    }
}