
function showWelcome() {
    alert("Welcome to Smart Krishi! 🌱 Let's grow smarter.");
}

function recommendCrop() {
    let soil = document.getElementById("soil").value;
    let result = document.getElementById("cropResult");

    if (soil === "black") {
        result.innerHTML = "🌾 Suggested crops: Cotton, Soybean, Turmeric";
    } 
    else if (soil === "red") {
        result.innerHTML = "🌱 Suggested crops: Groundnut, Millets, Pulses";
    } 
    else if (soil === "sandy") {
        result.innerHTML = "🌾 Suggested crops: Millets, Watermelon, Groundnut";
    } 
    else {
        result.innerHTML = "⚠️ Please select your soil type first!";
    }
}
