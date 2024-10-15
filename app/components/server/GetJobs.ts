// export default async function Test() {
//   const url = "https://jobicy.p.rapidapi.com/api/v2/remote-jobs";
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "9951211cc0mshe508316dd76250ep10101ajsnf4181ead199a",
//       "x-rapidapi-host": "jobicy.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }

//   return console.log("result");
// }
// services/jobs.js
const URL = process.env.NEXT_PUBLIC_URL;

export const getJobs = async () => {
  if (!URL) {
    console.error("NEXT_PUBLIC_URL is not defined.");
    throw new Error("The NEXT_PUBLIC_URL environment variable is not defined.");
  }

  try {
    const res = await fetch(`${URL}/api/job`);

    if (!res.ok) {
      const errorText = await res.text();
      console.error(
        `GetJob Failed! Status: ${res.status} ${res.statusText}. Response: ${errorText}`
      );
      throw new Error(`GetJob Failed! Status: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data, "this is data");
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};
