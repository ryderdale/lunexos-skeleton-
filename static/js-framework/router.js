
/* Add case(s) to both switch statements below (triggered on Page Load and back/forward actions of browser) 
for every page of the website or app. This will assure the page's state (through state_functions.js) can be triggered when 
a user navigates to a specific URL.
*/


document.addEventListener('DOMContentLoaded', function() {  

    //Add logic to validate the user:

    // userLoggedInValidation(); 


    let path = window.location.pathname;
    switch(path) {
        case '/page-3': 
            return page3State();
        case '/page-2': 
            return page2State();
        case '/page-1':
            return page1State();
        case '/':
            return page1State();  // empty path "/" must be stated last so the switch statement doesn't trigger too early. 
    }
});

window.addEventListener('popstate', function() { 
    let path = window.location.pathname;
    switch(path) {
        case '/page-3': 
            return page3State();
        case '/page-2': 
            return page2State();
        case '/page-1':
            return page1State();
        case '/':
            return page1State();  // empty path "/" must be stated last so the switch statement doesn't trigger too early. 
    }
});
