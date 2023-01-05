module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                h1: ["4rem", "4.8rem"],
                "h1-md": ["8.333vw", "10vw"],
                "h1-lg": ["7.5rem", "9rem"],
                "h1-2xl": ["8.333vw", "10vw"],

                h2: ["3rem", "3.6rem"],
                "h2-md": ["6.250vw", "7.500vw"],
                "h2-lg": ["5.25rem", "6.3rem"],
                "h2-2xl": ["5.833vw", "7vw"],

                h3: ["2rem", "2.4rem"],
                "h3-md": ["4.167vw", "5vw"],
                "h3-lg": ["4rem", "4.8rem"],
                "h3-2xl": ["4.444vw", "5.333vw"],

                h4: ["1.5rem", "1.8rem"],
                "h4-md": ["3.125vw", "3.750vw"],
                "h4-lg": ["2rem", "2.4rem"],
                "h4-2xl": ["2.222vw", "2.667vw"],

                h5: ["1.125rem", "1.35rem"],
                "h5-md": ["2.344vw", "2.813vw"],
                "h5-lg": ["1.5rem", "2rem"],
                "h5-2xl": ["1.667vw", "2.222vw"],

                "body-text": ["0.75rem", "1.05rem"],
                "body-text-md": ["1.563vw", "2.188vw"],
                "body-text-lg": ["0.875rem", "1.225rem"],
                "body-text-2xl": ["0.972vw", "1.361vw"],

                "body-large": ["0.875rem", "1.225rem"],
                "body-large-md": ["1.823vw", "2.552vw"],
                "body-large-lg": ["1rem", "1.4rem"],
                "body-large-2xl": ["0.972vw", "1.361vw"],
                "body-large-16-2xl": ["1.111vw", "1.556vw"],

                "body-small": ["0.75rem", "1.05rem"],
                "body-small-md": ["1.563vw", "2.188vw"],
                "body-small-lg": ["0.875rem", "1.225rem"],
                "body-small-2xl": ["0.972vw", "1.361vw"],

                caption: ["0.75rem", "1.05rem"],
                "caption-md": ["1.563vw", "2.214vw"],
                "caption-lg": ["0.75rem", "1.05rem"],
                "caption-2xl": ["0.833vw", "1.167vw"],

                "utility-large": ["0.875rem", "0.963rem"],
                "utility-large-2xl": ["0.972vw", "1.069vw"],

                "utility-small": ["0.75rem", "0.9rem"],
                "utility-small-2xl": ["0.833vw", "1vw"],
            },
            colors: {
                primary: "rgba(243, 242, 237, 1)",
                bprimary: "rgba(13, 12, 12)",
                secondary: "rgba(203, 201, 188, 1)",
                tertiary: "rgba(247, 246, 243, 1)",
                quaternary: "rgba(225, 255, 77, 1)",
                graphite: "rgba(26, 24, 23, 1)",
                // subdued: "rgba(102, 102, 102, 1)",
                subdued: "#515151",
                neutral: "rgba(184, 184, 184, 1)",
                light: "rgba(246, 246, 246, 1)",
                gradBlack: "rgba(0, 0, 0, 0.3)",
                lighBlack: "rgba(0, 0, 0, 0.6)",
                dark: "rgba(0, 0, 0, 0)",
                white: "rgba(255, 255, 255)",
                lnk: "rgba(28, 28, 28, 1)",
                blue: "rgba(0, 56, 255, 1)",
                red: "rgba(236, 0, 0, 1)",
                green: "rgba(37, 185, 0, 1)",
                trace: "rgba(51, 47, 41, 1)",
                link: "#A16D5F",
                footerTxt: "rgba(60, 60, 60, 1)",
                warmTone: {
                    2: "#F3F2ED",
                    3: "#ECEBE9",
                    4: "#CBC9BC",
                },
                overlay: {
                    popup: "rgba(0, 0, 0, 0.2)",
                },
            },
            textColor: {
                primary: "var(--text-primary)",
            },
            spacing: {
                navigation: "13.5px",

                10: "0.625rem",
                "10-md": "1.302vw",
                "10-2xl": "0.694vw",

                20: "1.25rem",
                "20-md": "2.604vw",
                "20-2xl": "1.389vw",

                30: "1.875rem",
                "30-md": "3.906vw",
                "30-2xl": "2.083vw",

                40: "2.5rem",
                "40-md": "5.208vw",
                "40-2xl": "2.778vw",

                60: "3.75rem",
                "60-md": "7.813vw",
                "60-2xl": "4.167vw",
            },
            letterSpacing: {
                widest: "0.08rem",
            },
            screens: {
                tablet2: { min: "767px", max: "1305px" },
                "2xl": { min: "1441px" },
                "value-prop": { min: "1100px" },
                homePad: { min: "767px", max: "1024px" },
                homeDesk: { min: "1025px", max: "1440px" },
            },
            cursor: {
                close: "url(/close.svg), pointer",
            },
            transitionTimingFunction: {
                "in-expo": "cubic-bezier(.73,.01,0,1)",
                "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
                "overlay-anim": "cubic-bezier(.19,1,.22,1)",
            },

            transformOrigin: {
                "top-left-0-2/4": "0 50%",
                "top-left-full-2/4": "100% 50%",
            },
        },
    },
    plugins: [],
};