// Code your solution in this file!


function distanceFromHqInBlocks(distance) {
  (distance - 42) > 0 ? blocks = (distance - 42) : blocks = ((distance - 42) * -1)
  return blocks
}


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, end) {
  (end - start) > 0 ? distance = (end - start) * 264 : distance = (start - end) * 264
  return distance
}

function calculatesFarePrice(start, end) {
    distance = distanceTravelledInFeet(start, end);

    if (distance <= 400) {
      return 0;
    }
    else if (distance > 400 && distance <= 2000) {
      return ((distance - 400) * 0.02);
    }
    else if (distance > 2000 && distance <= 2500) {
      return 25;
    }
    else {
      return 'cannot travel that far';
    }
}
