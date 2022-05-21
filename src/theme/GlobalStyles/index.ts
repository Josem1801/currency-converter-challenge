import { createGlobalStyle } from 'styled-components'
import { normalize } from './normalice'

export const GlobalStyles = createGlobalStyle`
 ${normalize}

 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html{
  font-family: 'Lato', sans-serif;
  font-weight: 400;
 }
`
