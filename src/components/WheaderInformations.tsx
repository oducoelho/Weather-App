import { CardContainer, City, Icone, State, StateAndCountry, Temperature } from "../styles/pages/Card"

export const WheaderInformations = () => {
  return (
    <CardContainer>
      <City>Fortaleza</City>
      <StateAndCountry>Bahia, Brazil</StateAndCountry>
      <Temperature>27 <span>°C</span></Temperature>
      <Icone>icone</Icone>
      <State>Nublado</State>
    </CardContainer>
  )
}