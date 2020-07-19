<?php

if($_POST["submit"]) {
    $recipient="rishu.baliab@gmail.com";
    $subject="You recieved a message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";
    
    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
    
    

    // $thankYou="<p>Thank you! Your message has been sent.</p>";
}
    header('Location: index.html')
?>
<html>
<script type="text/javascript" >
    alert("Your message has been sent");
    
</script>
</html>