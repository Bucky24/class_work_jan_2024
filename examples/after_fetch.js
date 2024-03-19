var myData;

console.log("1");

fetch("someurl").then((result) => {
    return result.json();
}).then((data) => {
    console.log("2");

    myData = data;

    useData();
});

console.log("3");

useData(); // no

function useData() {
    for (var i=0;i<myData.length;i++) {

    }
}

// 1
// 3
// 2