const { spawnSync } = require("child_process");

function runApp(envVars) {
  return spawnSync("node", ["app.js"], {
    env: { ...process.env, ...envVars },
    encoding: "utf-8"
  });
}

function testMissingApiKey() {
  const result = runApp({ WEATHER_API_KEY: "" });

  if (result.status === 0) {
    console.error("Test failed: App should exit when API key is missing.");
    process.exit(1);
  }

  console.log("✔ testMissingApiKey passed");
}

function testValidApiKey() {
  const result = runApp({ WEATHER_API_KEY: "1234567890VALID" });

  if (result.status !== 0) {
    console.error("Test failed: App should run with valid API key.");
    process.exit(1);
  }

  console.log("✔ testValidApiKey passed");
}

testMissingApiKey();
testValidApiKey();

console.log("All tests passed.");
