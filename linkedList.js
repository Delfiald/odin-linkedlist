class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  append(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
    }else {   
      let current = this.head;
      while(current.nextNode){
        current = current.nextNode
      }
      current.nextNode = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode
    }else {
      newNode.nextNode = this.head
      this.head = newNode
    }
    this.size++
  }

  getSize() {
    return this.size
  }

  getHead() {
    return this.head
  }

  tail() {
    let current = this.head
    while(current.nextNode) {
      current = current.nextNode
    }

    return current;
  }

  at(index) {
    let i = 0
    let current = this.head;

    while(current) {
      if(i === index) {
        return current;
      }
      current = current.nextNode;
      i++;
    }

    return null;
  }

  pop() {
    if(!this.head) {
      return null
    }

    if(!this.head.nextNode) {
      const value = this.head.value;
      this.head = null;

      this.size--;
      return value;
    }

    let current = this.head
    while(current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode
    }

    let value = current.nextNode.value
    current.nextNode = null

    this.size--;
    return value
  }

  contains(value) {
    let current = this.head
    while(current) {
      if(current.value === value) {
        return true
      }
      current = current.nextNode
    }

    return false
  }

  find(value) {
    let current = this.head
    let i = 0;
    while(current) {
      if(current.value === value) {
        return i
      }
      current = current.nextNode
      i++;
    }

    return null
  }

  toString() {
    let current = this.head;
    let result = []
    while(current) {
      result.push(`( ${current.value} )`);
      current = current.nextNode;
    }

    result.push(`( null )`)

    return result.join(' -> ')
  }

  insertAt(value, index) {
    if(index >= this.size){
      return false;
    }
    
    const newNode = new Node(value)
    if(!this.head) {
      this.head = newNode;
      this.size++
      return true;
    }
    
    if(index === 0){
      newNode.nextNode = this.head;
      this.head = newNode;
      this.size++;
      return true;
    }

    let i = 0;
    let current = this.head;
    while (current) {
      if(index - 1 === i){
        console.log(current)
        newNode.nextNode = current.nextNode
        current.nextNode = newNode
        this.size++
        return true;
      }
      current = current.nextNode
      i++;
    }
  }

  removeAt(index) {
    if(index >= this.size){
      return null;
    }

    if(!this.head) {
      return null
    }

    if(index === 0) {
      const value = this.head.value;
      this.head = this.head.nextNode
      this.size--;
      return value;
    }

    let current = this.head
    let i = 0;

    while(current && current.nextNode) {
      if(i === index - 1) {
        const value = current.nextNode.value;
        current.nextNode = current.nextNode.nextNode
        this.size--;
        return value;
      }
      current = current.nextNode
      i++;
    }

    return null;
  }
}

const list = new LinkedList();
list.append("dog")
list.append("cat")
list.append("parrot")
list.append("hamster")
list.append("snake")
list.append("turtle")

console.log(list.toString());