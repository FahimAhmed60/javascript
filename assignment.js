// kilometerToMeter
function kilometerToMeter(kilo){
    var meter = kilo/1000;
    return meter;
}
var result = kilometerToMeter(156);
console.log(result);

//Budget Calculator 

function budgetCalculator(price){
    var sum = 0;
    for(var i = 0; i< price.length; i++){
        var element = price[i];
        sum = sum + element;
    }
    return sum;
}
var price = [50, 100, 500];
var result = budgetCalculator(price);
console.log(result);


// hotelCost

function hotelCost(num){

}

// megaFriend

function megaFriend(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

let arr = ["Fahim Ahmed", "Ornob", "Shihab Khan", "Mubin"];

console.log(megaFriend(arr));