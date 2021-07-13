import countries from '../index'

it('should get basic data on the country canada', async () => {
  const data = await countries.getCountry('canada')
  expect(data).toEqual({
    capital: 'Ottawa',
    region: 'Americas',
    numericCode: '124'
  })
})

it('should get NAFTA countries names', async () => {
  const data = await countries.getRegionCountries('nafta')
  const expectedArray = ['Canada', 'Mexico', 'United States of America']
  expect(data).toEqual(expectedArray)
})

it('should get capitals of NAFTA countries', async () => {
  const data = await countries.getRegionCapitals('nafta')
  const expectedResult = ['Ottawa', 'Mexico City', 'Washington, D.C.']
  expect(data).toEqual(expectedResult)
})
