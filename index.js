var customerName = 'bob';
var bestCustomer = 'maybe bob';
const leastFavoriteCustomer = 'Allison'

function upperCaseCustomerName(){
    return customerName.toUpperCase();
}

function setBestCustomer(){
    var bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    var leastFavoriteCustomer = "Kim"
    return leastFavoriteCustomer;
}

