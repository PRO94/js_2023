// ========== JSON

const car = {
    model: 'Tesla',
    year: 2023
}

// convert object to json
const json = JSON.stringify(car);
console.log(json);

// convert json to object
const parsed = JSON.parse(json);
console.log(parsed);
