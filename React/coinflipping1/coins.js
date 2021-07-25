function tossCoin() {
    return Math.random() > .5 ? "heads" : "tails";
}

const fiveHeads = () => {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5 && attempts < 100) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (headsCount >= 5) {
            resolve(`Heads count was ${headsCount} in ${attempts} attempts`);
        } else {
            reject('Attempts reached 100 without getting heads 5 times');
        }
    });
}

fiveHeads()
.then(res=>console.log(res))
.catch(err=>console.log(err))
console.log( "When does this run now?" );