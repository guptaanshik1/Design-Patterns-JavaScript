// One to many dependecy relation is defined from one object (subject) to many other obejcts (observers)

function Subject () {
    this.observers = []

    this.subsrcibe = function (fn) {
        this.observers.push(fn)
    }

    this.unsubscribe = function (fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove)
    }

    this.fire = function () {
        this.observers.forEach(fn => fn())
    }
}

const subject = new Subject()

function Observer1 () {
    console.log('Observer1 has been fired')
}

function Observer2 () {
    console.log('Observer2 has been fired')
}

subject.subsrcibe(Observer1)
subject.subsrcibe(Observer2)

subject.fire()

subject.unsubscribe(Observer2)
console.log("After unsubscribing")
subject.fire()
