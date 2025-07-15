const mockAsyncOperation = (msg, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(`${msg} ✅`), delay));

async function runParallel() {
  console.log("Starting parallel tasks...");

  const tasks = [
    mockAsyncOperation("Download A", 2000),
    mockAsyncOperation("Download B", 1500),
    mockAsyncOperation("Download C", 1000),
  ];

  const results = await Promise.all(tasks);

  results.forEach((r) => console.log(r));
  console.log("Parallel execution complete.");
}

runParallel();
