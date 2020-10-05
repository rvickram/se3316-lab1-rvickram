'use strict';
var pokemonList = []

pokemonList.push({number:"1", name:"bulbasaur", type:"Grass / Poison", attack:"118", defense:"118", stamina:"90"});
pokemonList.push({number:"2", name:"ivysaur", type:"Grass / Poison", attack:"151", defense:"151", stamina:"120"});
pokemonList.push({number:"3", name:"venusaur", type:"Grass / Poison", attack:"198", defense:"198", stamina:"160"});
pokemonList.push({number:"4", name:"charmander", type:"Fire", attack:"116", defense:"96", stamina:"78"});
pokemonList.push({number:"5", name:"charmeleon", type:"Fire", attack:"158", defense:"129", stamina:"116"});
pokemonList.push({number:"6", name:"charizard", type:"Fire / Flying", attack:"223", defense:"176", stamina:"156"});
pokemonList.push({number:"7", name:"squirtle", type:"Water", attack:"94", defense:"122", stamina:"88"});
pokemonList.push({number:"8", name:"wartortle", type:"Water", attack:"126", defense:"155", stamina:"118"});
pokemonList.push({number:"9", name:"blastoise", type:"Water", attack:"171", defense:"210", stamina:"158"});
pokemonList.push({number:"10", name:"caterpie", type:"Bug", attack:"55", defense:"62", stamina:"90"});
pokemonList.push({number:"11", name:"metapod", type:"Bug", attack:"45", defense:"94", stamina:"100"});
pokemonList.push({number:"12", name:"butterfree", type:"Bug / Flying", attack:"167", defense:"151", stamina:"120"});
pokemonList.push({number:"13", name:"weedle", type:"Bug / Poison", attack:"63", defense:"55", stamina:"80"});
pokemonList.push({number:"14", name:"kakuna", type:"Bug / Poison", attack:"46", defense:"86", stamina:"90"});
pokemonList.push({number:"15", name:"beedrill", type:"Bug / Poison", attack:"169", defense:"150", stamina:"130"});
pokemonList.push({number:"16", name:"pidgey", type:"Normal / Flying", attack:"85", defense:"76", stamina:"80"});
pokemonList.push({number:"17", name:"pidgeotto", type:"Normal / Flying", attack:"117", defense:"108", stamina:"126"});
pokemonList.push({number:"18", name:"pidgeot", type:"Normal / Flying", attack:"166", defense:"157", stamina:"166"});
pokemonList.push({number:"19", name:"rattata", type:"Normal", attack:"103", defense:"70", stamina:"60"});
pokemonList.push({number:"20", name:"raticate", type:"Normal", attack:"161", defense:"144", stamina:"110"});

// this function checks to make sure the number search box only contains numbers
function validateSearchNumber() {
    var elementSearchNumber = document.getElementById("searchnumber");
    var searchNum = elementSearchNumber.value;
    var searchText = document.getElementById("searchtext").value;

    // make sure the text searchbox is empty
    if (searchText.length != 0) {
        alert("You cannot search by text and numbers at the same time!");
        elementSearchNumber.value = "";
    }
    // check whether the input is non-numberic and alert user
    else if (isNaN(searchNum)) {
        alert("You may only enter numberic values here! Use box below to search text.");
        elementSearchNumber.value = "";
    }
    // make sure number entered is valid (between 1 and 20 inclusive)
    else if (parseInt(searchNum) < 1 || parseInt(searchNum) > 20) {
        alert("You may only search for numbers between 1 and 20 (inclusive).");
        elementSearchNumber.value = "";
    }
    // hide the search results (box empty)
    else if (searchNum.length == 0) {
        hideSearchResults()
    }
    else {
        // execute the search (don't allow input while searching)
        elementSearchNumber.disabled = true;
        searchByNumber()
        elementSearchNumber.disabled = false;
        elementSearchNumber.focus();
    }
}

function validateSearchText() {
    var elementSearchText = document.getElementById("searchtext");
    var searchText = elementSearchText.value;
    var searchNum = document.getElementById("searchnumber").value;
    
    // make sure the number searchbox is empty
    if (searchNum.length != 0) {
        alert("You cannot search by text and numbers at the same time!");
        elementSearchText.value = "";
    }
    // check that input is maximum 20 characters long
    else if (searchText.length > 20) {
        alert("Your search may only be 20 characters long!");
    }
    // hide the search results (box empty)
    else if (searchText.length == 0) {
        hideSearchResults()
    }
    else {
        // execute the search (don't allow input while searching)
        elementSearchText.disabled = true;
        searchByText()
        elementSearchText.disabled = false;
        elementSearchText.focus();
    }

    var pat = /^[a-z]+$/;

    // check that input is lowercase only
    if(!pat.test(searchText) && searchText.length != 0) {
        alert("You may only enter lowercase letters!");
        document.getElementById("searchtext").value = "";
    }
}

// this function executes the search by numbers
function searchByNumber() {
    var searchKey = document.getElementById("searchnumber").value;
    var searchResults = [];

    for(var i = 0; i < 20; i++) {
        if (pokemonList[i].number == searchKey) {
            searchResults.unshift(pokemonList[i]);
                // "Name: " + pokemonList[i].name + 
                // "\nNumber: " + pokemonList[i].number +
                // "\nType: " + pokemonList[i].type +
                // "\nAttack: " + pokemonList[i].attack +
                // "\nDefense: " + pokemonList[i].defense +
                // "\nStamina: " + pokemonList[i].stamina);
        }
        else if (pokemonList[i].number.includes(searchKey)) {
            searchResults.push(pokemonList[i]);
                // "Name: " + pokemonList[i].name + 
                // "\nNumber: " + pokemonList[i].number +
                // "\nType: " + pokemonList[i].type +
                // "\nAttack: " + pokemonList[i].attack +
                // "\nDefense: " + pokemonList[i].defense +
                // "\nStamina: " + pokemonList[i].stamina);
        }

        if (searchResults.length == 5) break;
    }

    showSearchResults(searchResults);
}

// this function executes the search by Text
function searchByText() {
    var searchKey = document.getElementById("searchtext").value;
    var searchResults = [];

    for(var i = 0; i < 20; i++) {
        if (pokemonList[i].name == searchKey) {
            searchResults.unshift(pokemonList[i]); // exact match, add to top
        }
        else if (pokemonList[i].name.includes(searchKey)) { // add to end
            searchResults.push(pokemonList[i]);
        }

        if (searchResults.length == 5) break;
    }

    showSearchResults(searchResults);
}

// this function was created to display long search results in a closeable way:
function showMessage(message) {
    document.getElementById("overlay_text").innerText = message;
    document.getElementById("overlay").style.display = "block";
}

function closeMessage() {
    document.getElementById("overlay").style.display = "none";
}

// this function hides the search results
function hideSearchResults() {
    console.log("remove search box");
    var divSearchResults = document.querySelector("#searchresults");

    document.getElementById("searchboxes").removeChild(divSearchResults);
}

// this function shows the search results
function showSearchResults(list) {
    // try to clear any previous results
    try {
        hideSearchResults();
    } catch(err) {
        
    }

    // build the new search results div
    var divSearchResults = document.createElement("div");
    divSearchResults.id = "searchresults";
    var searchResultsTitle = document.createElement("h2");
    searchResultsTitle.innerText = "Search results:";
    searchResultsTitle.style.color = "red";
    divSearchResults.appendChild(searchResultsTitle); // add a title to the search results
    var elementList = document.createElement("ul"); // create a new list element
    divSearchResults.appendChild(elementList); // add the list element to the div

    // iterate through the list, and attach list items to the list
    list.forEach(pokemon => addListItem(elementList, pokemon));

    // finally, attach the new div below the textboxes
    document.getElementById("searchboxes").appendChild(divSearchResults);
}

function addListItem(parentList, pokemon) {
    var newListItem = document.createElement("li");
    newListItem.className = "results";

    // add the image
    var imageElement = document.createElement("img");
    imageElement.src = "images/" + pokemon.number + ".png";
    imageElement.alt = pokemon.name;

    // add the text information
    var description = document.createElement("p");
    description.className = "results";
    description.innerText = "Name: " + pokemon.name + "\n" +
                            "Type: " + pokemon.type + "\n" +
                            "Attack: " + pokemon.attack + "\n" +
                            "Defense: " + pokemon.defense + "\n" +
                            "Stamina: " + pokemon.stamina;

    newListItem.appendChild(imageElement);
    newListItem.appendChild(description);

    parentList.appendChild(newListItem);
}