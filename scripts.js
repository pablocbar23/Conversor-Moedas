
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratoday = 7.2

    


    if (currencySelect.value === "dolar") {
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolartoday)
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / eurotoday)
    }

    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libratoday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    
    if(currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if(currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libra 1.png"
    }
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)    

convertButton.addEventListener("click", convertValues)


