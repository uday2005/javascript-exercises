const leapYears = function(years) {
    return ((years % 400 == 0) || ((years % 4 == 0) && !(years % 100 == 0)))

};

// Do not edit below this line
module.exports = leapYears;
