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
