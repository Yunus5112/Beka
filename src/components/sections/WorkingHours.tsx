import React from 'react';
import { Clock } from 'lucide-react';

interface WorkingHour {
  day: string;
  hours: string;
}

interface WorkingHoursProps {
  title: string;
  workingHours: WorkingHour[];
  className?: string;
}

const WorkingHours: React.FC<WorkingHoursProps> = ({
  title,
  workingHours,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {title}
      </h3>
      <div className="space-y-4">
        {workingHours.map((schedule, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">{schedule.day}</span>
            </div>
            <span className="text-gray-600">{schedule.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingHours;
