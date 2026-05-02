// EmailJS Configuration
// To setup EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Sign up with your email
// 3. Add an email service (Gmail recommended)
// 4. Create an email template
// 5. Get your Public Key from Account > API Keys
// 6. Replace the values below with your actual keys

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (from Account > API Keys)
  PUBLIC_KEY: 'R6Zc1r6LZYdfx83w2',
  
  // Your EmailJS Service ID (from Email Services)
  SERVICE_ID: 'service_u9u96aa',
  
  // Your EmailJS Template ID (from Email Templates)
  ADMIN_TEMPLATE_ID: 'template_3pe5alr',      // admin için
  CUSTOMER_TEMPLATE_ID: 'template_iynlg0p',   // müşteri için
};

// Email template parameters interface
export interface AppointmentEmailParams {
  to_email: string;           // bostonconsultinghub@gmail.com
  from_name: string;          // Customer's full name
  from_email: string;         // Customer's email
  from_phone: string;         // Customer's phone
  service: string;            // Selected service
  date: string;               // Selected date
  time: string;               // Selected time
  message?: string;           // Optional message
}

