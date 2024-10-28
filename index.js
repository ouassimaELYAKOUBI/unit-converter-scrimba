/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btnEl = document.getElementById("convert-btn")
const lengthP = document.getElementById("p-length")
const volumeP = document.getElementById("p-volume")
const massP = document.getElementById("p-mass")

btnEl.addEventListener("click", function() {
    
    const inputEl = document.getElementById("input-number").value
    if(inputEl) {
        //length
        let meterConvert = meterToFeet(Number(inputEl))//using Number() we're converting the input to number 
        let feetConvert = feetToMeter(Number(inputEl))
        lengthP.textContent = `${inputEl} meters = ${meterConvert} feet |
                                ${inputEl} feet = ${feetConvert} meters`
        //volume
        let literConvert = literToGallon(Number(inputEl))
        let gallonConvert = gallonToLiter(Number(inputEl))
        volumeP.textContent = `${inputEl} liters = ${literConvert} gallons |
                                ${inputEl} gallons = ${gallonConvert} liters`
        //mass
        let kilogramConvert = kilogramToPound(Number(inputEl))
        let poundConvert = poundToKilogram(Number(inputEl))
        massP.textContent = `${inputEl} kilos = ${kilogramConvert} pounds |
                                ${inputEl} pounds = ${poundConvert} kilos`
    }
    else{
        alert("You need to enter a number !")
    }
})

function meterToFeet(meter) {
    let result = (meter * 3.281).toFixed(3)
    return result
}
function feetToMeter (feet) {
    let result = (feet / 3.281).toFixed(3)
    return result
}
function literToGallon(liter) {
    let result = (liter * 0.264).toFixed(3)
    return result
}
function gallonToLiter(gallon) {
    let result = (gallon / 0.264).toFixed(3)
    return result
}
function kilogramToPound(kilogram) {
    let result = (kilogram * 2.204).toFixed(3)
    return result
}
function poundToKilogram(pound) {
    let result = (pound / 2.204).toFixed(3)
    return result
}