function getSearchUrl(searchTerm, format) {
    var url = "https://www.loc.gov/" + format + "/?q=" + searchTerm + "&fo=json";
    return url;
}

function clearSearchForm() {
    document.getElementById("search_box").value = "";
    document.getElementById("format_selector").value = "audio";
}

function doSearch() {
    var url = getSearchUrl(
        document.getElementById("search_box").value,
        document.getElementById("format_selector").value,
    );
    clearSearchForm();

    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                populateItems(data.results);
            });
        } else {
            handleFetchError();
        }
    });
}

document.getElementById("search_form").addEventListener("submit", function(event) {
    event.preventDefault();

    doSearch();
});

function populateItems(data) {
    var container = document.getElementById("search_container");
    container.innerHTML = "";

    for (var i=0;i<data.length;i++) {
        var item = data[i];

        var itemContainer = createItem(item);

        container.appendChild(itemContainer);
    }
}

function createItem(item) {
    var itemContainer = document.createElement("div");
    itemContainer.textContent = item.title;
}

function handleFetchError() {
    searchTickets();
    document.getElementById("search_container").textContent = "Something went wrong. Please back away slowly. Shut down computer. Go to Hawaii.";
}