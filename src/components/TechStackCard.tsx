import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TechStackCardProps {
  name: string;
  icon?: IconProp;
  color?: string;
}

export default function TechStackCard({ name, icon, color }: TechStackCardProps) {
  return (
    <div className="bg-[#141414] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center 
      transition-all duration-300 
      hover:shadow-red-600 hover:-translate-y-2 hover:scale-105 
      h-40 group"
    >
      {/* Icon */}
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ color: color }}
        />
      ) : (
        <div className="text-3xl mb-4 text-gray-500">⚙️</div>
      )}

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
        {name}
      </h3>
    </div>
  );
}