// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => driverFunction(arrayOfDrivers);

if (typeof module !== "undefined") {
    module.exports = {
        returnFirstTwoDrivers,
        returnLastTwoDrivers,
        selectingDrivers,
        createFareMultiplier,
        fareDoubler,
        fareTripler,
        selectDifferentDrivers
    };
}
