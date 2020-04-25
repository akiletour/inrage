import { createGlobalStyle } from 'styled-components'
import 'typeface-open-sans'
import 'typeface-lato'

export const ColorPrimary = '#e47e21'
export const ColorDark = '#252525'
export const ColorDarker = '#141414'

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: ${ColorDark};
    --darker: ${ColorDarker};
    --light: #999;
    --orange: ${ColorPrimary};
    --orange-darker: #b7651a;
    --primary: var(--orange);
    --primary-darker: var(--orange-darker);
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--dark);
    color: var(--light);
    font-family: 'Open Sans', sans-serif;
  }
  
  .slick-list {
    margin: 0 -8px;
    
    .slick-slide {
      padding: 0 8px;
    }
  }
`

export default GlobalStyles
