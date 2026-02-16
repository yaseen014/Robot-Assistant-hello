const apiKey = process.env.WEATHER_API_KEY;
if (!apiKey) {
console.error(&quot;CRITICAL ERROR: No API Key found!&quot;);
process.exit(1);
}
console.log(&quot;App is running securely.&quot;);
