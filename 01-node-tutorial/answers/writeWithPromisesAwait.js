

const { writeFile, readFile } = require("fs").promises;  

const writer = async() => {

    try {
        let res = await writeFile("./temporary/temp.txt", "line 1 \n line2 \n line3");
    }

    catch(err) {
        console.log(err)
    }

}

const reader = async() => {
    try {
        let res = await readFile('./temporary/temp.txt', 'utf8')
        console.log(res)
    }
    catch(err) {
        console.log(err)
    }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();