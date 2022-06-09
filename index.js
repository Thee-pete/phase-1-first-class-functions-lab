// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers){
    return [... drivers.slice(0,2)];
}
const returnLastTwoDrivers = function(drivers){
    return [... drivers.slice(-2, drivers.length)];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(num){
   return function(fare ){
       return fare * num;
   }
}
const fareDoubler = function(fare ){
    return fare * 2;
}
const fareTripler = function(fare ){
    return fare * 3;
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}

