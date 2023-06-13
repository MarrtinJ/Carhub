export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "0646166915mshc4ce6fc34f82ed1p11440djsn83df4976c486",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
