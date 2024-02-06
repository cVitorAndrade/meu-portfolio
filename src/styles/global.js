import { createGlobalStyle } from "styled-components";

import organicRelief from "../font/OrganicRelief.ttf";
import sugarPunhDemo from "../font/SugarpunchDEMO.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Organic Relief';
        src: url(${organicRelief}) format('truetype');
    }

    @font-face {
        font-family: 'Sugar Punch Demo';
        src: url(${sugarPunhDemo});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        color: ${ ({ theme }) => theme.COLORS.WHITE_900};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;