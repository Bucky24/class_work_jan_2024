var url = "https//something.com/api/user?token=sdfdsfdsfds";

const constant = 5;

console.log(constant);

if (true) {

}

while (true) {
    break;
}

class blah {

}

new blah()

for () {

}

function blah () {

}

blah(function () {

})

function MyClass() {}

var ting = new Promise()
var thing2 = new MyClass()

const promise = fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        "Authentication": "Bearer sldfjdslfkdsjfldskfjdslk",
    },
    body: JSON.stringify({
        name: 'robbert',
        username: 'robbert',
        email: 'blah@blah.com',
        age: 34,
    }),
}).then((result) => {
    if (result.ok) {
        return result.json();
    }
    throw new Error("No user data");
}).then((data, data2) => {
    // data is the result
    console.log(data2);

    return fetch(url);
}).then((result2) => {

}).catch((error) => {

});