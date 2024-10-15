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

const URL = process.env.NEXT_PUBLIC_URL;

export const getJobs = async () => {
  const res = await fetch(`${URL}/api/job`);

  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.ok) {
    throw new Error("GetJob Failed !");
  } else if (!URL) {
    throw new Error("The next public URL is not here");
  }

  return res.json();
};
