// ========== Date

// Get current date and time in full format. Result type is a string type
// console.log(new Date()) // e.g: Tue Sep 05 2023 10:42:09 GMT+0200 (Central European Summer Time)

// It's a constant time - 01.01.1970 00:00:00
// const startDateSystem = new Date(0)
// console.log(startDateSystem)  // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

// Create some specific date. Parameter in miliseconds
// const day = 1000 * 60 * 60 * 24;    // convert miliseconds to a day format
// const year = day * 365;             // convert miliseconds to a year format
// const someSpecDay = new Date(day)   // +1 day from 01.01.1970 = 02.01.1970
// const someSpecYear = new Date(year) // +1 year from 01.01.1970= 01.01.1971
// console.log(someSpecDay)
// console.log(someSpecYear)

// Get some occurate date
// const date = new Date(2023, 8, 30)      // September 30, 2023. Index for a month starts from 0 (0 = Jan)
// console.log(date)

// Get some occurate date and time
// const dateTime = new Date(2023, 8, 30, 12, 25)  // September 30, 2023. 12:25
// console.log(dateTime)

// Get parts from the date
// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth())     // 0 = January
// console.log(now.getDate())      // current day of month (starts from 1)
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// Set parts for the date
// now.setFullYear(2044);
// console.log(now)            // Mon Sep 05 2044 10:55:42 GMT+0200 (Central European Summer Time)

// Conver the date to some format
// console.log(now.toDateString(''))       // Tue Sep 05 2023
// console.log(now.toTimeString(''))       // 10:57:09 GMT+0200 (Central European Summer Time)
// console.log(now.toLocaleDateString())   // 9/5/2023. It depends on the system settings.
// console.log(now.toLocaleTimeString())   // 10:59:02 AM. It depends on the system settings.
