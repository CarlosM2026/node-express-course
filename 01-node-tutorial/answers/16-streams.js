const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

let counter = 0; 

const stream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: 200 })

stream.on('data', (result) => {
    counter += 1; 
    console.log(`This is ${counter} : ${result}`)
})
stream.on('error', (err) => console.log(err))

stream.on('end', () => {
    console.log(`The total amount: ${counter}`);
});