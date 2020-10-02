function Email_Validation(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email))
        return true;
    else
        return false;

}

$(document).ready(function() {

    $("#form").on("submit", function(evt) {

        const username = $("#Username").val().length,
            email = $("#Email").val(),
            password = $("#Password").val().length,
            gender = $("#Gender").val();

        let k = true;

        if (username == "" || password == "" || email == "" || gender == "") {
            alert("There is still an EMPTY DATA,please fill all of your Data");
            k = false;
        }
        if (username < 5 || username > 10) {
            alert("Your Username must between 5 to 10 Character");
            k = false;
        }
        if (password < 6) {
            alert("Your Password must have 6 Character or more");
            k = false;
        }
        if (gender !== "MALE" && gender !== "FEMALE") {
            alert("Gender only accept 'MALE' or 'FEMALE' (Without Quotation)");
            k = false;
        }
        if (email != "" && !Email_Validation(email)) {
            alert("Use Email Format (ex : ...........@gmail.com)");
            k = false;
        }


        if (k) {
            alert("Your data has been submitted, Thank you for Register");
            $(this).submit();
        } else {
            evt.preventDefault();
        }

    });
});