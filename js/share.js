document.addEventListener("DOMContentLoaded", function(event) {
    const copyBtn=document.getElementById("copyBtn");

    function copyFunction() {
    /* Get the text field */
    var copyText = document.getElementById("copyUrl");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    var tooltip = document.getElementById ("myTooltip");
    /*function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
        .writeText(copyText.value)
        .then(() => {
        alert("successfully copied");
        })
        .catch(() => {
        alert("something went wrong");
        });
    }*/
    navigator.clipboard
        .writeText(copyText.value)
        .then(() => {
        tooltip.innerHTML = "Copiato";
        })
        .catch(() => {
        tooltip.innerHTML = "Errore";
        });
    /* Copy the text inside the text field */
    //navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    //alert("Link copiato");

    }

    function share_banner_class_toggle(){
    document.getElementById("share_banner").classList.toggle("hidden");
    };

    copyBtn.addEventListener("click", copyFunction);
    document.getElementById("share_banner_open").addEventListener("click", share_banner_class_toggle);
    document.getElementById("share_banner_close").addEventListener("click", share_banner_class_toggle);
});