module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      maxWidth: {
        'main' : "1232px",
        'screenf' : "1440px"
      },
      container: {
        center: true,
        // padding: '16px',
      },
      screens: {
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
      },
      colors: {
        gray: {
          50: '#F8F6F2',
          100: '#F2F0EB',
          200: '#ECE6DC',
          300: '#E4E1DA',
          400: '#E6E6E6',
          500: '#ddd',
          600: '#A7A19B',
          700: '#999',
          800: '#888',
          900: '#666',
        },
        key: {
          gold: {
            100: '#FFF8F0',
            200: '#FBF1E0',
            300: '#EAD9A5',
            400: '#DFC57A',
            500: '#D4AF37',
          },
        },
        sub: {
          black: '#333',
        },
        tertiary: {
          'category-time': '#F0E1C3',
          'category-bg': '#FAF4E8',
          'tag-primary-bg': '#FFE2B8',
          'tag-test': '#B46F00',
          'tag-secondary-bg': '#FFEFC4',
          'tag-secondary-text': '#C49E30',
          'pink': '#FA2A79',
        },
        semantic: {
          error: '#EC0000',
          focus: '#D4AF37',
        },
      },

      fontFamily: {
        'notoSansJp': ['Noto Sans JP', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
         'body': ['Lato', '"Noto Sans JP"', 'sans-serif'],
      },

      borderRadius: {
        "btnRadius": "40px"
      },

      boxShadow: {
        'b-shadow': '3px 3px 10px 0px rgba(51, 51, 51, 0.20)',
        'w-box-shadow': '3px 3px 10px 0px rgba(51, 51, 51, 0.02)',
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'a': {
          '@apply hover:opacity-70 transition delay-[0.3ms] ease-in': '',
        },
      });
    },
  ],
};
