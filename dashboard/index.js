const dashboard = document.querySelector("#dashboard");
const consumerCode = document.querySelector("#consumer-code");
const nameChangeRequest = document.querySelector("#name-change-request");
const ownerChangeRequest = document.querySelector("#ownership-change-request");
const trackRequest = document.querySelector("#track-request");

const dashboardContent = document.querySelector("#dashboard-content");
const consumerCodeContent = document.querySelector("#consumer-code-content");
const nameChangeRequestContent = document.querySelector("#name-change-request-content");
const ownerChangeRequestContent = document.querySelector("#ownership-change-request-content")   
const raiseTicketContent = document.querySelector("#raise-ticket-content");

dashboard.addEventListener("click",()=>{
    dashboardContent.style.display = "block";
    consumerCodeContent.style.display = "none";
    nameChangeRequestContent.style.display = "none";
    ownerChangeRequestContent.style.display = "none";
    raiseTicketContent.style.display = "none";
});

consumerCode.addEventListener("click",()=>{
    consumerCodeContent.style.display = "block";
    dashboardContent.style.display = "none";
    nameChangeRequestContent.style.display = "none";
    ownerChangeRequestContent.style.display = "none";
    raiseTicketContent.style.display = "none";

});

nameChangeRequest.addEventListener("click",()=>{
    nameChangeRequestContent.style.display = "block";
    consumerCodeContent.style.display = "none";
    dashboardContent.style.display = "none";
    ownerChangeRequestContent.style.display = "none";
    raiseTicketContent.style.display = "none";

})

ownerChangeRequest.addEventListener("click",()=>{
    ownerChangeRequestContent.style.display = "block";
    nameChangeRequestContent.style.display = "none";
    consumerCodeContent.style.display = "none";
    dashboardContent.style.display = "none";
    raiseTicketContent.style.display = "none";

});

trackRequest.addEventListener("click",()=>{
    ownerChangeRequestContent.style.display = "none";
    nameChangeRequestContent.style.display = "none";
    consumerCodeContent.style.display = "none";
    dashboardContent.style.display = "none";
    raiseTicketContent.style.display = "block";
});