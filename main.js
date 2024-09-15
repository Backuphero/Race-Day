let raceNumber = Math.floor(Math.random() * 1000);

let early = true;

let age = 27;

if (early && age > 18) {
    raceNumber += 1000;
}

else if(!early && age > 18) {
    raceNumber += 1000;
}

if (early && age > 18) {
    console.log (`Your race number is ${raceNumber} and start time is 9:30 am.`)
}

else if(!early && age > 18) {
    console.log (`Late adults run at 11:00 am, your race number is ${raceNumber}`)
}

else if (age < 18) {
    console.log (`Race starts at 12:30 pm your race number is ${raceNumber}`);
}

