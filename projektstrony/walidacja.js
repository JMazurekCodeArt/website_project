function validate() {
                   
    if( document.myForm.fname.value == "" ) {
       alert( "Podaj swoje imię!" );
       document.myForm.fnane.focus() ;
       return false;
    }
    if( document.myForm.lname.value == "" ) {
        alert( "Podaj swoje nazwisko!" );
        document.myForm.lname.focus() ;
        return false;
     }

    if( document.myForm.email.value == "" ) {
       alert( "Podaj swój email!" );
       document.myForm.email.focus() ;
       return false;
    }

    if( document.myForm.message.value == "" ) {
        alert( "Wpisz wiadomość!" );
        document.myForm.message.focus() ;
        return false;
     }
    return( true );


 }

 function validateEmail() {
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Podaj prawidłowy email!")
       document.myForm.email.focus() ;
       return false;
    }
    return( true );
 }
