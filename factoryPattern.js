// Creating different objects from same object is factory method

function Developer (name) {
    this.name = name
    this.type = "developer"
}

function Tester (name) {
    this.name = name
    this.type = "tester"
}

function EmployeeFactory () {
    this.create = (name, type) => {
        switch (type) {
            case 1: 
                return new Developer(name)
                break
            case 2:
                return new Tester(name)
                break
        }
    }
}

var ef = new EmployeeFactory()
const emps = []

emps.push(ef.create("John", 1))
emps.push(ef.create("Patrick", 2))

console.log(emps)
