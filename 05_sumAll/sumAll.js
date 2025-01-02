
const sumAll = function(num1,num2) {
    if (num1 > num2 && (num1 >0)&&(num2>0)&&(Math.floor(num1)===num1&&Math.floor(num2) === num2 )){
        total = 0 ;
        for (let i = num2;i<=num1;i++){
            total = total + i
        };
        return total
    }
    else if (num1 < num2 && (num1 >0 && num2>0)&&(Math.floor(num1)===num1&&Math.floor(num2) === num2 )){
        total = 0;
        for(let i =num1;i<=num2;i++){
            total = total +i
        }
        return total;
    }
    else{
        return "ERROR"
    }

};


// one more approach as this takes preety much amount of time so we should try to make it in one loop

if (min > max){
    let temp = min;
    min = max;
    max = temp;

}



function sumTotal(min,max){
    sum = 0;
    for(let i = min;i<=max;i++){
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
