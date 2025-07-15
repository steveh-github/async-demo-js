# Advanced Async Patterns in JavaScript

This project demonstrates advanced async/await patterns using native JavaScript Promises. Ideal for showcasing modern JavaScript concurrency on GitHub.

## 🧩 Features

- ✅ Sequential async logic
- ⚡ Parallel execution with `Promise.all`
- 🛑 Error handling with `try/catch`
- 💪 Resilient multi-promise handling with `Promise.allSettled`

## 🗂 File Overview

| File | Description |
|------|-------------|
| `asyncSequential.js` | Runs async tasks one after another (awaits each before proceeding) |
| `asyncParallel.js` | Executes async tasks in parallel using `Promise.all` |
| `errorHandling.js` | Demonstrates error handling in async functions |
| `promiseAllSettled.js` | Runs tasks and handles both resolved and rejected cases without breaking |

## 🚀 Run Instructions

```bash
# Clone and navigate
git clone https://github.com/yourusername/advanced-async-js.git
cd advanced-async-js

# Run any file using Node.js
node src/asyncSequential.js
node src/asyncParallel.js
node src/errorHandling.js
node src/promiseAllSettled.js
