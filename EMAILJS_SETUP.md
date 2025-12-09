# EmailJS Setup Instructions

To enable email functionality for the contact form, you need to set up EmailJS:

## Step 1: Create an EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email account (muskaans@1401@gmail.com)
5. Copy the **Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from {{from_name}}

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; display: block; font-size: 14px; }
    .value { color: #4b5563; padding: 10px; background: white; border-left: 3px solid #2563eb; border-radius: 4px; }
    .message-box { background: white; padding: 15px; border-left: 3px solid #2563eb; border-radius: 4px; margin-top: 10px; white-space: pre-wrap; }
    .footer { background: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>HR NEXUS - Contact Inquiry</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <div class="value">{{name}}</div>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <div class="value">{{from_email}}</div>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <div class="value">{{phone}}</div>
      </div>
      <div class="field">
        <span class="label">Company Name:</span>
        <div class="value">{{company}}</div>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="message-box">{{user_message}}</div>
      </div>
      <div class="field">
        <span class="label">Submitted At:</span>
        <div class="value">{{submitted_at}}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the HR NEXUS contact form.</p>
      <p>Please respond to: {{from_email}}</p>
    </div>
  </div>
</body>
</html>
```

4. Set "To Email" to: `muskaans@1401@gmail.com`
5. Set "Reply To" to: `{{from_email}}`
6. Copy the **Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (also called API Key)

## Step 5: Update the Contact Form
1. Open `src/pages/Contact.jsx`
2. Replace these placeholders:
   - `YOUR_SERVICE_ID` with your Service ID
   - `YOUR_TEMPLATE_ID` with your Template ID
   - `YOUR_PUBLIC_KEY` with your Public Key

## Alternative: Quick Setup Script
After setting up EmailJS, you can also create a `.env` file in the root directory:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update the Contact.jsx to use environment variables.




