export const api = async (city: string) => {
  const url: `http://api.weatherapi.com/v1/current.json?key=09d757c0c16149f391c12609232102&q=${city}&aqi=no`
  
  const fetchResponse = await fetch(url)
  const data = await fetchResponse.json()
  console.log(data)
  
  return data
}