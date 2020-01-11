function LinkedList() {

  this.head = null
  this.length = 0

  // 定义一个节点类
  function Node(data) {
    this.data = data
    this.next = null
  }

  // 向尾部插入一个节点
  LinkedList.prototype.append = function (data) {
    var newNode = new Node(data)

    if (this.length === 0) {
      this.head = newNode
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.length += 1
  }

  LinkedList.prototype.toString = function () {
    var current = this.head
    var listString = ''

    while (current) {
      listString += current.data + '=>'
      current = current.next
    }

    return listString + 'null'
  }
}