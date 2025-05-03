// Yoga Class Timings
const timings = [
    "Morning: 7 AM - 8 AM",

    "Evening: 6:30 PM - 7:30 PM"
];

// Fees
const classFee = "500 per month session";

// Display Timings
document.getElementById("timing-list").innerHTML = timings.map(time => `<li>🕒 ${time}</li>`).join("");

// Display Fees
document.getElementById("fee-amount").innerText = classFee;

// Payment Function
function makePayment() {
    alert("Redirecting to Payment Page...");
    window.location.href = "https://secure-payment.com"; // Replace with actual payment URL
}
