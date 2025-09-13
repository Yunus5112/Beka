import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string;
  description: string;
}

interface ContactCardsProps {
  contactInfo: ContactInfo[];
  className?: string;
}

const ContactCards: React.FC<ContactCardsProps> = ({
  contactInfo,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto ${className}`}>
      {contactInfo.map((contact, index) => {
        const Icon = contact.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {contact.title}
            </h3>
            <p className="text-blue-600 font-semibold mb-2">
              {contact.details}
            </p>
            <p className="text-gray-600 text-sm">
              {contact.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCards;
