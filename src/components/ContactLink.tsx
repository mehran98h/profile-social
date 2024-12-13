import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactLinkProps {
  href: string;
  Icon: LucideIcon;
  onClick?: () => void;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, Icon, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    >
      <Icon className="w-6 h-6 text-gray-700" />
    </a>
  );
};

export default ContactLink;