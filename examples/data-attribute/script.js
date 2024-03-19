document.querySelector("div").addEventListener("click", function(event) {
    var div = event.target;

    alert(div.dataset.number);
});