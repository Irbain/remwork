// app/_server/PostJobs.ts
export const PostJobs = async (jobs) => {
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
  } catch (err) {
    console.error("Error posting jobs:", err);
    return { error: err.message };
  }
};
