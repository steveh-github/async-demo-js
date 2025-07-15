const mockAsyncOperation = (msg, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(`${msg} ✅`), delay));

async function runSequential() {
  console.log("Starting sequential tasks...");

  const result1 = await mockAsyncOperation("Step 1", 1000);
  const result2 = await mockAsyncOperation("Step 2", 1500);
  const result3 = await mockAsyncOperation("Step 3", 500);

  console.log(result1);
  console.log(result2);
  console.log(result3);

  console.log("Sequential execution complete.");
}

runSequential();
