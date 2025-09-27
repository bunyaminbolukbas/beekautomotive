import { Star, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone?: string;
  email?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mx-auto w-72 sm:w-80">
      {/* Member Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Member Info */}
      <div className="p-3">
        {/* Role */}
        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
          {member.role}
        </p>

        {/* Name */}
        <h3 className="text-base font-normal text-white mb-2">
          {member.name}
        </h3>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-3"></div>

        {/* Contact Options */}
        <div className="flex justify-start gap-2">
          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              className="flex items-center justify-center w-10 h-10 bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-gray-500/20"
              title="Bel ons"
            >
              <Phone className="w-4 h-4 text-white" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center w-10 h-10 bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-gray-500/20"
              title="E-mail"
            >
              <Mail className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Rutger van Beek',
      role: 'Sales Manager',
      image: '/team/rutger.jpg',
      phone: '+31 6 12345678',
      email: 'rutger@beekautomotive.nl'
    },
    {
      name: 'Ilias',
      role: 'Sales Manager',
      image: '/team/ilias.jpg',
      phone: '+31 6 87654321',
      email: 'ilias@beekautomotive.nl'
    }
  ];

  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Box Section */}
        <div className="bg-gray-800 p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left side - Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-blue-400 mb-4">
                Advies nodig?{' '}
                <span className="text-white">
                  Vraag het aan één van onze experts
                </span>
              </h2>
            </div>

            {/* Right side - Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-4">
                Waarom kiezen voor van Beek?
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Eigenaar Rutger van Beek en Ilias hebben jarenlange ervaring in de auto industrie. We zijn pas tevreden als jij dat ook bent. Daarom doen we er alles aan om je een zorgeloze en plezierige ervaring te bieden bij het kopen van jouw droomauto. Met onze persoonlijke aanpak, transparantie en expertise zorgen we ervoor dat je met een gerust hart de weg op kunt. Neem contact met ons op of bel direct op{' '}
                <span className="text-blue-400">088 3888 000</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Team Cards Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-shrink-0">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}