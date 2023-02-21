interface Props {
  city: string;
}
export const api = async (city: Props) => {
  const url: 'http://api.weatherapi.com/v1/current.json?key=bacc33e35e9f4f63bc0214851222408&q=${city}&aqi=no'
  console.log(city)

  const fetchResponse = await fetch(url)
  const data = await fetchResponse.json()
  
  return data
}
