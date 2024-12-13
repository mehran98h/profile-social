import React from 'react';
import { Phone, Mail, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';
import ContactLink from './ContactLink';

const ContactLinks = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:dariushheidaryan@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+989185097981';
  };

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
      <ContactLink
        href="tel:+989185097981"
        Icon={Phone}
        onClick={handlePhoneClick}
      />
      <ContactLink
        href="mailto:dariushheidaryan@gmail.com"
        Icon={Mail}
        onClick={handleEmailClick}
      />
      <ContactLink
        href="https://instagram.com/dariushheidaryanofficial"
        Icon={Instagram}
      />
      <ContactLink href="#" Icon={Linkedin} />
      <ContactLink href="#" Icon={MessageCircle} />
      <ContactLink href="#" Icon={Send} />
    </div>
  );
};

export default ContactLinks;