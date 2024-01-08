$(document).ready(function(){

    $('#submit-contact-form').click(function(event) {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();;
      var honeypot = $("#help").val();
      var message = $("#message").val();
      var captcha = $("#captcha").val();

      var successMsg = $(".success-msg");
      var errorMsg = $(".error-msg");

      var fieldsComplete = !checkAllFieldsComplete([name, email, message, captcha]);
      successMsg.hide();
      errorMsg.hide();

      if(fieldsComplete)
      {
        if(captcha !== "5") {
            showEmailError();
        }
        else {
            if(honeypot === '' && captcha === "5")
            {
                $(".send-email").hide();
                $(".sending-email").show();
                $.ajax({
                   type : "post",
                   url : myajax.ajaxurl,
                   data : {
                     action: "send_email",
                     name: name,
                     email: email,
                     message: message,
                   },
                   success: function(response) {
                    setAllValuesToEmpty();
                     $(".sending-email").hide();
                     $(".sent-email").show();
                     $(".success-msg").show();
                     $(".error-msg").hide();
                   },
                   error: function (xhr, ajaxOptions, thrownError) {
                     console.log("Error submitting email:");
                     console.log(xhr);
                     console.log(ajaxOptions);
                     console.log(thrownError);
                     $(".error-msg").show();
                   }
                });
            }
            else {
                showEmailError();
            }
        }
      }
      else {
        showEmailError();
      }
  
    });

    function setAllValuesToEmpty() {
      $("#name").val("");
      $("#email").val("");
      $("#help").val("");
      $("#message").val("");
      $("#captcha").val("");
    }

    function showEmailError() {
      $(".success-msg").hide();
      $(".error-msg").show();
    }

    function checkAllFieldsComplete(checklist) {
        var notAllFieldsComplete = false;
        $.each(checklist, function(index, value){
            if(value.trim() === '') {
                notAllFieldsComplete = true;
            }         
        });
        return notAllFieldsComplete;
    }
  });