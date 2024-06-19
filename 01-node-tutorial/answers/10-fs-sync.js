const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const lines = ["Hello", "Hello", "Hello"]

lines.forEach(line => {
    writeFileSync(
        './temporary/fileA.txt', line ,
        { flag: 'a' }
    )
})


const read = readFileSync('./temporary/fileA.txt', 'utf8')

console.log(read)