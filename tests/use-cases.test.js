export function generateTestCases() {
  const cases = [];

  // ---------------- DURATION ----------------

  const nums = [0, 0.1, 0.5, 1, 1.5, 2, 3, 5, 7, 10, 15, 20, 25, 30, 45, 50, 100];
  const units = [
    "second", "seconds", "sec", "secs",
    "minute", "minutes", "min", "mins",
    "hour", "hours", "hr", "hrs",
    "day", "days", "d",
    "week", "weeks", "w",
    "month", "months", "mo",
    "year", "years", "y"
  ];

  nums.forEach(n => {
    units.forEach(u => {
      cases.push(`${n} ${u}`);
      cases.push(`${n}${u[0]}`);
      cases.push(`${n} ${u} and ${n} ${u}`);
      cases.push(`${n} ${u}, ${n} ${u}`);
    });
  });

  // Mixed durations
  for (let i = 1; i <= 200; i++) {
    cases.push(`${i} hours ${i} minutes`);
    cases.push(`${i}h ${i}m`);
    cases.push(`${i} days ${i} hours`);
    cases.push(`${i} weeks ${i} days`);
  }

  // ---------------- RELATIVE ----------------

  const relatives = [
    "today",
    "tomorrow",
    "yesterday",
    "this week",
    "next week",
    "last week",
    "this month",
    "next month",
    "last month",
    "this year",
    "next year",
    "last year",
    "now"
  ];

  relatives.forEach(r => cases.push(r));

  for (let i = 1; i <= 300; i++) {
    cases.push(`in ${i} seconds`);
    cases.push(`in ${i} minutes`);
    cases.push(`in ${i} hours`);
    cases.push(`in ${i} days`);
    cases.push(`in ${i} weeks`);
    cases.push(`${i} hours ago`);
    cases.push(`${i} days ago`);
  }

  const weekdays = [
    "monday","tuesday","wednesday",
    "thursday","friday","saturday","sunday",
    "mon", "tue", "wed", "thu", "fri", "sat", "sun"
  ];

  weekdays.forEach(d => {
    cases.push(`next ${d}`);
    cases.push(`this ${d}`);
    cases.push(`last ${d}`);
    cases.push(`next ${d} at 5pm`);
    cases.push(`this ${d} at 10:30am`);
    cases.push(`${d} 5pm`);
  });

  // ---------------- ABSOLUTE ----------------

  for (let y = 2000; y <= 2050; y += 2) {
    for (let m = 1; m <= 12; m++) {
      for (let d = 1; d <= 10; d++) {
        cases.push(`${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`);
        cases.push(`${d}/${m}/${y}`);
        cases.push(`${m}-${d}-${y}`);
      }
    }
  }

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  months.forEach(m => {
    for (let d = 1; d <= 20; d++) {
      cases.push(`${m} ${d} 2026`);
      cases.push(`${d} ${m} 2026`);
      cases.push(`${m} ${d}`);
    }
  });

  // Time variations
  for (let h = 0; h < 24; h++) {
    cases.push(`${h}:00`);
    cases.push(`${h}:30`);
    if (h > 0 && h <= 12) {
      cases.push(`${h}am`);
      cases.push(`${h}pm`);
    }
  }

  // ---------------- INVALID ----------------

  const invalids = [
    "",
    " ",
    "abc",
    "1e3h",
    "31/02/2026",
    "2026-02-31",
    "15/13/2026",
    "foo bar",
    "-5 hours",
    "1..5h",
    "@@@",
    "2026/13/45",
    "yesterday tomorrow",
    "infinity hours"
  ];

  invalids.forEach(i => cases.push(i));

  return cases;
}

