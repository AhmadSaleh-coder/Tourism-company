import './scss/style.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';
import 'wowjs';
import 'animate.css/animate.css';
import 'validate.js/validate';
var validate = require("validate.js");



$(document).ready(function () {
    const WOW = require('wowjs');
    window.wow = new WOW.WOW({ live: false });
    window.wow.init();

    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

    function validatePassword() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("كلمة المرور غير متطابقة");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    $(function(){
        $("#myForm").validate();
      });

      $(function(){
        $("#loginForm").validate();
      });  
    
});

