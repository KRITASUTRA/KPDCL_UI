const dashboard = document.querySelector("#dashboard");
const consumerCode = document.querySelector("#consumer-code");
const nameChangeRequest = document.querySelector("#name-change-request");
const ownerChangeRequest = document.querySelector("#owner-change-request");
const trackRequest = document.querySelector("#track-request");

const dashboardContent = document.querySelector("#dashboard-content");
const consumerCodeContent = document.querySelector("#consumer-code-content");
console.log (consumerCodeContent)
dashboard.addEventListener("click",()=>{
    dashboardContent.style.display = "block";
    consumerCodeContent.style.display = "none";
});

consumerCode.addEventListener("click",()=>{
    consumerCodeContent.style.display = "block";
    dashboardContent.style.display = "none";
});