var pokemonList = []

pokemonList.push({number:"1", name:"Bulbasaur", attack:"118", defense:"118", stamina:"90"});
pokemonList.push({number:"2", name:"Ivysaur", attack:"151", defense:"151", stamina:"120"});
pokemonList.push({number:"3", name:"Venusaur", attack:"198", defense:"198", stamina:"160"});
pokemonList.push({number:"4", name:"Charmander", attack:"116", defense:"96", stamina:"78"});
pokemonList.push({number:"5", name:"Charmeleon", attack:"158", defense:"129", stamina:"116"});
pokemonList.push({number:"6", name:"Charizard", attack:"223", defense:"176", stamina:"156"});
pokemonList.push({number:"7", name:"Squirtle", attack:"94", defense:"122", stamina:"88"});
pokemonList.push({number:"8", name:"Wartortle", attack:"126", defense:"155", stamina:"118"});
pokemonList.push({number:"9", name:"Blastoise", attack:"171", defense:"210", stamina:"158"});
pokemonList.push({number:"10", name:"Caterpie", attack:"55", defense:"62", stamina:"90"});
pokemonList.push({number:"11", name:"Metapod", attack:"45", defense:"94", stamina:"100"});
pokemonList.push({number:"12", name:"Butterfree", attack:"167", defense:"151", stamina:"120"});
pokemonList.push({number:"13", name:"Weedle", attack:"63", defense:"55", stamina:"80"});
pokemonList.push({number:"14", name:"Kakuna", attack:"46", defense:"86", stamina:"90"});
pokemonList.push({number:"15", name:"Beedrill", attack:"169", defense:"150", stamina:"130"});
pokemonList.push({number:"16", name:"Pidgey", attack:"85", defense:"76", stamina:"80"});
pokemonList.push({number:"17", name:"Pidgeotto", attack:"117", defense:"108", stamina:"126"});
pokemonList.push({number:"18", name:"Pidgeot", attack:"166", defense:"157", stamina:"166"});
pokemonList.push({number:"19", name:"Rattata", attack:"103", defense:"70", stamina:"60"});
pokemonList.push({number:"20", name:"Raticate", attack:"161", defense:"144", stamina:"110"});

// this function checks to make sure the number search box only contains numbers
function validateSearchNumber() {
    text = document.getElementById("searchnumber").value;

    // check whether the input is non-numberic and alert user
    if (isNaN(text)) {
        alert("You may only enter numberic values here! Use box below to search text.");
        document.getElementById("searchnumber").value = "";
    }
    // make sure number entered is valid (between 1 and 20 inclusive)
    else if (parseInt(text) < 1 || parseInt(text) > 20) {
        alert("You may only search for numbers between 1 and 20 (inclusive).");
        document.getElementById("searchnumber").value = "";
    }
}

function checkSearchText() {
    text = document.getElementById("searchtext").value;

    if (text.length >= 20) {
        alert("Your search may only be 20 characters long!");
    }
}

// this function executes the search by numbers
function searchByNumber() {
    alert("Search for pokemon!");
    for(i = 0; i < 20; i++) {

    }
}

// this function executes the search by Text
function searchByText() {
    alert("Search for pokemon!");
    for(i = 0; i < 20; i++) {

    }
}