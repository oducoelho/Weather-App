import { FormEvent, useState } from "react"
import { WheaderInformations } from "./components/WheaderInformations"
import { api } from "./lib/api"
import { AppContainer, Card, Form } from "./styles/pages/main"

export interface WeatherContent {
  location: {
    name: string;
    region: string;
    country: string;
  },
  current: {
    temp_c: string;
    condition: {
      text: string;
      icon: string;
    }
  },
}

export const App = () => {
  const [city, setCity] = useState('')
  const [data, setData] = useState<WeatherContent>({} as WeatherContent)
  

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.get(
      `${city}&aqi=no`
    )

    setData(response.data)
  }

  return (
    <AppContainer>
      <Card>
        <form onSubmit={handleSubmit}>
          <Form>
            <input 
              type="text" 
              placeholder="Type a city name"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <button>Search</button>
          </Form>
        </form>
        <WheaderInformations data={data} />
      </Card>
    </AppContainer>
  )
}
