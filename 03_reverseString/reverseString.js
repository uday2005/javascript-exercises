const reverseString = function(string) {
    let array = string.split("");
    console.log(array);

    let i = string.length- 1;
    let newString = " ";

    while(i>= 0){
        
        newString +=  array[i];
        i = i-1;
    }
    return newString;
};

reverseString("Hello world");
// Do not edit below this line
module.exports = reverseString;
