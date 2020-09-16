var pokemonList = []

function load() {
    pokemonList.push({number:"1", name:"bulbasaur", attack:"118", defense:"118", stamina:"90"});
    pokemonList.push({number:"2", name:"ivysaur", attack:"151", defense:"151", stamina:"120"});
    pokemonList.push({number:"3", name:"venusaur", attack:"198", defense:"198", stamina:"160"});
    pokemonList.push({number:"4", name:"charmander", attack:"116", defense:"96", stamina:"78"});
    pokemonList.push({number:"5", name:"charmeleon", attack:"158", defense:"129", stamina:"116"});
    pokemonList.push({number:"6", name:"charizard", attack:"223", defense:"176", stamina:"156"});
    pokemonList.push({number:"7", name:"squirtle", attack:"94", defense:"122", stamina:"88"});
    pokemonList.push({number:"8", name:"wartortle", attack:"126", defense:"155", stamina:"118"});
    pokemonList.push({number:"9", name:"blastoise", attack:"171", defense:"210", stamina:"158"});
    pokemonList.push({number:"10", name:"caterpie", attack:"55", defense:"62", stamina:"90"});
    pokemonList.push({number:"11", name:"metapod", attack:"45", defense:"94", stamina:"100"});
    pokemonList.push({number:"12", name:"butterfree", attack:"167", defense:"151", stamina:"120"});
    pokemonList.push({number:"13", name:"weedle", attack:"63", defense:"55", stamina:"80"});
    pokemonList.push({number:"14", name:"kakuna", attack:"46", defense:"86", stamina:"90"});
    pokemonList.push({number:"15", name:"beedrill", attack:"169", defense:"150", stamina:"130"});
    pokemonList.push({number:"16", name:"pidgey", attack:"85", defense:"76", stamina:"80"});
    pokemonList.push({number:"17", name:"pidgeotto", attack:"117", defense:"108", stamina:"126"});
    pokemonList.push({number:"18", name:"pidgeot", attack:"166", defense:"157", stamina:"166"});
    pokemonList.push({number:"19", name:"rattata", attack:"103", defense:"70", stamina:"60"});
    pokemonList.push({number:"20", name:"raticate", attack:"161", defense:"144", stamina:"110"});
}

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

function validateSearchText() {
    text = document.getElementById("searchtext").value;
    
    // check that input is maximum 20 characters long
    if (text.length > 20) {
        alert("Your search may only be 20 characters long!");
    }

    var pat = /^[a-z]+$/;

    // check that input is lowercase only
    if(!pat.test(text)) {
        alert("You may only enter lowercase letters!");
        document.getElementById("searchtext").value = "";
    }
}

// this function executes the search by numbers
function searchByNumber() {
    var searchKey = document.getElementById("searchnumber").value;
    var searchResults = [];

    for(i = 0; i < 20; i++) {
        if (pokemonList[i].number == searchKey) {
            searchResults.unshift(
                "Name: " + pokemonList[i].name + 
                "\nAttack: " + pokemonList[i].attack +
                "\nDefense: " + pokemonList[i].defense +
                "\nStamina: " + pokemonList[i].stamina);
        }
        else if (pokemonList[i].number.includes(searchKey)) {
            searchResults.push(
                "Name: " + pokemonList[i].name + 
                "\nAttack: " + pokemonList[i].attack +
                "\nDefense: " + pokemonList[i].defense +
                "\nStamina: " + pokemonList[i].stamina);
        }

        if (searchResults.length == 5) break;
    }

    var message = "Showing first 5 results (Click anywhere to close):";
    for(i = 0; i < searchResults.length; i++) {
        message += "\n\n" + searchResults[i];
    }
    showMessage(message);
}

// this function executes the search by Text
function searchByText() {
    alert("Search for pokemon!");
    for(i = 0; i < 20; i++) {
        
    }
}

// this function was created to display long search results in a closeable way:
function showMessage(message) {
    document.getElementById("overlay_text").innerText = message;
    document.getElementById("overlay").style.display = "block";
}

function closeMessage() {
    document.getElementById("overlay").style.display = "none";
}