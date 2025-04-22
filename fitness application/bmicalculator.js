document.addEventListener("DOMContentLoaded", function () {
    const bmiForm = document.getElementById("bmiForm");
    const bmiResult = document.getElementById("bmiResult");

    bmiForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input values
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

        if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            bmiResult.innerHTML = `<span style="color: red;">Please enter valid weight and height.</span>`;
            return;
        }

        // Calculate BMI
        const bmi = (weight / (height * height)).toFixed(2);

        // Determine BMI category
        let category = "";
        let color = "";
        
        if (bmi < 18.5) {
            category = "Underweight";
            color = "blue";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
            color = "green";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
            color = "orange";
        } else {
            category = "Obese";
            color = "red";
        }

        // Display BMI result
        bmiResult.innerHTML = `
            <p>Your BMI: <strong>${bmi}</strong></p>
            <p style="color: ${color}; font-weight: bold;">Category: ${category}</p>
        `;
    });
});
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Apply saved Dark Mode preference
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const bmiForm = document.getElementById("bmiForm");
    const bmiResult = document.getElementById("bmiResult");
    const dietContent = document.getElementById("bmiDietContent");
  
    // Apply saved Dark Mode
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
  
    bmiForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value) / 100;
  
      if (!weight || !height || weight <= 0 || height <= 0) {
        bmiResult.innerHTML = `<span style="color:red;">Please enter valid values.</span>`;
        dietContent.innerHTML = "";
        return;
      }
  
      const bmi = (weight / (height * height)).toFixed(2);
      let category, color, dietHTML;
  
      if (bmi < 18.5) {
        category = "Underweight"; color = "blue";
        dietHTML = `
          <p>High-calorie diet for weight gain:</p>
          <ul>
            <li>🍳 Protein-rich meals</li>
            <li>🥔 Starches and carbs</li>
            <li>🍌 Healthy snacks & smoothies</li>
          </ul>`;
      } else if (bmi < 24.9) {
        category = "Normal weight"; color = "green";
        dietHTML = `
          <p>Balanced diet to maintain weight:</p>
          <ul>
            <li>🥗 Fruits & veggies</li>
            <li>🍗 Lean proteins</li>
            <li>💧 Stay hydrated</li>
          </ul>`;
      } else if (bmi < 29.9) {
        category = "Overweight"; color = "orange";
        dietHTML = `
          <p>Low-carb diet to lose weight:</p>
          <ul>
            <li>🥦 More fiber</li>
            <li>🚫 Reduce sugar/refined carbs</li>
            <li>💧 Water before meals</li>
          </ul>`;
      } else {
        category = "Obese"; color = "red";
        dietHTML = `
          <p>Calorie-controlled diet:</p>
          <ul>
            <li>🍵 Green tea & light meals</li>
            <li>🫛 Lean proteins & veggies</li>
            <li>🚶‍♀️ Regular activity</li>
          </ul>`;
      }
  
      bmiResult.innerHTML = `
        <p>Your BMI: <strong>${bmi}</strong></p>
        <p style="color:${color}; font-weight:bold;">Category: ${category}</p>`;
      dietContent.innerHTML = dietHTML;
    });
  });
  
  // Toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
  }
  
