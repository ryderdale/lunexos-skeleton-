/* EventListeners are where the app impliments documents.getElementById.AddEventListners("", ) 
to trigger state_fuctions and modify the browsers URL */

document.getElementById("html'-id").addEventListener("click", (event)=>{
    event.preventDefault()
    page1State();
})

document.getElementById("html'-id").addEventListener("click", (event)=>{
    event.preventDefault()
    page2State();
})