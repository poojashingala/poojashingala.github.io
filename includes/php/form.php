<?php
/*     echo "<pre>";
    print_r($_POST);exit; */
extract($_POST);

$html = '<html>
    <table width="600" border="1">
        <tr>
            <td align="center">Name</td>
            <td align="center">Email</td>
            <td align="center">Phone</td>
            <td align="center">Message</td>
        </tr>
        <tr>
            <td> '.$name.' </td>
            <td> '.$email.' </td>
            <td> '.$phone.' </td>     
            <td> '.$contact.' </td>
        </tr>
    </table>
    </html>';

$subject = ucwords($name) . ' sent a message';
$headers  = "From: $email\r\n"; 
$headers .= "Content-type: text/html\r\n";

$result = mail(
    "info@poojashingala.in", 
    $subject, 
    $html,
    $headers
);


if ($result) {
    echo("success");exit();
} else {
    echo("failure");exit();
}