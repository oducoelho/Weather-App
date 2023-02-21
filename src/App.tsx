import { FormEvent, useState } from "react"
import { WheaderInformations } from "./components/WheaderInformations"
import { api } from "./lib/api"
import { AppContainer, Card, Form } from "./styles/pages/main"

export const App = () => {
  const [city, setCity] = useState('')
  const [data, setData] = useState('')
  

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert('search some thing')

    api(city)
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
        <WheaderInformations />
      </Card>
    </AppContainer>
  )
}
