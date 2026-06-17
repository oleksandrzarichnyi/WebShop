const NP_API_URL = 'https://api.novaposhta.ua/v2.0/json/'

async function npRequest(modelName: string, calledMethod: string, methodProperties: object) {
  const res = await fetch(NP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      modelName,
      calledMethod,
      methodProperties,
    }),
  })
  const data = await res.json()
  return data.data
}

export async function searchCities(query: string) {
  return npRequest('Address', 'getCities', {
    FindByString: query,
    Language: 'UA',
    Limit: 10,
  })
}

export async function searchWarehouses(cityRef: string, query: string) {
  return npRequest('AddressGeneral', 'getWarehouses', {
    CityRef: cityRef,
    FindByString: query,
    Limit: 10,
  })
}