// allows to iterate over some collections of object

function Iterator (items) {
    this.items = items
    this.index = 0

    this.hasNext = function () {
        return this.index < this.items.length
    }
    this.next = function () {
        return this.items[this.index++]
    }
}
// Iterator.prototype = {
//     hasNext: function () {
//         return this.index < this.items.length
//     },
//     next: function () {
//         return this.items[this.index++]
//     }
// }

const items = [1, 'John', 3.2, 'a', true, false]
const iter = new Iterator(items)

while (iter.hasNext()) {
    console.log(iter.next())
}
