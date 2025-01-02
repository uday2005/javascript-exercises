const repeatString = function(string,number) {
    if (number < 0){
        return 'ERROR'
    }
    else if (number ===0){
        return "";
    }
    text = string;
    for (let i = 0;i<(number-1)*string.length;i++){
        char  =text[i];
        text += char;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
