const { createHash } = require("crypto");

// Create a string hash

function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

// Compare two hashed passwords

let password = "hi-mom!";
const hash1 = hash(password);
hash1;

/// ... some time later

const password2 = "hi-mom";
const hash2 = hash(password2);
const match = hash1 === hash2;
match;
