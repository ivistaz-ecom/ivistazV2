/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        // Custom font family
        fontFamily: {
          'monument': ['"monument regular"', 'sans-serif'],
        },
        
        // Custom colors (if you want to reference #ed2225 easily)
        colors: {
          'custom-red': '#ed2225',
        },
        
        // Animation keyframes
        keyframes: {
          crissCrossLeft: {
            '0%': { left: '-20px' },
            '50%': { left: '50%', width: '20px', height: '20px' },
            '100%': { 
              left: '50%', 
              width: '375px', // 150% of max-width 200px + some extra
              height: '375px', 
              borderRadius: '0' 
            }
          },
          crissCrossRight: {
            '0%': { right: '-20px' },
            '50%': { right: '50%', width: '20px', height: '20px' },
            '100%': { 
              right: '50%', 
              width: '375px', // 150% of max-width 200px + some extra
              height: '375px', 
              borderRadius: '0' 
            }
          }
        },
        
        // Animation classes
        animation: {
          crissCrossLeft: 'crissCrossLeft 0.8s both alternate',
          crissCrossRight: 'crissCrossRight 0.8s both alternate',
        },
        
        // Any other customizations
        maxWidth: {
          '200': '200px',
        },
        zIndex: {
          '9999': '9999',
          '-17': '-17',
        }
      },
    },
    plugins: [],
  }