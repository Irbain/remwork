export const PostJobs = async (jobs: unknown) => {
  try {
    const response = await fetch("/api/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobs),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to post jobs");
    }

    return result;
  } catch (err: unknown) {
    console.error("Error posting jobs:", err);

    // Check if err is an instance of Error before accessing 'message'
    if (err instanceof Error) {
      return { error: err.message };
    }

    // If err is not an instance of Error, return a generic error message
    return { error: "An unknown error occurred." };
  }
};
