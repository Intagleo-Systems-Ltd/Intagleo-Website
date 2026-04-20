const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const USERS_FILE = path.join(__dirname, "../data/users.json");

async function initializeUsers() {
  const dataDir = path.dirname(USERS_FILE);

  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Generate passwords for users
  const users = [
    {
      id: uuidv4(),
      email: "admin@intagleo.com",
      name: "Admin User",
      password: "Admin@123456", // Change this!
      role: "admin",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      email: "editor1@intagleo.com",
      name: "Content Editor 1",
      password: "Editor@123456", // Change this!
      role: "content_manager",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      email: "editor2@intagleo.com",
      name: "Content Editor 2",
      password: "Editor@123456", // Change this!
      role: "content_manager",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      email: "editor3@intagleo.com",
      name: "Content Editor 3",
      password: "Editor@123456", // Change this!
      role: "content_manager",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      email: "editor4@intagleo.com",
      name: "Content Editor 4",
      password: "Editor@123456", // Change this!
      role: "content_manager",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      email: "editor5@intagleo.com",
      name: "Content Editor 5",
      password: "Editor@123456", // Change this!
      role: "content_manager",
      createdAt: new Date().toISOString(),
    },
  ];

  // Hash passwords
  const usersWithHashedPasswords = await Promise.all(
    users.map(async (user) => ({
      ...user,
      password: await bcryptjs.hash(user.password, 10),
    }))
  );

  // Write to file
  fs.writeFileSync(USERS_FILE, JSON.stringify(usersWithHashedPasswords, null, 2));

  console.log("✅ Users initialized successfully!");
  console.log("\nUser Accounts Created:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("\n🔐 ADMIN Account:");
  console.log("  Email: admin@intagleo.com");
  console.log("  Password: Admin@123456");
  console.log("\n👥 Content Manager Accounts:");
  for (let i = 1; i <= 5; i++) {
    console.log(`  ${i}. editor${i}@intagleo.com - Editor@123456`);
  }
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("\n⚠️  IMPORTANT:");
  console.log("  1. Change these passwords immediately!");
  console.log("  2. Store them securely");
  console.log("  3. Do not commit this script to Git with real passwords");
  console.log("\nUsers file: " + USERS_FILE);
}

initializeUsers().catch(console.error);
