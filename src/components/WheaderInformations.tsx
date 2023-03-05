import { WeatherContent } from "../App"
import { CardContainer, City,  State, StateAndCountry, Temperature } from "../styles/pages/Card"

interface WeatherProps {
  data: WeatherContent
}

export const WheaderInformations = ({ data }: WeatherProps) => {
  return (
    <CardContainer>
      {
        data.location === undefined
        ?
        <>
        </>
        :
        <>
          <City>{data.location.name}</City>
          <StateAndCountry>{data.location.region}, {data.location.country}</StateAndCountry>
          <Temperature>{data.current.temp_c} <span>°C</span></Temperature>
          <State>
            <img src={data.current.condition.icon} alt="Image of temp" />
            {data.current.condition.text}
          </State>
          {data.location.localtime_epoch}
        </>
      
      }
    </CardContainer>
  )
}