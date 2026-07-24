function generateIdea() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  if (prompt.trim() === "") {
    result.innerHTML = "Please describe your interests first.";
    return;
  }

  result.innerHTML =
    "<b>Business Idea:</b><br><br>" +
    "An AI-powered business based on: <b>" + prompt + "</b>.<br><br>" +
    "This is a placeholder. In the next step we'll connect a real AI model so it generates unique, high-quality business ideas.";
}
