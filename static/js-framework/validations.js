//add validation functions for input fields and forms 

function userLoggedInValidation( ) {
    let siteInitializatinoHeaders = new Headers();
    siteInitializatinoHeaders.append('content-type', 'application/json');
    let appInit = {
        method: 'GET',
        credentials: 'same-origin',
        headers: siteInitializatinoHeaders,
    }
    let loginURL = `/user/logged-in-status`; 
    fetch(loginURL, appInit).then(function(response){
        return response.json();  
    })
    .then((response)=> {
        if(response.message === 'logged in') {
            globalObj.loggedIn = true;
            loggedIn();
        }
        else {
            globalObj.loggedIn = false;
        }
    })
    .catch((error)=> {
        console.error(error);
    })
}