import React from 'react';

interface StatItem {
  value: string | number;
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'red';
}

interface StatsSectionProps {
  title: string;
  stats: StatItem[];
  variant?: 'achievements' | 'stats' | 'home';
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  stats,
  variant = 'stats',
  className = ''
}) => {
  const getColorClass = (color: string = 'blue') => {
    switch (color) {
      case 'green': return 'text-green-600';
      case 'purple': return 'text-purple-600';
      case 'red': return 'text-red-600';
      case 'blue':
      default: return 'text-blue-600';
    }
  };

  if (variant === 'achievements') {
    return (
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${getColorClass(stat.color)}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'home') {
    return (
      <section className={`py-20 bg-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl font-bold mb-4 ${getColorClass(stat.color)}`}>
                  {stat.value}
                </div>
                <div className="text-xl text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`text-4xl font-bold mb-2 ${getColorClass(stat.color)}`}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
