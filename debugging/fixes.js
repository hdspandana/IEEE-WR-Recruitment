// ════════════════════════════════════════════════════════
// TASK 3 — DEBUGGING CHALLENGE  |  IEEE RITB Recruitment
// ════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────
// PART A — JavaScript (Fixed)
// ────────────────────────────────────────────────────────
//
// BUGS FOUND:
//
// Bug 1 — count is a plain `let` variable, not React state.
//   In a React component, mutating a plain variable does NOT
//   trigger a re-render; the UI stays stale.
//   FIX: Use useState() so React knows to re-render.
//
// Bug 2 — `var i` inside the for-loop is function-scoped,
//   not block-scoped.  By the time each setTimeout fires
//   (after 1 s), the loop has already finished and `i === 3`
//   for ALL three callbacks.  Output: "Iteration: 3" × 3.
//   FIX: Replace `var` with `let` so each iteration gets
//   its own block-scoped binding.
// ────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

function Counter() {
  // Fix 1: use state instead of a plain variable
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);          // triggers re-render correctly
    console.log("Count is now: " + (count + 1));
  };

  useEffect(() => {
    // Fix 2: `let` gives each iteration its own `i` binding
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log("Iteration: " + i);   // now logs 0, 1, 2 correctly
      }, 1000);
    }
  }, []);

  return (
    <div>
      <p id="display">{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;


// ────────────────────────────────────────────────────────
// PART B — Express.js API (Fixed)
// ────────────────────────────────────────────────────────
//
// BUGS FOUND:
//
// Bug 1 — fetchUserFromDB is async but is NOT awaited.
//   `userData` will be a Promise object, never the actual
//   user data.  The !userData check always passes (a Promise
//   is truthy), so the 404 branch is never hit, and
//   `userData.id` / `userData.name` are undefined.
//   FIX: Add `await` before the call, and mark the handler `async`.
//
// Bug 2 — Typo: `userDate` should be `userData`.
//   This causes a ReferenceError at runtime.
//   FIX: Correct the variable name to `userData`.
//
// Bug 3 — After sending the 404 response, execution continues
//   and `res.json(...)` is called a second time on the same
//   request, causing a "Cannot set headers after they are sent"
//   error.
//   FIX: Add `return` after res.status(404).send(...).
// ────────────────────────────────────────────────────────

const express = require("express");
const app = express();

// Fix 1: mark the route handler as async
app.get("/user/:id", async (req, res) => {
  try {
    // Fix 1 (cont.): await the async function
    const userData = await fetchUserFromDB(req.params.id);

    if (!userData) {
      // Fix 3: return so we stop execution after sending 404
      return res.status(404).send("User not found");
    }

    res.json({
      status: "success",
      // Fix 2: corrected typo `userDate` → `userData`
      data: userData,
    });
  } catch (error) {
    res.status(500).send("Server Error: " + error.message);
  }
});

async function fetchUserFromDB(id) {
  return { id, name: "IEEE Member" };
}

app.listen(3001, () => console.log("Debug server on port 3001"));