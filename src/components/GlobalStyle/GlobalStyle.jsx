import { createGlobalStyle } from "styled-components";
import { colors } from "../../utils/theme/theme";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgb(${colors.DARKER});
        color: rgb(${props => props.theme.foreground});
        font-family: 'Josefin Sans', sans-serif;
        font-size: large;
    }

    p {
        margin: .5rem;
        line-height: 2rem;
    }
    
    a {
        color: rgb(${colors.SEA_GREEN_CRAYOLA});
        text-decoration: none;

        &:visited {
            color: rgb(${colors.MOUNTBATTEN_PINK});
        }

        &:hover {
            color: #FFF;
        }
        
        &:active {
            color: rgb(${colors.INTERNATIONAL_ORANGE_AEROSPACE});
        }
    }

`;

export default GlobalStyle;
