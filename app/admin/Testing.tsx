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
    const result = await response.json(); // Parse the response as JSON

    // Map over jobs array and replace 'id' with 'jobId'
    const updatedJobs = result.jobs.map(({ id, ...rest }: { id: string }) => ({
      jobId: id,
      ...rest,
    }));

    console.log(updatedJobs); // Log the modified jobs
    return updatedJobs; // Return the modified jobs
  } catch (error) {
    console.error(error);
  }
}
