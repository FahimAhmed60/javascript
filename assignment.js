// kilometerToMeter
function kilometerToMeter(distanceInKilometer){
    if( distanceInKilometer>0){
        var distanceInMeter = distanceInKilometer*1000;
        return distanceInMeter;
    }
    else{
        console.log("Sorry invalid input!");
    }
}
var kiloMeter = kilometerToMeter (3);
console.log(kiloMeter);
//end of first
//Budget Calculator 
function budgetCalculator(pieceOfWatch,pieceOfMobile,pieceOfLaptop){
    var priceOfWatch = 50;
    var priceOfMobile = 100;
    var priceOfLaptop = 500;
    var totalNeed = pieceOfWatch*priceOfWatch + pieceOfMobile*priceOfMobile + pieceOfLaptop*priceOfLaptop;
    return totalNeed;
}
var budgetAmount = budgetCalculator (1,5,3);
console.log(budgetAmount);
//end of second
// hotelCost
function hotelCost(perDay){
    first10DaysCost = 100;
    second10DaysCost = 80;
    restOfDayCostings = 50;
        if  (perDay>0 && perDay<=10){
            var totalCost = perDay*first10DaysCost;
        }
        else if(perDay>10 && perDay<=20){
            var daysExtra10 = perDay - 10;
            var totalCost = 10*first10DaysCost + daysExtra10*second10DaysCost;
        }
        else if(perDay>20){
            var daysExtra20 = perDay-20;
            var totalCost = 10*first10DaysCost+10*second10DaysCost + daysExtra20*restOfDayCostings;
        }
        return totalCost;
}
var totalCost = hotelCost(20);
console.log(totalCost);
// end of third
// megaFriend
function megaFriend(arr) {
    var longest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
var arr = ["Fahim Ahmed", "Ornob", "Shihab Khan", "Mubin", "Khalek"];
console.log(megaFriend(arr));
//end of last