'use client';

import { Phone, MessageCircle, Mail, Calendar } from 'lucide-react';

export function FixedContactButtons() {
  const contactButtons = [
    {
      icon: Phone,
      label: 'Bel ons',
      href: 'tel:+31857926363',
      color: 'bg-black hover:bg-gray-800',
      detail: '085 792 6363'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/31857926363',
      color: 'bg-black hover:bg-gray-800',
      detail: 'Chat met ons'
    },
    {
      icon: Mail,
      label: 'E-mail',
      href: 'mailto:info@beekautomotive.nl',
      color: 'bg-black hover:bg-gray-800',
      detail: 'info@beekautomotive.nl'
    },
    {
      icon: Calendar,
      label: 'Afspraak',
      href: '/contact',
      color: 'bg-black hover:bg-gray-800',
      detail: 'Plan een afspraak'
    }
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-3">
        {contactButtons.map((button, index) => {
          const IconComponent = button.icon;

          return (
            <a
              key={index}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative flex items-center justify-center w-14 h-14 rounded-lg text-white shadow-lg transition-all duration-300 hover:scale-110 ${button.color}`}
              title={button.label}
            >
              <IconComponent className="w-6 h-6" />

              {/* Tooltip */}
              <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
                  <div className="font-medium">{button.label}</div>
                  <div className="text-xs opacity-90">{button.detail}</div>
                  {/* Arrow */}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}