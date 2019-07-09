function page1State () {
    console.log("page1State triggered")
    //clear any data (containers of html or fields)

    document.getElementById("page-3-container").hidden = true
    document.getElementById("page-2-container").hidden = true
    document.getElementById("page-1-container").hidden = false //always put the element(s) that will be unhinding last


    //add callbacks to update server data or bring in new data:





}


function page2State () {


    document.getElementById("page-1-container").hidden = true
    document.getElementById("page-3-container").hidden = true

    document.getElementById("page-2-container").hidden = false     //always put the element(s) that will be unhinding last


    //add callbacks to update server data or bring in new data:




}
 




function page3State () {
    document.getElementById("page-1-container").hidden = true
    document.getElementById("page-2-container").hidden = false

    document.getElementById("page-3-container").hidden = true     //always put the element(s) that will be unhinding last

    document.getElementById("page-3-container").innerHTML(page3Template)


}