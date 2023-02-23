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
  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.5)",
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
    color: 'white',
    fontWeight: '500',
    borderRadius: 8,
    backgroundColor: '$blue600',
  }
})

export const Text = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  span: {
    fontSize: '$md',
    color: '$white100',
    fontWeight: 'inherit',
    paddingBottom: '10px'
  }
})