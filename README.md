# IEEE-WR-Recruitment 🚀

![IEEE RITB](https://img.shields.io/badge/IEEE-RITB-00629B?style=for-the-badge&logo=ieee&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> Recruitment Assessment Solution for **IEEE Web Resources Chapter — RITB**

---

## 👩‍💻 Author

| Field | Details |
|-------|---------|
| **Name** | H D Spandana |
| **USN** | 1MS24CY022 |
| **Year** | 2nd Year |
| **Applying For** | Web Resources Team |
| **GitHub** | [@hdspandana](https://github.com/hdspandana) |
| **Repository** | [IEEE-WR-Recruitment](https://github.com/hdspandana/IEEE-WR-Recruitment) |

---

## 📁 Folder Structure
```
IEEE-WR-Recruitment/
├── frontend/                   
│   ├── public/
│   │   └── images/             
│   ├── src/
│   │   ├── components/
│   │   │   └── TeamCard.jsx    
│   │   ├── data/
│   │   │   └── teamData.ts     
│   │   ├── pages/
│   │   │   └── TeamSection.jsx 
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/                    
│   ├── index.js
│   └── package.json
├── debugging/                  
│   └── fixes.js
└── README.md
```

---

## ✅ Task 1 — Frontend: IEEE Chapter Team Card

### 🛠️ Tech Stack
- React 18 + Vite
- Tailwind CSS v3

### ✨ Features
- Dark IEEE-themed UI matching `ieee.ritb.in` color palette (`#06111c`, `#00629B`)
- Responsive card grid using **Flexbox** — works on all screen sizes including mobile
- **Hover effect** — scales photo and reveals member description overlay
- **Chapter filter buttons** — filter cards by chapter (APS, WIE, COMSOC, etc.)
- Animated underline accent on hover
- 34 members across all 16 IEEE RITB chapters and teams
- Fallback image if photo fails to load

### 📸 Screenshot

![Team Section](./frontend/public/images/frontend-screenshot.png)

### ▶️ How to Run
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Task 2 — Backend: Membership API

### 🛠️ Tech Stack
- Node.js
- Express.js

### 📋 Member Schema (ADD-ON: Full Attributes)

| Field | Type | Description |
|-------|------|-------------|
| `usn` | string | Unique 10-character university serial number *(required)* |
| `name` | string | Full name *(required)* |
| `email` | string | Contact email *(required)* |
| `phone` | string | 10-digit phone number *(optional)* |
| `domain` | string | Technical domain (e.g. Web Dev, Embedded Systems) |
| `chapter` | string | IEEE sub-chapter (ComSoc, WIE, Sensors, etc.) |
| `role` | string | Hierarchy: Chairperson → Vice Chairperson → Lead → Coordinator → Member → Volunteer |
| `year` | number | Current year of study (1–4) |
| `joinedOn` | string | ISO date of joining (auto-set) |
| `active` | boolean | Whether the member is currently active |

### 🔗 API Endpoints

| Method | Endpoint | Description | Required |
|--------|----------|-------------|---------|
| `GET` | `/members` | Get all members | ✅ |
| `GET` | `/members/:usn` | Get single member by USN | ADD-ON |
| `POST` | `/members` | Add new member with validation | ✅ |
| `PATCH` | `/members/:usn` | Update member details | ADD-ON |
| `DELETE` | `/members/:usn` | Remove member by USN | ✅ |

### 🔍 Query Filters for GET /members
```
GET /members?chapter=WIE
GET /members?role=Lead
GET /members?active=true
GET /members?year=2
```

### ✔️ Validation Rules
- `usn` must be **exactly 10 characters**
- `name` minimum 2 characters
- `email` must be valid format
- `phone` must be 10 digits
- `role` must be one of: `Chairperson`, `Vice Chairperson`, `Lead`, `Coordinator`, `Member`, `Volunteer`
- `year` must be between 1 and 4

### 📸 API Tests (Thunder Client Screenshots)

**GET /members** — Returns all members
![GET Members](./frontend/public/images/get-members.png)

**POST /members** — Adds new member
![POST Members](./frontend/public/images/post-members.png)

**DELETE /members/:usn** — Removes a member
![DELETE Members](./frontend/public/images/delete-members.png)

### ▶️ How to Run
```bash
cd backend
npm install
node index.js
```
API runs at [http://localhost:3000](http://localhost:3000)

---

## ✅ Task 3 — Debugging Challenge

### Part A: JavaScript

**Original Buggy Code:**
```js
function Counter() {
  let count = 0;

  const handleIncrement = () => {
    count = count + 1;
    console.log("Count is now: " + count);
    document.getElementById('display').innerText = count;
  };

  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("Iteration: " + i);
    }, 1000);
  }
}
```

**🐛 Bug 1 — Plain variable instead of React state**
- `let count = 0` is a plain JS variable. Mutating it directly never triggers a React re-render, so the UI stays stale even though `count` changes in memory.
- **Fix:** Use `useState(0)` hook and call `setCount()` to update properly.
```js
// ❌ Wrong
let count = 0;
count = count + 1;

// ✅ Fixed
const [count, setCount] = useState(0);
setCount(prev => prev + 1);
```

**🐛 Bug 2 — `var` in for-loop causes wrong closure**
- `var i` is function-scoped, not block-scoped. By the time all 3 setTimeout callbacks fire after 1 second, the loop has already finished and `i === 3` for all of them.
- Output of buggy code: `"Iteration: 3"` printed 3 times ❌
- Output of fixed code: `"Iteration: 0"`, `"Iteration: 1"`, `"Iteration: 2"` ✅
- **Fix:** Replace `var` with `let`.
```js
// ❌ Wrong
for (var i = 0; i < 3; i++) {

// ✅ Fixed
for (let i = 0; i < 3; i++) {
```

---

### Part B: Express.js API

**Original Buggy Code:**
```js
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  try {
    const userData = fetchUserFromDB(req.params.id);
    if (!userData) {
      res.status(404).send("User not found");
    }
    res.json({
      status: "success",
      data: userDate
    });
  } catch (error) {
    res.status(500).send("Server Error: " + error.message);
  }
});

async function fetchUserFromDB(id) {
  return { id, name: "IEEE Member" };
}
```

**🐛 Bug 1 — Missing `await` on async function**
- `fetchUserFromDB` is async but called without `await`. So `userData` holds a `Promise` object, not the actual data.
- **Fix:** Add `await` and mark the handler as `async`.
```js
// ❌ Wrong
const userData = fetchUserFromDB(req.params.id);

// ✅ Fixed
const userData = await fetchUserFromDB(req.params.id);
```

**🐛 Bug 2 — Typo: `userDate` instead of `userData`**
- `data: userDate` references a variable that doesn't exist → `ReferenceError` crash at runtime.
- **Fix:** Correct spelling to `userData`.
```js
// ❌ Wrong
data: userDate

// ✅ Fixed
data: userData
```

**🐛 Bug 3 — No `return` after 404 response**
- After sending the 404 response, execution continues and hits `res.json(...)`, trying to send a second response.
- This causes: `Error: Cannot set headers after they are sent to the client`
- **Fix:** Add `return` before the 404 response.
```js
// ❌ Wrong
if (!userData) {
  res.status(404).send("User not found");
}

// ✅ Fixed
if (!userData) {
  return res.status(404).send("User not found");
}
```

See full corrected code in [`debugging/fixes.js`](./debugging/fixes.js)

---

## 🧰 Tech Stack Summary

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend UI |
| Vite | Frontend build tool |
| Tailwind CSS v3 | Styling |
| Node.js | Backend runtime |
| Express.js | REST API framework |

---

*Made with ❤️ for IEEE RITB Web Resources Recruitment 2026*