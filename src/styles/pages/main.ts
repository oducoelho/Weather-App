import { styled } from "..";


export const AppContainer = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})
export const Card = styled('div', {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: 8,
})

export const Form = styled('div', {
  display: 'flex',
  gap: '10px',
  input: {
    backgroundColor: '#E3EEEE',
    border: 'none',
    height: '35px',
    padding: '10px',
    borderRadius: 8,
  },
  button: {
    height: '35px',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: 8,
    backgroundColor: 'lightblue',
  }
})