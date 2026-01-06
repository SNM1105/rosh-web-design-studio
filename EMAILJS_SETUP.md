# EmailJS Setup Instructions

Your contact form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email: simonmedalssy@gmail.com
5. Copy the **Service ID** (you'll need this)

## 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**

```
You have a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and copy the **Template ID**

## 4. Update Your Code

Open `src/components/Contact.jsx` and replace these values (around line 17-19):

```javascript
const serviceID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const templateID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
```

**To find your Public Key:**

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy the **Public Key**

## 5. Test Your Form

1. Save the file after updating the IDs
2. Go to your website's contact form
3. Submit a test message
4. Check simonmedalssy@gmail.com for the email!

## Security Notes

- The free tier allows 100 emails per month
- EmailJS has built-in spam protection
- Your email is never exposed in the frontend code
- All emails go directly to simonmedalssy@gmail.com

## Troubleshooting

If emails aren't sending:

1. Check browser console for errors
2. Verify all three IDs are correct
3. Make sure your EmailJS service is connected
4. Check your EmailJS dashboard for failed sends
5. Verify you haven't exceeded the monthly limit

For more help: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
