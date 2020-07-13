function  copyTextToClipboard(idCopyText) {
    var textCopy = document.getElementById(idCopyText);

    textCopy.select();
    textCopy.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    
    console.log('Text copied');

    return true;
}