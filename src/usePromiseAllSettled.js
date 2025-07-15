const task = (label, shouldFail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      shouldFail ? reject(`${label} ❌ failed`) : resolve(`${label} ✅ succeeded`);
    }, Math.random() * 2000)
  );

async function runAllSettled() {
  const promises = [
    task("Task 1"),
    task("Task 2", true),
    task("Task 3"),
  ];

  const results = await Promise.allSettled(promises);

  results.forEach((res, i) => {
    if (res.status === "fulfilled") {
      console.log(`Result ${i + 1}:`, res.value);
    } else {
      console.error(`Error ${i + 1}:`, res.reason);
    }
  });
}

runAllSettled();
