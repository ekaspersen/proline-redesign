/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans"],
            },
            fontSize: {
                "3xl": "32px",
            },
            colors: {
                clrPrimary: "#EB3C0D",
                clrDark: "#252323",
                clrDarkGray: "#373A3C",
                clrWhite: "#FFFFFF",
            },
            boxShadow: {
                inner: "inset 0 0 0 4px #ffffff",
            },
        },
    },
    plugins: [],
};
