export const DeleteJobById = async (
  id: number | string | undefined
): Promise<{ success?: boolean; error?: string }> => {
  try {
    const response = await fetch(`/api/job/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to delete job");
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Error deleting job:", err);

    if (err instanceof Error) {
      return { error: err.message };
    }

    return { error: "An unknown error occurred while deleting the job." };
  }
};
