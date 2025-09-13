import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitItem {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

interface BenefitsSectionProps {
  title: string;
  subtitle?: string;
  benefits: BenefitItem[] | string[];
  icons?: LucideIcon[];
  columns?: 2 | 3 | 4;
  variant?: 'values' | 'benefits';
  className?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  subtitle,
  benefits,
  icons = [],
  columns = 4,
  variant = 'benefits',
  className = ''
}) => {
  const getGridCols = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid ${getGridCols()} gap-8`}>
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            const isStringArray = typeof benefit === 'string';
            const title = isStringArray ? benefit : (benefit as BenefitItem).title;
            const description = isStringArray ? undefined : (benefit as BenefitItem).description;
            const BenefitIcon = isStringArray ? Icon : (benefit as BenefitItem).icon || Icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                {BenefitIcon && (
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                )}
                <h3 className={`${variant === 'values' ? 'text-xl font-semibold' : 'text-xl font-bold'} text-gray-900 mb-3`}>
                  {title}
                </h3>
                {description && (
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
