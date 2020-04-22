//global JavaScript file
function popup(url, name) {
    return window.open(url, name, "toolbar=1,scrollbars=1,location=0,statusbar=1,menubar=1,resizable=1,width=600,height=450,screenx=10,screeny=10,top=10,left=10");
}
function popupWindow(url, name) {
    return window.open(url, name, "toolbar=1,scrollbars=1,location=1,statusbar=1,menubar=1,resizable=1,width=600,height=400,screenx=10,screeny=10,top=10,left=10");
}
function sizablePopup(url, name, w, h) {
    return window.open(url, name, "toolbar=1,scrollbars=1,location=0,statusbar=1,menubar=1,resizable=1,width=" + w + ",height=" + h + ",screenx=10,screeny=10,top=10,left=10");
}
function help(url, name) {
    return window.open(url, name, "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=550,height=200,screenx=20,screeny=20,top=20,left=20");
}
function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}
function MM_preloadImages() { //v3.0
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
}
function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}
function MM_findObj(n, d) { //v4.0
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && document.getElementById) x = document.getElementById(n); return x;
}
function clearAndStartOver(form) {
    alert('in clear and start over functionality');
}
// Function used to display the application calendar control
//  param _form        reference to form that is parent of _fieldName
//  param _fieldName   string value representing name of form element
function getCalendar(_form, _fieldName) {
    var elementid
    for (var i = 0; i < _form.elements.length; i++) {
        if (_form.elements[i].name == _fieldName) {
            elementid = i
            break
        }
    }
    window.dateField = _form.elements[elementid];
    calendar = window.open('calendar.html', 'cal', 'WIDTH=200,HEIGHT=250')
}
// Function used to submit a form from a link that allows the
// caller to override the form action property
//  param _form     reference to form that is parent of _fieldName
//  param _action   string value containing the form action
//NILESH: Modified this function to make it work for Netscape, and on Mac OS
//Also, had to change 14 jsp files to say submitform(document.forms[0]) instead of this.form
function submitForm(myform, _action) {
    if (_action != null && _action != "") {
        myform.action = _action;
    }
    myform.submit();
    return true;
}
