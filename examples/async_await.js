function doThing() {
    return new Promise.resolve(5);
}

function thing2() {
    doThing().then((result) => {
        console.log(result);
    });h
}

async function thing2() {
    const result = await doThing();
    console.log(result);
}