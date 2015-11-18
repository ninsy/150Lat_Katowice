var $overlay = $("<div id='overlay'></div>");

var $form = $("<form></form>");
var $insideDiv =  $("<div id='insideOne'></div>");
var $inputName = $("<input type='text'>").attr('id', 'nameInput').attr('name', 'login');
var $inputEmail = $("<input type='text' >").attr('id', 'emailInput').attr('name', 'email');
var $confirmButton = $("<button id='sub' type='submit'>Subscribe!</button>");

var $labelName = $("<label for='nameInput'>Username:</label>");
var $labelMail = $("<label for='emailInput'>Email:</label>");



$insideDiv.append($labelName);
$insideDiv.append($inputName);


$insideDiv.append($labelMail);
$insideDiv.append($inputEmail);


$insideDiv.append($confirmButton);

$form.append($insideDiv);




$overlay.append($form);

var $btnSuccess = $("<div id='success' class='messageButton'>Great!<br> Check your inbox for confirmation!</div>");
$btnSuccess.hide();
$overlay.append($btnSuccess);

var $btnFail = $("<div id='fail' class='messageButton'>Oops!<br>Something went wrong!</div>");
$btnFail.hide();
$overlay.append($btnFail);

$("#clearer").append($overlay);

var toggleView = function () {

    if ($overlay.is(":hidden")) {

        $overlay.show();
    }
    else {
        $overlay.hide();
    }
}

var notEmpty = function(string) {

    if(string.trim().length > 0) {
        return true;
    }
    else return false;
}


var validateEmail = function(email) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$("#confirm").click(function() {

    console.log("MAGIC HAPPENS");
    toggleView();
});

$("#sub").click(function(event) {

    event.preventDefault();
    var $nameVal = $("#nameInput").val();
    var $emailVal = $("#emailInput").val();

    $nameVal.trim();
    $emailVal.trim();

    if(notEmpty($nameVal) && notEmpty($emailVal) && validateEmail($emailVal)) {
        console.log("nice!");
        console.log($nameVal);
        console.log($emailVal);

        $btnSuccess.fadeIn("slow");
        $btnSuccess.delay(2000).fadeOut("slow");
    }
    else {
        $btnFail.fadeIn("slow");
        $btnFail.delay(2000).fadeOut("slow");
    }
});