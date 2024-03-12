var baseSelector = ".btn .hour";

for (var i=1;i<=9;i++) {
    var selector = baseSelector + i;
    console.log(selector);
}

baseSelector = ".btn .hour{{i}} div";
for (var i=1;i<=9;i++) {
    var selector = baseSelector.replace("{{i}}", i);
    console.log(selector);
}

for (var i=1;i<=9;i++) {
    var selector = "button .hour" + i + " div";
    console.log(selector);
}