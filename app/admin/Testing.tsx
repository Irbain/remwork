export default async function Test() {
  const url = "https://jobicy.p.rapidapi.com/api/v2/remote-jobs";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9951211cc0mshe508316dd76250ep10101ajsnf4181ead199a",
      "x-rapidapi-host": "jobicy.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
