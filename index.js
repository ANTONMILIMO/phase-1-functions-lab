// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    return Math.abs(start - 42);
}

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    if ((distanceTravelledInFeet(start,destination)) <= 400) {
        return 0;
    } else if ((distanceTravelledInFeet(start,destination)) > 400 && (distanceTravelledInFeet(start,destination)) <= 2000) {
        return ((distanceTravelledInFeet(start,destination)) - 400) * 0.02;
    } else if ((distanceTravelledInFeet(start,destination)) > 2000 && (distanceTravelledInFeet(start,destination)) <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}

console.log(distanceFromHqInBlocks(50));

console.log(distanceFromHqInFeet(50));

console.log(distanceTravelledInFeet(34, 38));

console.log(calculatesFarePrice(47,51));

console.log(calculatesFarePrice(71,79));

console.log(calculatesFarePrice(50,150));
