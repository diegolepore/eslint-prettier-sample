/** Use Axios to get data from restcountries api */
import axios from 'axios'

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(countryName): Promise<{
  capital: string
  region: string
  numericCode: string
}> {
  const res = await axios.get(
    `https://restcountries.eu/rest/v2/name/${countryName}`
  )
  const data = res.data[0]
  const resObj = {
    capital: data.capital,
    region: data.region,
    numericCode: data.numericCode
  }

  console.log(resObj)

  return resObj
}

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string): Promise<unknown[]> {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
  )
  const data = getApi.data
  const countries = []
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name)
  }
  return countries
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string): Promise<unknown[]> {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
  )
  const data = getApi.data
  const capitals = []
  for (let i = 0; i < data.length; i++) {
    capitals.push(data[i].capital)
  }
  return capitals
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
}
