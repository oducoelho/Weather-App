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
    backgroundColor: '#E8FEFF',
  },
  
  'body, input, button': {
    fontFamily: 'Roboto',
    fontWeight: 500,
  },  
})