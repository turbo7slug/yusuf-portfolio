module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0d1117', // Darker background color
        light: '#ffffff', // Text color
        muted: '#8b949e', // Muted text for subtle details
        accent: '#1f6feb', // Accent color for links and buttons
        cardBg: '#161b22', // Background color for cards and containers
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle card shadow
        hover: '0 10px 15px rgba(0, 0, 0, 0.2)', // Hover state shadow
      },
    },
  },
  plugins: [],
}
