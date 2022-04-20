// pattern in which family of closely related algorithm are isolated

function India () {
    this.calculate = package => {
        return 1.00
    }
}

function England () {
    this.calculate = package => {
        return 2.00
    }
}

function Shipping () {
    this.company = ""
    this.setStrategy = company => {
        this.company = company
    }

    this.calculate = package => {
        return this.company.calculate(package)
    }
}

const india = new India()
const england = new England()
const shipping = new Shipping()

const package = { from: 'Delhi', to: 'London', price: 2.00 }

shipping.setStrategy(india)
console.log('Strategy' + india.calculate(package))

shipping.setStrategy(england)
console.log("Strategy" + england.calculate(package));
