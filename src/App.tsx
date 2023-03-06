import { FormEvent, useState } from "react"
import { WheaderInformations } from "./components/WheaderInformations"
import { api } from "./lib/api"
import { AppContainer, Card, Form, Text} from "./styles/pages/main"
import day from './assets/day.jpg'

export interface WeatherContent {
  location: {
    name: string;
    region: string;
    country: string;
    localtime_epoch: number;
  },
  current: {
    last_updated_epoch: string;
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
    if (city.length === 0) {
      alert('Please put a name of city before submitting')
    }
    
    const response = await api.get(
      `${city}&aqi=no`
      )
      setData(response.data)
    }

  return (
    <AppContainer 
      style={
        { 
          backgroundImage: `url(${day})`, 
          backgroundSize: 'cover',
        }
      }
    >
      <Card>
        <Text>
          <span>Check the weather of a city</span>
        </Text>
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
        <WheaderInformations 
          data={data} 
        />
      </Card>
    </AppContainer>
  )
}
