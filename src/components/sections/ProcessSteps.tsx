import React from 'react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  steps: ProcessStep[];
  className?: string;
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title,
  steps,
  className = ''
}) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
