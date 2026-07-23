const ideas = [
"AI Resume Builder",
"AI Meal Planner",
"AI Study Assistant",
"AI Invoice Generator",
"AI Fitness Coach",
"AI Social Media Caption Generator",
"AI Budget Planner",
"AI Homework Helper",
"AI Travel Planner",
"AI Business Name Generator"
];

function generateIdea(){
const random = Math.floor(Math.random()*ideas.length);
document.getElementById("result").innerHTML =
"<h2>"+ideas[random]+"</h2><p>This idea has strong demand and can be turned into a profitable app.</p>";
}