import { FormEvent, useState } from "react"
import { WheaderInformations } from "./components/WheaderInformations"
import { api } from "./lib/api"
import { AppContainer, Card, Form, Text} from "./styles/pages/main"
import day from './assets/day.jpg'
import night from './assets/night.jpg'
import { getHour } from "./utils"

export interface WeatherContent {
  location: {
    name: string;
    region: string;
    country: string;
    localtime_epoch: number;
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
  const [background, setBackground] = useState(day)
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (city.length === 0) {
      alert('Please put a name of city before submitting')
    }

    
    const response = await api.get(
      `${city}&aqi=no`
      )
      setData(response.data)

      const id = Number(data.location.localtime_epoch)

      if (id < 1677952800) {
        setBackground(day)
        alert('dia')
      } else if (id > 1677952800) {
        setBackground(night)
        alert('noite')
      }

/*
    const id = String(new Date().getTime())
  
    if (id < '1677952800') {
      setBackground(day)
    } else {
      setBackground(night)
    } */
  }
  return (
    <AppContainer 
      style={
        { 
          backgroundImage: `url(${background})`, 
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
