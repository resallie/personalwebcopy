var sessionTimeout = 20 * 60 * 1000;
var popupBefore = 2 * 60 * 1000;

var countdownToZero = popupBefore;
var countdownStart = sessionTimeout - popupBefore;

var countdownStartTimer = undefined;
var countdownInterval = undefined;
var skipExtend = false;
startTimeoutCounter();


function startTimeoutCounter() {
    skipExtend = false;


    clearTimeout(updateCountdownClock);
    clearInterval(countdownInterval);

    if (location.href.toLowerCase().indexOf("public") < 0)
        countdownStartTimer = window.setTimeout(handleCountdownStart, countdownStart);
}
function handleCountdownStart() {
    countdownToZero = popupBefore;
    sessionCountdown_generateHTML();
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdownClock, 1000);
    $('#timeoutpopup').dialog({
        buttons: { "Continue Session": function () { $(this).dialog("close"); } },
        modal: true,
        width: 450,
        title: 'COLAs Online session time out warning',
        close: sessionTimeout_extend
    });

}

function secondsToText() {
    var seconds = (countdownToZero / 1000);
    var minutes = (seconds - (seconds % 60)) / 60;
    seconds = seconds % 60;

    return minutes + " minute(s) " + seconds + " second(s)";
}


function sessionCountdown_generateHTML() {
    $('#timeoutpopup').dialog('close');
    $('#timeoutpopup').dialog('destroy');
    $('#timeoutpopup').remove();

    var html = '<div id="timeoutpopup">';
    html += 'Your session will expire in <span id="timeoutcounter">' + secondsToText() + '</span>.<br/>';
    html += 'Select "Continue Session" to keep working.';
    html += '</div>';

    $('body').append(html);

}

function sessionTimeout_generateHTML() {
    $('#timeoutpopup').dialog('close');
    $('#timeoutpopup').dialog('destroy');
    $('#timeoutpopup').remove();

    var html = '<div id="timeoutpopup2">';
    html += 'Sorry, your session has expired. Please log in again.';
    html += '</div>';

    $('body').append(html);
}

function updateCountdownClock() {
    countdownToZero -= 1000;

    if (countdownToZero <= 0) {
        skipExtend = true;
        sessionTimeout_generateHTML();
        clearInterval(countdownInterval);

        $('#timeoutpopup2').dialog({
            buttons: { "Log in": function () { $(this).dialog("close"); } },
            modal: true,
            width: 450,
            title: 'COLAs Online session time out warning',
            close: function () { location = 'logoffExt.do'; }
        });

    }
    else
        try {
            $('#timeoutcounter').html(secondsToText());
        } catch (e) { }
}

function sessionTimeout_extend() {
    if (!skipExtend) {
        $.get("sessionExtend.do");
        startTimeoutCounter();
    }


}

