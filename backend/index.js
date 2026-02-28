const express = require("express");
const app = express();

app.use(express.json());

let members = [
  {
    usn: "1MS21CS001",
    name: "Arjun Sharma",
    email: "arjun@ritb.edu.in",
    phone: "9876543210",
    domain: "Web Development",
    chapter: "Web Resources",
    role: "Lead",
    year: 3,
    joinedOn: "2023-08-01",
    active: true,
  },
  {
    usn: "1MS22EC045",
    name: "Priya Nair",
    email: "priya@ritb.edu.in",
    phone: "9123456789",
    domain: "Embedded Systems",
    chapter: "Sensor Council",
    role: "Member",
    year: 2,
    joinedOn: "2024-01-15",
    active: true,
  },
  {
    usn: "1MS23CS078",
    name: "Rohan Mehta",
    email: "rohan@ritb.edu.in",
    phone: "9845612345",
    domain: "Signal Processing",
    chapter: "SPS",
    role: "Coordinator",
    year: 1,
    joinedOn: "2024-08-01",
    active: true,
  },
];

const VALID_ROLES = ["Chairperson", "Vice Chairperson", "Lead", "Coordinator", "Member", "Volunteer"];
const VALID_CHAPTERS = [
  "APS", "Computer Society", "COMSOC", "PES", "MTTS",
  "SPS", "EMBS", "CIS", "WIE", "Sensor Council",
  "RoboRIT", "Digital Design", "Documentation",
  "PR", "Sponsorship", "Web Resources", "Creativity",
];

function validateMember(body, requireAll = true) {
  const errors = [];
  if (requireAll || body.usn !== undefined) {
    if (!body.usn || body.usn.trim().length !== 10)
      errors.push("USN must be exactly 10 characters.");
  }
  if (requireAll || body.name !== undefined) {
    if (!body.name || body.name.trim().length < 2)
      errors.push("Name must be at least 2 characters.");
  }
  if (requireAll || body.email !== undefined) {
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
      errors.push("Email must be valid.");
  }
  if (body.phone !== undefined) {
    if (!/^\d{10}$/.test(body.phone))
      errors.push("Phone must be exactly 10 digits.");
  }
  if (body.role !== undefined) {
    if (!VALID_ROLES.includes(body.role))
      errors.push(`Role must be one of: ${VALID_ROLES.join(", ")}.`);
  }
  if (body.chapter !== undefined) {
    if (!VALID_CHAPTERS.includes(body.chapter))
      errors.push(`Chapter must be one of: ${VALID_CHAPTERS.join(", ")}.`);
  }
  if (body.year !== undefined) {
    if (body.year < 1 || body.year > 4)
      errors.push("Year must be between 1 and 4.");
  }
  return errors;
}

// GET /members
app.get("/members", (req, res) => {
  let result = members;
  if (req.query.active !== undefined)
    result = result.filter((m) => m.active === (req.query.active === "true"));
  if (req.query.chapter)
    result = result.filter((m) => m.chapter === req.query.chapter);
  if (req.query.role)
    result = result.filter((m) => m.role === req.query.role);
  if (req.query.year)
    result = result.filter((m) => m.year === parseInt(req.query.year));

  res.json({ count: result.length, members: result });
});

// GET /members/:usn
app.get("/members/:usn", (req, res) => {
  const member = members.find(
    (m) => m.usn.toUpperCase() === req.params.usn.toUpperCase()
  );
  if (!member)
    return res.status(404).json({ error: "Member not found." });
  res.json(member);
});

// POST /members
app.post("/members", (req, res) => {
  const errors = validateMember(req.body, true);
  if (errors.length)
    return res.status(400).json({ errors });

  const usn = req.body.usn.trim().toUpperCase();
  if (members.find((m) => m.usn === usn))
    return res.status(409).json({ error: "Member with this USN already exists." });

  const newMember = {
    usn,
    name: req.body.name.trim(),
    email: req.body.email.trim().toLowerCase(),
    phone: req.body.phone || null,
    domain: req.body.domain || "General",
    chapter: req.body.chapter || "Web Resources",
    role: req.body.role || "Member",
    year: req.body.year || 1,
    joinedOn: new Date().toISOString().split("T")[0],
    active: true,
  };

  members.push(newMember);
  res.status(201).json({ message: "Member added successfully.", member: newMember });
});

// PATCH /members/:usn
app.patch("/members/:usn", (req, res) => {
  const idx = members.findIndex(
    (m) => m.usn.toUpperCase() === req.params.usn.toUpperCase()
  );
  if (idx === -1)
    return res.status(404).json({ error: "Member not found." });

  const errors = validateMember(req.body, false);
  if (errors.length)
    return res.status(400).json({ errors });

  const { usn, joinedOn, ...updates } = req.body;
  members[idx] = { ...members[idx], ...updates };
  res.json({ message: "Member updated successfully.", member: members[idx] });
});

// DELETE /members/:usn
app.delete("/members/:usn", (req, res) => {
  const idx = members.findIndex(
    (m) => m.usn.toUpperCase() === req.params.usn.toUpperCase()
  );
  if (idx === -1)
    return res.status(404).json({ error: "Member not found." });

  const [removed] = members.splice(idx, 1);
  res.json({ message: "Member removed successfully.", member: removed });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ IEEE RITB Membership API running at http://localhost:${PORT}`);
});