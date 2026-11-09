import React from 'react';

interface GateIllustrationProps {
  id: number;
  className?: string;
  size?: number;
}

/**
 * High-quality antique SVG illustrations for each of the 7 station locations:
 * 1. Névelők kapuja (Ancient Stone Gate / Portal)
 * 2. Napok ösvénye (Sun & Winding Pathway)
 * 3. Segédigék tornya (Medieval Watchtower)
 * 4. Jelentések hídja (Suspension Bridge across River)
 * 5. Mondatok romjai (Ancient Classical Temple Ruins)
 * 6. Lena naplója (Open Leather Journal with Quill)
 * 7. Kincsesöböl (Treasure Cove with Golden Chest)
 */
export const GateIllustration: React.FC<GateIllustrationProps> = ({ id, className = '', size = 48 }) => {
  switch (id) {
    case 1:
      // Névelők kapuja - Ancient archway / stone portal
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Outer frame circle gradient */}
          <circle cx="32" cy="32" r="30" fill="#fdfbf5" stroke="#8b5a2b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="27" fill="#f5ede0" />
          
          {/* Stone Arch Columns */}
          <rect x="15" y="24" width="7" height="26" rx="1.5" fill="#a88456" stroke="#5c3818" strokeWidth="1.2" />
          <rect x="42" y="24" width="7" height="26" rx="1.5" fill="#a88456" stroke="#5c3818" strokeWidth="1.2" />
          <rect x="13" y="49" width="11" height="4" rx="1" fill="#784f27" stroke="#4a2a11" strokeWidth="1" />
          <rect x="40" y="49" width="11" height="4" rx="1" fill="#784f27" stroke="#4a2a11" strokeWidth="1" />
          
          {/* Arch Top */}
          <path
            d="M15 26 C15 13 49 13 49 26"
            fill="none"
            stroke="#5c3818"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M15 26 C15 14 49 14 49 26"
            fill="none"
            stroke="#c8a374"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          
          {/* Keystone */}
          <polygon points="30,11 34,11 35,16 29,16" fill="#784f27" stroke="#4a2a11" strokeWidth="1" />
          
          {/* Gate Portal Glow / Wooden door */}
          <path d="M22 26 C22 19 42 19 42 26 L42 49 L22 49 Z" fill="#d97706" fillOpacity="0.25" />
          
          {/* Lattice / Portcullis bars */}
          <line x1="28" y1="20" x2="28" y2="49" stroke="#784f27" strokeWidth="1.2" />
          <line x1="36" y1="20" x2="36" y2="49" stroke="#784f27" strokeWidth="1.2" />
          <line x1="22" y1="30" x2="42" y2="30" stroke="#784f27" strokeWidth="1.2" />
          <line x1="22" y1="40" x2="42" y2="40" stroke="#784f27" strokeWidth="1.2" />
          
          {/* Little article scrolls der / die / das badge */}
          <circle cx="32" cy="35" r="4" fill="#fef08a" stroke="#b45309" strokeWidth="1" />
          <text x="32" y="37.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#78350f">
            Aa
          </text>
        </svg>
      );

    case 2:
      // Napok ösvénye - Winding path with rising sun and milestone
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="32" cy="32" r="30" fill="#fdfbf5" stroke="#8b5a2b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="27" fill="#fef9ee" />
          
          {/* Rising Sun */}
          <circle cx="32" cy="21" r="9" fill="#f59e0b" stroke="#b45309" strokeWidth="1.2" />
          {/* Sun Rays */}
          <line x1="32" y1="8" x2="32" y2="10" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="43" y1="13" x2="41.5" y2="15" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="21" y1="13" x2="22.5" y2="15" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="46" y1="21" x2="44" y2="21" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="21" x2="20" y2="21" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Rolling green hills */}
          <path d="M7 40 C18 30 30 35 42 32 C50 30 58 36 60 40 L60 59 L7 59 Z" fill="#bbf7d0" opacity="0.6" />
          <path d="M5 45 C20 38 40 42 59 44 L59 59 L5 59 Z" fill="#86efac" opacity="0.5" />
          
          {/* Winding stone trail / path */}
          <path
            d="M32 28 C34 35 24 38 27 45 C29 48 37 50 35 59"
            fill="none"
            stroke="#d4b483"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M32 28 C34 35 24 38 27 45 C29 48 37 50 35 59"
            fill="none"
            stroke="#8b5a2b"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          
          {/* Wooden Milestone signpost */}
          <rect x="44" y="38" width="3" height="15" fill="#784f27" />
          <path d="M42 36 L52 36 L56 39.5 L52 43 L42 43 Z" fill="#fde68a" stroke="#92400e" strokeWidth="0.8" />
          <text x="47" y="41" fontSize="4" fontWeight="bold" fill="#78350f">
            MO
          </text>
        </svg>
      );

    case 3:
      // Segédigék tornya - Medieval watchtower on a rock
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="32" cy="32" r="30" fill="#fdfbf5" stroke="#8b5a2b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="27" fill="#f7f0e4" />
          
          {/* Rock base */}
          <path d="M12 56 L20 48 L44 48 L52 56 Z" fill="#8c7054" stroke="#5a422d" strokeWidth="1.2" />
          
          {/* Tower main body */}
          <path
            d="M23 48 L25 21 L39 21 L41 48 Z"
            fill="#d1baa0"
            stroke="#5c3818"
            strokeWidth="1.5"
          />
          
          {/* Tower battlements / crenellations */}
          <rect x="22" y="16" width="20" height="5" fill="#a88456" stroke="#5c3818" strokeWidth="1.2" />
          <rect x="24" y="13" width="3" height="4" fill="#a88456" stroke="#5c3818" strokeWidth="1" />
          <rect x="30.5" y="13" width="3" height="4" fill="#a88456" stroke="#5c3818" strokeWidth="1" />
          <rect x="37" y="13" width="3" height="4" fill="#a88456" stroke="#5c3818" strokeWidth="1" />
          
          {/* Tower roof with flag */}
          <polygon points="32,7 23,16 41,16" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
          <line x1="32" y1="7" x2="32" y2="3" stroke="#450a0a" strokeWidth="1" />
          <polygon points="32,3 38,5 32,7" fill="#f59e0b" />
          
          {/* Arched windows and wooden door */}
          <path d="M30 25 C30 23 34 23 34 25 L34 29 L30 29 Z" fill="#451a03" />
          <path d="M30 33 C30 31 34 31 34 33 L34 37 L30 37 Z" fill="#451a03" />
          <path d="M29 42 C29 39 35 39 35 42 L35 48 L29 48 Z" fill="#5c3818" stroke="#3b1f0c" strokeWidth="1" />
        </svg>
      );

    case 4:
      // Jelentések hídja - Wooden rope suspension bridge across canyon
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="32" cy="32" r="30" fill="#fdfbf5" stroke="#8b5a2b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="27" fill="#fbf5ec" />
          
          {/* Cliffs on left and right */}
          <path d="M6 25 L18 27 L16 58 L6 58 Z" fill="#8b5a2b" stroke="#4a2a11" strokeWidth="1.2" />
          <path d="M46 27 L58 25 L58 58 L48 58 Z" fill="#8b5a2b" stroke="#4a2a11" strokeWidth="1.2" />
          
          {/* River below */}
          <path d="M16 50 C26 52 38 48 48 52 L48 58 L16 58 Z" fill="#38bdf8" opacity="0.6" />
          
          {/* Bridge support posts */}
          <rect x="17" y="21" width="3.5" height="12" fill="#5c3818" stroke="#3b1f0c" strokeWidth="0.8" />
          <rect x="44.5" y="21" width="3.5" height="12" fill="#5c3818" stroke="#3b1f0c" strokeWidth="0.8" />
          
          {/* Main catenary ropes */}
          <path
            d="M18 23 C28 35 36 35 46 23"
            fill="none"
            stroke="#92400e"
            strokeWidth="1.8"
          />
          <path
            d="M18 30 C28 39 36 39 46 30"
            fill="none"
            stroke="#78350f"
            strokeWidth="2.5"
          />
          
          {/* Vertical suspender ropes */}
          <line x1="24" y1="28" x2="24" y2="34" stroke="#92400e" strokeWidth="1" />
          <line x1="32" y1="31" x2="32" y2="37" stroke="#92400e" strokeWidth="1" />
          <line x1="40" y1="28" x2="40" y2="34" stroke="#92400e" strokeWidth="1" />
          
          {/* Bridge wooden walkway planks */}
          <line x1="20" y1="32" x2="44" y2="32" stroke="#b45309" strokeWidth="1.5" strokeDasharray="2 1.5" />
        </svg>
      );

    case 5:
      // Mondatok romjai - Classical ruined stone temple columns
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="32" cy="32" r="30" fill="#fdfbf5" stroke="#8b5a2b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="27" fill="#f8f1e5" />
          
          {/* Ground stone pedestal steps */}
          <rect x="10" y="50" width="44" height="4" rx="1" fill="#a88456" stroke="#5c3818" strokeWidth="1" />
          <rect x="14" y="47" width="36" height="3" rx="0.5" fill="#baa07c" stroke="#5c3818" strokeWidth="0.8" />
          
          {/* Left Column (Complete) */}
          <rect x="16" y="24" width="6" height="23" fill="#dfcbaf" stroke="#5c3818" strokeWidth="1.2" />
          <rect x="14.5" y="22" width="9" height="2.5" rx="0.5" fill="#a88456" stroke="#5c3818" strokeWidth="0.8" />
          <line x1="19" y1="25" x2="19" y2="46" stroke="#9e815d" strokeWidth="1" strokeDasharray="2 1" />
          
          {/* Middle Broken Column */}
          <path d="M29 34 L35 34 L35 47 L29 47 Z" fill="#dfcbaf" stroke="#5c3818" strokeWidth="1.2" />
          <polygon points="29,34 32,31 35,34" fill="#dfcbaf" stroke="#5c3818" strokeWidth="1" />
          
          {/* Right Column (Complete with architrave fragment) */}
          <rect x="42" y="24" width="6" height="23" fill="#dfcbaf" stroke="#5c3818" strokeWidth="1.2" />
          <rect x="40.5" y="22" width="9" height="2.5" rx="0.5" fill="#a88456" stroke="#5c3818" strokeWidth="0.8" />
          <line x1="45" y1="25" x2="45" y2="46" stroke="#9e815d" strokeWidth="1" strokeDasharray="2 1" />
          
          {/* Ruined triangular pediment on top */}
          <polygon points="12,22 28,14 36,22" fill="#baa07c" stroke="#5c3818" strokeWidth="1.2" />
          
          {/* Ivy/vine leaves climbing column */}
          <path d="M16 42 Q19 39 16 36 Q19 33 16 30" fill="none" stroke="#16a34a" strokeWidth="1.2" />
          <circle cx="17.5" cy="38" r="1.5" fill="#22c55e" />
          <circle cx="17.5" cy="32" r="1.5" fill="#22c55e" />
        </svg>
      );

    case 6:
      // Lena naplója - Open leather journal with bookmark ribbon and feather quill
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="32" cy="32" r="30" fill="#fdfbf5" stroke="#8b5a2b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="27" fill="#fef9f0" />
          
          {/* Book leather cover background */}
          <path
            d="M12 24 C20 22 28 24 32 26 C36 24 44 22 52 24 L52 47 C44 45 36 47 32 49 C28 47 20 45 12 47 Z"
            fill="#78350f"
            stroke="#451a03"
            strokeWidth="1.5"
          />
          
          {/* Open parchment book pages */}
          <path
            d="M13 22 C21 20 29 22 32 24 L32 46 C29 44 21 42 13 44 Z"
            fill="#fffdf5"
            stroke="#a88456"
            strokeWidth="1"
          />
          <path
            d="M51 22 C43 20 35 22 32 24 L32 46 C35 44 43 42 51 44 Z"
            fill="#fffdf5"
            stroke="#a88456"
            strokeWidth="1"
          />
          
          {/* Text lines in book */}
          <line x1="16" y1="27" x2="28" y2="28" stroke="#a89279" strokeWidth="0.8" />
          <line x1="16" y1="31" x2="27" y2="32" stroke="#a89279" strokeWidth="0.8" />
          <line x1="16" y1="35" x2="28" y2="36" stroke="#a89279" strokeWidth="0.8" />
          <line x1="16" y1="39" x2="25" y2="40" stroke="#a89279" strokeWidth="0.8" />
          
          <line x1="36" y1="28" x2="48" y2="27" stroke="#a89279" strokeWidth="0.8" />
          <line x1="37" y1="32" x2="48" y2="31" stroke="#a89279" strokeWidth="0.8" />
          <line x1="36" y1="36" x2="48" y2="35" stroke="#a89279" strokeWidth="0.8" />
          <line x1="37" y1="40" x2="46" y2="39" stroke="#a89279" strokeWidth="0.8" />
          
          {/* Red Bookmark Ribbon */}
          <path d="M31 24 L31 52 L33 49 L35 52 L35 24 Z" fill="#dc2626" />
          
          {/* Quill Pen */}
          <path
            d="M48 10 C46 14 43 18 39 23 L37 28 L39 29 L44 26 C47 22 49 16 51 11 Z"
            fill="#d97706"
            stroke="#78350f"
            strokeWidth="0.8"
          />
          <polygon points="36,29 37,28 39,29" fill="#1c1917" />
        </svg>
      );

    case 7:
      // Kincsesöböl - Secret cove with palm tree & glowing golden chest
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="32" cy="32" r="30" fill="#fdfbf5" stroke="#8b5a2b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="27" fill="#fef3c7" />
          
          {/* Ocean Waves */}
          <path d="M6 38 C14 36 22 40 30 38 C38 36 46 40 58 38 L58 58 L6 58 Z" fill="#38bdf8" opacity="0.4" />
          
          {/* Sandy island shore */}
          <path d="M12 56 C18 43 36 43 54 56 Z" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
          
          {/* Palm tree on right */}
          <path d="M46 52 C45 44 48 36 50 30" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          {/* Palm fronds */}
          <path d="M50 30 Q44 26 38 29" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 30 Q54 24 58 28" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 30 Q50 22 47 18" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
          
          {/* Golden Treasure Chest */}
          <rect x="22" y="38" width="18" height="12" rx="1.5" fill="#b45309" stroke="#5c3818" strokeWidth="1.2" />
          {/* Chest curved lid */}
          <path d="M21 38 C21 33 41 33 41 38 Z" fill="#d97706" stroke="#5c3818" strokeWidth="1.2" />
          {/* Gold bands and lock */}
          <line x1="26" y1="34" x2="26" y2="50" stroke="#fef08a" strokeWidth="1.5" />
          <line x1="36" y1="34" x2="36" y2="50" stroke="#fef08a" strokeWidth="1.5" />
          <circle cx="31" cy="42" r="2.5" fill="#fef08a" stroke="#78350f" strokeWidth="0.8" />
          <polygon points="31,43 30,45 32,45" fill="#78350f" />
          
          {/* Sparkles around treasure */}
          <circle cx="21" cy="32" r="1.5" fill="#f59e0b" />
          <circle cx="39" cy="28" r="1.5" fill="#f59e0b" />
        </svg>
      );

    default:
      return null;
  }
};
