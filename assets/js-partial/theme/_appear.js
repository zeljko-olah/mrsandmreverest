
    /* -------------------------------------------------------------------------------------------------------------- *
     * Appear
     * -------------------------------------------------------------------------------------------------------------- */

    $('.appear').appear();

    $body.on('appear', '.appear', function () {
        $(this).addClass('appear-in');
    });