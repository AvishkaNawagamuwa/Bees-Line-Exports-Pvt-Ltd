<?php
/**
 * Bees Line Exports - Contact Form Handler
 * Using PHPMailer with SMTP
 */

// Security Headers
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Please use POST.'
    ]);
    exit;
}

// Start session for rate limiting
session_start();

// ==========================================
// RATE LIMITING
// ==========================================
$rateLimit = 3; // Maximum submissions
$rateLimitWindow = 900; // 15 minutes in seconds

// Initialize submission tracking
if (!isset($_SESSION['form_submissions'])) {
    $_SESSION['form_submissions'] = [];
}

// Clean old submissions
$currentTime = time();
$_SESSION['form_submissions'] = array_filter(
    $_SESSION['form_submissions'],
    function($timestamp) use ($currentTime, $rateLimitWindow) {
        return ($currentTime - $timestamp) < $rateLimitWindow;
    }
);

// Check rate limit
if (count($_SESSION['form_submissions']) >= $rateLimit) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Too many submissions. Please try again in 15 minutes.'
    ]);
    exit;
}

// ==========================================
// SMTP CONFIGURATION
// ==========================================
// IMPORTANT: Replace these with your actual SMTP credentials
define('SMTP_HOST', 'smtp.gmail.com'); // e.g., smtp.gmail.com, smtp.office365.com
define('SMTP_PORT', 587); // 587 for TLS, 465 for SSL
define('SMTP_ENCRYPTION', 'tls'); // 'tls' or 'ssl'
define('SMTP_USER', 'your-email@gmail.com'); // Your email address
define('SMTP_PASS', 'your-app-password'); // Your email password or app password
define('SMTP_FROM_EMAIL', 'your-email@gmail.com'); // From email
define('SMTP_FROM_NAME', 'Bees Line Exports Website');

// Recipient emails
define('RECIPIENT_EMAIL', 'info@beeslineexport.com');
define('RECIPIENT_NAME', 'Bees Line Exports');

// ==========================================
// INPUT VALIDATION & SANITIZATION
// ==========================================
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Get and sanitize form inputs
$name = isset($_POST['name']) ? sanitizeInput($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitizeInput($_POST['email']) : '';
$country = isset($_POST['country']) ? sanitizeInput($_POST['country']) : '';
$subject = isset($_POST['subject']) ? sanitizeInput($_POST['subject']) : '';
$product = isset($_POST['product']) ? sanitizeInput($_POST['product']) : '';
$message = isset($_POST['message']) ? sanitizeInput($_POST['message']) : '';

// Validation errors array
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Please provide a valid name (minimum 2 characters).';
}

if (empty($email) || !validateEmail($email)) {
    $errors[] = 'Please provide a valid email address.';
}

if (empty($country) || strlen($country) < 2) {
    $errors[] = 'Please provide a valid country.';
}

if (empty($subject)) {
    $errors[] = 'Please select a subject.';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Please provide a message (minimum 10 characters).';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors)
    ]);
    exit;
}

// ==========================================
// PHPMAILER SETUP
// ==========================================
// Include PHPMailer (assuming you've installed it via Composer)
// If using Composer: require 'vendor/autoload.php';
// If using manual download: adjust the paths below

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Try to load PHPMailer via Composer autoload
if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
    require __DIR__ . '/../vendor/autoload.php';
} 
// Fallback to manual include (if PHPMailer is in php/PHPMailer directory)
elseif (file_exists(__DIR__ . '/PHPMailer/src/PHPMailer.php')) {
    require __DIR__ . '/PHPMailer/src/Exception.php';
    require __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require __DIR__ . '/PHPMailer/src/SMTP.php';
} 
else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Email system not configured. Please contact the administrator.'
    ]);
    exit;
}

// ==========================================
// SEND EMAIL
// ==========================================
try {
    $mail = new PHPMailer(true);
    
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = SMTP_ENCRYPTION;
    $mail->Port = SMTP_PORT;
    
    // Disable verbose debug output (set to SMTP::DEBUG_SERVER for debugging)
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    
    // Sender and recipient
    $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
    $mail->addAddress(RECIPIENT_EMAIL, RECIPIENT_NAME);
    $mail->addReplyTo($email, $name);
    
    // Email content - to admin
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = "New Contact Form: $subject";
    
    // HTML Email Body
    $mail->Body = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F4B400 0%, #F2994A 50%, #D3543A 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #F4B400; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-left: 3px solid #F4B400; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2 style='margin: 0;'>🐝 Bees Line Exports</h2>
                <p style='margin: 5px 0 0 0;'>New Contact Form Submission</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Name:</div>
                    <div class='value'>$name</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>$email</div>
                </div>
                <div class='field'>
                    <div class='label'>Country:</div>
                    <div class='value'>$country</div>
                </div>
                <div class='field'>
                    <div class='label'>Subject:</div>
                    <div class='value'>$subject</div>
                </div>
                " . (!empty($product) ? "
                <div class='field'>
                    <div class='label'>Product Interest:</div>
                    <div class='value'>$product</div>
                </div>
                " : "") . "
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
                <div class='footer'>
                    <p>Received on " . date('F j, Y \a\t g:i A') . "</p>
                    <p>From Bees Line Exports Website Contact Form</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Plain text alternative
    $mail->AltBody = "
    New Contact Form Submission
    ===========================
    
    Name: $name
    Email: $email
    Country: $country
    Subject: $subject
    " . (!empty($product) ? "Product: $product\n" : "") . "
    Message:
    $message
    
    ---
    Received on " . date('F j, Y \a\t g:i A') . "
    ";
    
    // Send email to admin
    $mail->send();
    
    // ==========================================
    // SEND AUTO-REPLY TO CUSTOMER
    // ==========================================
    $mail->clearAddresses();
    $mail->addAddress($email, $name);
    $mail->Subject = "Thank you for contacting Bees Line Exports";
    
    $mail->Body = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F4B400 0%, #F2994A 50%, #D3543A 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; }
            .footer { background: #111; color: white; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; font-size: 14px; }
            .btn { display: inline-block; background: linear-gradient(135deg, #F4B400, #F2994A); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1 style='margin: 0;'>🐝 Bees Line Exports</h1>
                <p style='margin: 10px 0 0 0;'>From Nature's Wisdom to Everyday Well-Being</p>
            </div>
            <div class='content'>
                <h2 style='color: #F4B400;'>Dear $name,</h2>
                <p>Thank you for reaching out to <strong>Bees Line Exports (Pvt) Ltd</strong>!</p>
                <p>We have received your inquiry regarding: <strong>$subject</strong></p>
                " . (!empty($product) ? "<p>Product of interest: <strong>$product</strong></p>" : "") . "
                <p>Our team will review your message and get back to you within 24-48 hours.</p>
                <p>If you have any urgent questions, please feel free to contact us directly:</p>
                <ul>
                    <li>📞 Phone: +94 777 182 110 / +94 777 667 576</li>
                    <li>📧 Email: info@beeslineexport.com</li>
                    <li>📍 Address: No. 10, Horton Place, Colombo 07, Sri Lanka</li>
                </ul>
                <p>Thank you for your interest in our premium herbal wellness solutions!</p>
                <p style='margin-top: 30px;'>Best regards,<br><strong>Bees Line Exports Team</strong></p>
            </div>
            <div class='footer'>
                <p>&copy; " . date('Y') . " Bees Line Exports (Pvt) Ltd. All rights reserved.</p>
                <p style='font-size: 12px; margin-top: 10px;'>Trusted herbal wellness solutions from Sri Lanka</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $mail->AltBody = "
    Dear $name,
    
    Thank you for reaching out to Bees Line Exports (Pvt) Ltd!
    
    We have received your inquiry regarding: $subject
    " . (!empty($product) ? "Product of interest: $product\n\n" : "") . "
    Our team will review your message and get back to you within 24-48 hours.
    
    Contact Information:
    Phone: +94 777 182 110 / +94 777 667 576
    Email: info@beeslineexport.com
    Address: No. 10, Horton Place, Colombo 07, Sri Lanka
    
    Best regards,
    Bees Line Exports Team
    
    ---
    © " . date('Y') . " Bees Line Exports (Pvt) Ltd. All rights reserved.
    ";
    
    // Send auto-reply
    $mail->send();
    
    // Track successful submission
    $_SESSION['form_submissions'][] = time();
    
    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
    
} catch (Exception $e) {
    // Log error (in production, log to file instead of exposing details)
    error_log("Contact form error: {$mail->ErrorInfo}");
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message. Please try again or contact us directly via email.'
    ]);
}
?>
