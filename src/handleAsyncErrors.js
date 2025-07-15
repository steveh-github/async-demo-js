const TASK_DELAY_MS = 1000;
const SUCCESS_MESSAGE = "✅ Task succeeded.";
const FAILURE_MESSAGE = "❌ Task failed!";

const unstableTask = (shouldFail) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) reject(new Error(FAILURE_MESSAGE));
      else resolve(SUCCESS_MESSAGE);
    }, TASK_DELAY_MS)
  );

async function runWithErrorHandling(shouldFail = false) {
  console.log("Running task with potential failure...");

  try {
    const result = await unstableTask(shouldFail);
    console.log(result);
  } catch (error) {
    console.error("Caught error:", error.message || error);
  } finally {
    console.log("Finished execution (with or without error).");
  }
}

// Change to true or false to test different outcomes
runWithErrorHandling(false);
