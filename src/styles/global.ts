import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',    
  },

  html: {
    fontSize: '62.5%',
  },
  
  body: {
    //backgroundColor: '$white100',
    background: 'linear-gradient(180deg, rgba(89, 76, 238, 1) 0%, #8dd0f5 100%)'
  },
  
  'body, input, button': {
    fontFamily: 'Roboto',
    fontWeight: 500,
  },  
})