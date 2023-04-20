export const BASE_URL = "https://crafty-inspire.com/api";

export const COLORS = {
    TEXT: {
        DARK_GREEN: "#3F4B49",
        LIGHT_GREEN: "#4E8078",
        ACCENT_GREEN: "#17453E",
    },
    BUTTON: {
        LIGHT_GREEN: "#4E8078",
        LIGHT_PINK: "#CC9192",
    },
    BACKGROUND: {
        LIGTH_GREY: "#FAFAFA",
        ACCENT_GREY: "#F5F5F5",
        LIGHT_GREEN: "#A4C4B5",
    },
    FORM: {
        LIGTH_GREY: "#EAEAEA",
        DARK_GREY: "#696969",
    },
    CARD: {
        LIGTH_GREY: "#C7C7C7",
        DARK_GREEN: "#27403C"
    },
};

export const PRIMARY_FONT = "'Inter', sans-serif;";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  };

  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };
