import { styled } from "..";

export const CardContainer = styled('div', {
  color: '$text700',
})
export const City = styled('div', {
  paddingTop: '10px',
  fontSize: '$lg',
  display: 'flex',
  justifyContent: 'center'
})
export const StateAndCountry = styled('div', {
  fontSize: '$ss',
  display: 'flex',
  justifyContent: 'center'
})
export const Temperature = styled('div', {
  fontSize: '$5xl',
  display: 'flex',
  justifyContent: 'center',
  
  span: {
    paddingTop: '20px',
    fontSize: '$md',
  }
})

export const State = styled('div', {
  fontSize: '$sm',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    width: '20%',
  }
})





