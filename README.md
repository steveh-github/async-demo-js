# Advanced Async Patterns in JavaScript

This project demonstrates async/await patterns using JavaScript Promises.

## 🧩 Features

- Sequential async logic
- Parallel execution with `Promise.all`
- Error handling with `try/catch`
-  multi-promise handling with `Promise.allSettled`

## 🗂 File Overview

| File | Description |
|------|-------------|
| `runTasksSequentially.js` | Runs async tasks one after another (awaits each before proceeding) |
| `runTasksInParallel.js` | Executes async tasks in parallel using `Promise.all` |
| `handleAsynErrors.js` | Demonstrates error handling in async functions |
| `usePromiseAllSettled.js` | Runs tasks and handles both resolved and rejected cases without breaking |

## 🚀 Run Instructions

```bash
# Clone and navigate
git clone https://github.com/yourusername/advanced-async-js.git
cd advanced-async-js

# Run any file using Node.js
node src/runTasksSequentially.js
node src/runTasksInParallel.js
node src/handleAsyncErrors.js
node src/usePromiseAllSettled.js
