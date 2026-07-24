async function generateIdea() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  if (prompt.trim() === "") {
    result.innerHTML = "Please describe your interests first.";
    return;
  }

  result.innerHTML = "Generating AI business idea...";

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate a unique business idea based on this description: ${prompt}. Include:
1. Business Name
2. Description
3. Target Customers
4. How to make money
5. First 3 steps to start`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (data.candidates) {
      result.innerHTML = data.candidates[0].content.parts[0].text.replace(/\n/g, "<br>");
    } else {
      result.innerHTML = "Error: " + JSON.stringify(data);
    }
  } catch (error) {
    result.innerHTML = "Something went wrong: " + error.message;
  }
}
