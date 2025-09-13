import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, LucideIcon } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  buttonIcon?: LucideIcon;
  variant?: 'mission-vision' | 'cta';
  className?: string;
  leftContent?: {
    title: string;
    description: string;
  };
  rightContent?: {
    title: string;
    description: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonHref = '/appointment',
  buttonIcon: ButtonIcon = Calendar,
  variant = 'cta',
  className = '',
  leftContent,
  rightContent
}) => {
  if (variant === 'mission-vision' && leftContent && rightContent) {
    return (
      <section className={`py-20 bg-gradient-to-r from-[#1E272D] to-[#6B7473] ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">{leftContent.title}</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {leftContent.description}
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">{rightContent.title}</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {rightContent.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-gradient-to-r from-[#1E272D] to-[#6B7473] py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          to={buttonHref}
          className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
        >
          <ButtonIcon className="w-5 h-5 mr-2" />
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
