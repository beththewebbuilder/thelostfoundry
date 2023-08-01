<?php
/*
Plugin Name: BnB Ajax
Plugin URI:
Description: Sends user sign up information to TheLostFoundry
Version: 0.1
Author: Bethany Fowler
Author URI: https://bethanyfowler.me
*/

global $wpdb;

function send_email() {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  sendEmail("Course Sign Up", $message, $email);

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

  $email["to"] = "bethany.c.fowler@gmail.com";

  $email["headers"] = getEmailHeaders($client_email);

  $email["subject"] = "$subject_title" ;
  $email["body"] = "<html><body>" . "$email_content" . "</body></html>";

  wp_mail($email["to"], $email["subject"], $email["body"], $email["headers"], "-f " . $from );

}