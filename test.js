import { parseTime } from "./src/index.js";
import { generateTestCases } from "./tests/use-cases.test.js";

const cases = generateTestCases();

console.log("Total cases:", cases.length);

// ---------------- Counters ----------------

let durationCount = 0;
let relativeCount = 0;
let absoluteCount = 0;
let nullCount = 0;
let errorCount = 0;

// ---------------- Performance ----------------

console.time("chronolite-time Parse");

// ---------------- Run Tests ----------------

cases.forEach((input) => {
  try {
    const result = parseTime(input);

    if (!result) {
      nullCount++;
      return;
    }

    if (result.type === "duration") durationCount++;
    else if (result.type === "absolute") absoluteCount++;
    else if (
      result.type === "relative" ||
      result.type === "relative-range"
    )
      relativeCount++;
    else {
      console.error("❌ Unknown result type:", input, result);
      errorCount++;
    }
  } catch (e) {
    console.error("💥 Exception for:", input, e.message);
    errorCount++;
  }
});

console.timeEnd("chronolite-time Parse");

// ---------------- Summary ----------------

console.log("\n===== SUMMARY =====");
console.log("Duration:", durationCount);
console.log("Relative:", relativeCount);
console.log("Absolute:", absoluteCount);
console.log("Null:", nullCount);
console.log("Errors:", errorCount);

// ---------------- Basic Quality Check ----------------

if (errorCount === 0) {
  console.log("\n✅ No runtime errors.");
}

if (nullCount > cases.length * 0.6) {
  console.warn("\n⚠️ High null rate — many formats unsupported.");
}

console.log("\nDone.");
