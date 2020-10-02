function show_content(tabName) {
    var i;
    var x = document.getElementsByClassName("content_container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}