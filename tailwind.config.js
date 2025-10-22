/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			dark: {
  				primary: '#0a0a0a',
  				secondary: '#111111',
  				card: '#1a1a1a',
  				border: '#2a2a2a'
  			},
  			accent: {
  				blue: '#3b82f6',
  				gray: '#6b7280',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			text: {
  				primary: '#ffffff',
  				secondary: '#a1a1aa',
  				muted: '#71717a'
  			},
  			neon: {
  				blue: '#3b82f6',
  				teal: '#2563eb',
  				purple: '#1e40af',
  				pink: '#1d4ed8'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
  			'gradient-card': 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(30,64,175,0.08) 100%)',
  			'gradient-hero': 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
  			glassmorphism: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
  		},
  		boxShadow: {
  			glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  			'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
  			'card-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
  			glass: '0 8px 32px rgba(0, 0, 0, 0.37)'
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
  			'slide-up': 'slide-up 0.8s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'glow-pulse': {
  				'0%': {
  					boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
  				},
  				'100%': {
  					boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(30px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}