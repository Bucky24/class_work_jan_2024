// from localstorage
var weights = [
    {
        date: '2024-3-4',
        value: 155,
    },
    {
        date: '2024-3-7',
        value: 150,
    },
    {
        date: '2024-3-9',
        value: 135,
    }
];
// from api
var foods = [
    {
        date: '2024-3-4',
        calories: 400,
    },
    {
        date: '2024-3-4',
        calories: 800,
    },
    {
        date: '2024-3-4',
        calories: 400000,
    },
    {
        date: '2024-3-7',
        calories: 10,
    },
    {
        date: '2024-3-11',
        calories: 500,
    }
];

function getAllDataForWhatever(foodsArray, weightsArray) {
    var resultData = {};

    for (var i=0;i<foodsArray.length;i++) {
        const foodItem = foodsArray[i];

        if (!resultData[foodItem.date]) {
            resultData[foodItem.date] = {
                calories: 0,
                weight: 0,
            };
        }

        resultData[foodItem.date].calories += foodItem.calories;
    }

    for (var i=0;i<weightsArray.length;i++) {
        const weightItem = weightsArray[i];

        if (!resultData[weightItem.date]) {
            resultData[weightItem.date] = {
                calories: 0,
                weight: 0,
            };
        }

        resultData[weightItem.date].weight = weightItem.value;
    }

    return resultData;
}

function processAllCrap() {
    // call api

    // call localstorage
    const allMyData = getAllDataForWhatever(foods, weights);

    console.log(allMyData);
}

processAllCrap();