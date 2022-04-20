// Allows use of one object (proxy) as a placeholder for another object

function CurrencyApi () {
    this.getValue = function (coin) {
        console.log("Calling Endpoint")

        switch (coin) {
            case 'INR': return "50"
            case 'USD': return "70"
        }
    }
}

// const api = new CurrencyApi()
// console.log(api.getValue('INR'))
// console.log(api.getValue('INR'))
// console.log(api.getValue('INR'))
// console.log(api.getValue('INR'))
// console.log(api.getValue('INR'))

/**** On Every call api end point will be called */

function CurrencyProxy () {
    this.api = new CurrencyApi()
    this.cache = {}

    this.getValue = function (coin) {
        if (this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy = new CurrencyProxy()

console.log(proxy.getValue('INR'))
console.log(proxy.getValue('USD'))
console.log(proxy.getValue('INR'))
console.log(proxy.getValue('USD'))
console.log(proxy.getValue('INR'))
console.log(proxy.getValue('USD'))
console.log(proxy.getValue('INR'))
console.log(proxy.getValue('USD'))
console.log(proxy.getValue('INR'))
console.log(proxy.getValue('USD'))
