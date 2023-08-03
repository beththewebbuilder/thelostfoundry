<?php
/*
Plugin Name: BnB Send Email
Plugin URI:
Description: Using Ajax function to send email to company address
Version: 0.1
Author: Bethany Fowler
Author URI: https://bethanyfowler.me
*/

global $wpdb;

add_action( 'wp_ajax_send_email', 'send_email' );
add_action( 'wp_ajax_nopriv_send_email', 'send_email' );

function send_email() {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $warning_message = '';
  if(stripos($_POST['message'], "copyright") || stripos($_POST['message'], "seo")) {
    $warning_message = 'CAUTION: This message looks like spam <br/><br/>';
  }

  $message = $warning_message . "<h3>The Lost Foundry Email Enquiry</h3><p>Enquiry from: " . $name . " at: " . $email . 
  "</p><p>Message/additional information:" . $message . "</p>";

  sendEmail("The Lost Foundry Website Enquiry", $message, $email);

  wp_die();
}

function getEmailHeaders($client_email) {
  $from = $client_email;

  $email["headers"] = "";
  $email["headers"] .= 'MIME-Version: 1.0' . "\r\n" ;
  $email["headers"] .= 'Content-type: text/html; charset=UTF-8' . "\r\n" ;
  $email["headers"] .= "Content-Transfer-Encoding: 8bit\r\n";
  $email["headers"] .= "Date: ".date("r (T)")."\r\n";
  $email["headers"] .= "From: " . $from . " <" . $from . ">" . "\r\n" ;
  $email["headers"] .= "Reply-to: " . $from . "\r\n" ;

  return $email["headers"];
}

function sendEmail($subject_title, $email_content, $client_email) {
  
  $from = $client_email;

  $email["to"] = "contact@jordanfowlervideography.co.uk";

  $email["headers"] = getEmailHeaders($client_email);

  $email["subject"] = "$subject_title" ;
  $email["body"] = "<html><body>" . "$email_content" . "</body></html>";

  wp_mail($email["to"], $email["subject"], $email["body"], $email["headers"], "-f " . $from );

}