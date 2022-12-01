/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      circle: "circle",
    },
    extend: {
      fontSize: {
        "gleads-title": ["48px", "68px"],
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
      },
      fontFamily: {
        Helvetica: "'Helvetica', sans-serif",
      },
      letterSpacing: {
        default: "0.25px",
      },
      colors: {
        // greys
        "gleads-basic": "#333333",
        "gleads-greys-100": "#FAFAFA",
        "gleads-greys-200": "#E1E1E1",
        "gleads-greys-300": "#C8C8C8",
        "gleads-greys-400": "#AFAFAF",
        "gleads-greys-500": "#969696",
        "gleads-greys-600": "#4B4B4B",
        "gleads-greys-700": "#323232",
        "gleads-greys-800": "#191919",
        "gleads-greys-900": "#000000",
        // success
        "gleads-success-100": "#66DDB3",
        "gleads-success-500": "#00C781",
        "gleads-success-600": "#00B374",
        // warning
        "gleads-warning-100": "#FFD688",
        "gleads-warning-500": "#FFBB38",
        "gleads-warning-600": "#E6A832",
        // danger
        "gleads-danger-100": "#FF8C8C",
        "gleads-danger-500": "#FF4040",
        "gleads-danger-600": "#CC3333",
        // oxfordBlue
        "gleads-oxfordBlue-100": "#EBF1FF",
        "gleads-oxfordBlue-200": "#D6E4FF",
        "gleads-oxfordBlue-300": "#99BBFF",
        "gleads-oxfordBlue-400": "#4785FF",
        "gleads-oxfordBlue-500": "#1F69FF",
        "gleads-oxfordBlue-600": "#0052F5",
        "gleads-oxfordBlue-700": "#0036A3",
        "gleads-oxfordBlue-800": "#00297A",
        "gleads-oxfordBlue-900": "#001B52",
        //  buttonBlue
        "gleads-buttonBlue-100": "#F0FAFF",
        "gleads-buttonBlue-300": "#A0DBF8",
        "gleads-buttonBlue-400": "#79CCF6",
        "gleads-buttonBlue-500": "#53BEF3",
        "gleads-buttonBlue-600": "#2EAFEF",
        "gleads-buttonBlue-700": "#149FE4",
        // pink
        "gleads-pink-300": "#F9CEC8",
        "gleads-pink-400": "#F3988D",
        "gleads-pink-500": "#ED6B5A",
        "gleads-pink-600": "#E94F3C",
        "gleads-pink-700": "#E14431",
        // orange
        "gleads-orange-300": "#FCE4C5",
        "gleads-orange-400": "#F9C98B",
        "gleads-orange-500": "#F6AE51",
        "gleads-orange-600": "#F39720",
        // yellow
        "gleads-yellow-300": "#FEE89A",
        "gleads-yellow-400": "#FDD85D",
        "gleads-yellow-500": "#FDCE35",
        "gleads-yellow-600": "#FDC40B",
        // green
        "gleads-green-300": "#AAFCDB",
        "gleads-green-400": "#7DE3BA",
        "gleads-green-500": "#50CA99",
        "gleads-green-600": "#0BB873",
      },
    },
    backgroundImage: {
      "bbc-gradient-3":
        "linear-gradient(50deg, #33D2FF 5.73%, #3D68DE 54.65%, #9845E8 96.75%);",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px",
      },
      gridGutterWidth: "1.875rem",
    }),
  ],
};
