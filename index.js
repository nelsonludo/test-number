const finalNum = document.querySelector('#final');
const body = document.body;


let num = prompt("Enter a phone number").toString();
if (num.length != 8){
    num = prompt("Please make sure the number entered has 8 digits"); 
}

final(num)


function startsWith(number, x){
    if (number[0] == x){
        return true
    } else{
        return false
    }
}

function secondnumber(number, lowerL, upperL){
    if (number[1] >= lowerL && number[1] <= upperL){
        return true
    } else{
        return false
    }
}
function isMtn(number){
    if (startsWith(number, 7)){
        return true
    } else{
        if (startsWith(number, 5) || startsWith(number, 8)){
            if (secondnumber(number, 1, 4)){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}
function isOrange(number){
    if (startsWith(number, 9)){
        return true
    } else{
        if (startsWith(number, 5)){
            if (secondnumber(number, 5, 9)){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

function isNextel(number){
    if (startsWith(number, 6)){
        return true
    } else{
        if (startsWith(number, 8)){
            if (secondnumber(number, 5, 9)){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}
function isCamtel(number){
    if (startsWith(number, 2)){
        return true
    } else{
            return false
    }
}


function final(number){
    if (isMtn(number)){
        finalNum.innerHTML = `Your phone number is an MTN number and your new number is: 6${number}`
        body.style. background = "linear-gradient( rgb(202, 186, 94),rgb(235, 201, 12),rgb(253, 249, 6))"
    } 
    else if (isOrange(number)){
        finalNum.innerHTML = `Your phone number is an ORANGE number and your new number is: 6${number}`
        body.style. background = "orange"
    } 
    else if (isNextel(number)){
        finalNum.innerHTML = `Your phone number is an NEXTEL number and your new number is: 6${number}`
        body.style. background = "red"

    } 
    else{
        finalNum.innerHTML = `Your phone number is an CAMTEL number and your new number is: 2${number}`
        body.style. background = "blue"

    } 
}


