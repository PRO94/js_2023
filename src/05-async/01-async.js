// ========== Async = Event Loop

// const timeout = setTimeout(() => {
//     console.log('after 2 seconds')
// }, 2000);

// clearTimeout(timeout);

// setTimeout(() => {
//     console.log('after 3 seconds')
// }, 3000);

// let count = 0;
// setInterval(() => {
//     console.log('Tick', count++)
// }, 1000)

// function delay(callback, time = 1000) {
//     setTimeout(callback, time);
// }
// delay(() => console.log('timeout'), 1500)


/// Promise
const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve([1, 2, 3]);
            //reject('Error in delay')
        }, time)
    });
    return promise;
};

// delay(2500)
//     .then((data) => {   // Executed only when resulve()
//         console.log('timeout result', data );
//         return data.map((x) => x ** 2);
//     })
//     .then(data => {     // Executed only when resulve()
//         console.log('after modification', data);
//     })
//     .catch(error => {   // Executed only when reject()
//         console.log(error);
//     })
//     .finally(() => console.log('Executed in any way'));

// Example 1
const getData = () => new Promise((resolve) => resolve([1,2,3]))
// getData()
//     .then(array => console.log(array))

// Example 2 - async/await
async function asyncExample() {
    try {
        await delay(3000);
        const data = await getData();
        console.log(data);
    } catch(error) {
        console.log('Error', error)
    } finally {
        console.log('Finally')
    }
}

// asyncExample();