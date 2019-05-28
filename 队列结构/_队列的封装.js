function Queue() {

  this._items = []

  Queue.prototype.enqueue = function (element) {
    this._items.push(element)
  }

  Queue.prototype.dequeue = function () {
    return this._items.shift()
  }

  // 查看前端的元素
  Queue.prototype.front = function () {
    return this._items[0]
  }

  Queue.prototype.isEmpty = function () {
    return this._items.length === 0
  }

  Queue.prototype.size = function () {
    return this._items.length
  }

  Queue.prototype.toString = function () {
    var resultString = ''
     for (var i = 0; i < this._items.length; i++) {
       resultString += this._items[i] + ' '
     }
     return resultString
  }
}