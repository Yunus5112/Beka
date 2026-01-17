import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  title: string;
  description?: string;
  features?: string[];
  icon?: LucideIcon;
  link?: string;
  buttonText?: string;
}

interface ServiceCardsProps {
  title: string;
  services: ServiceItem[];
  variant?: 'home' | 'services' | 'detail';
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({
  title,
  services,
  columns = 2,
  className = ''
}) => {
  const getGridCols = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 lg:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 lg:grid-cols-2';
    }
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        <div className={`grid ${getGridCols()} gap-8`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
              >
                {/* Service Header */}
                <div className="flex items-center space-x-4 mb-6">
                  {Icon && (
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                {/* Service Description */}
                {service.description && (
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                )}

                {/* Service Features */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Button */}
                {service.link && service.buttonText && (
                  <div className="mt-6">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      {service.buttonText}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
