import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  paragraph2?: string;
  paragraph3?: string;
  primaryButton?: {
    text: string;
    href: string;
    icon?: LucideIcon;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: LucideIcon;
  };
  rightContent?: {
    icon?: LucideIcon;
    subtitle?: string;
    image?: string;
  };
  variant?: 'default' | 'contact' | 'about' | 'home';
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  paragraph2,
  paragraph3,
  primaryButton,
  secondaryButton,
  rightContent,
  variant = 'default',
  className = ''
}) => {
  return (
    <section className={`bg-gradient-to-br from-[#1E272D] via-[#2A363E] to-[#6B7473] text-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${rightContent ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          {/* Left Content */}
          <div className={`${!rightContent ? 'text-center' : ''} ${variant === 'contact' ? 'space-y-8' : ''}`}>
            {variant === 'default' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    {title}
                  </h1>
                  {subtitle && (
                    <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100 mb-4">
                      {subtitle}
                    </h2>
                  )}
                  <p className="text-xl text-blue-100 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            )}

            {variant === 'home' && (
              <div className="text-center max-w-4xl mx-auto space-y-8">
                <div>
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    {title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                    {description}
                  </p>
                </div>
              </div>
            )}

            {(variant === 'contact' || variant === 'about') && (
              <>
                <h1 className="text-5xl font-bold mb-6">{title}</h1>
                <div className="space-y-4">
                  <p className={`text-xl text-blue-100 leading-relaxed ${!rightContent ? 'max-w-3xl mx-auto' : ''}`}>
                    {description}
                  </p>
                  {paragraph2 && (
                    <p className={`text-xl text-blue-100 leading-relaxed ${!rightContent ? 'max-w-3xl mx-auto' : ''}`}>
                      {paragraph2}
                    </p>
                  )}
                  {paragraph3 && (
                    <p className={`text-xl text-blue-100 leading-relaxed ${!rightContent ? 'max-w-3xl mx-auto' : ''}`}>
                      {paragraph3}
                    </p>
                  )}
                </div>
              </>
            )}
            
            {/* Buttons */}
            {(primaryButton || secondaryButton) && (
              <div className={`flex flex-col sm:flex-row gap-4 mt-8 ${variant === 'home' ? 'justify-center' : ''}`}>
                {primaryButton && (
                  <Link
                    to={primaryButton.href}
                    className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    {primaryButton.icon && <primaryButton.icon className="w-5 h-5" />}
                    <span>{primaryButton.text}</span>
                  </Link>
                )}
                {secondaryButton && (
                  <Link
                    to={secondaryButton.href}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{secondaryButton.text}</span>
                    {secondaryButton.icon && <secondaryButton.icon className="w-5 h-5" />}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right Content */}
          {rightContent && (
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                {rightContent.icon && (
                  <rightContent.icon className="w-24 h-24 text-white mx-auto mb-6" />
                )}
                {rightContent.image && (
                  <img 
                    src={rightContent.image} 
                    alt="Hero" 
                    className="w-24 h-24 mx-auto mb-6 rounded-lg object-contain"
                  />
                )}
                {rightContent.subtitle && (
                  <h3 className="text-2xl font-bold text-center mb-4">
                    {rightContent.subtitle}
                  </h3>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
