/* eslint-disable no-param-reassign */
function node(value) {
  return { value, nextNode: null };
}

function linkedList() {
  const head = node(null);
  const tail = node(null);

  function append(value) {
    function traverse(currNode, val) {
      if (currNode.nextNode === null) {
        const newNode = node(val);
        // eslint-disable-next-line no-param-reassign
        currNode.nextNode = newNode;
        tail.value = currNode.nextNode.value;
        return;
      }
      traverse(currNode.nextNode, value);
    }

    if (head.value === null) {
      head.value = value;
    } else {
      traverse(head, value);
    }
  }

  function prepend(value) {
    if (head === null) {
      head.value = value;
    } else {
      const temp = node(head.value);
      temp.nextNode = head.nextNode;
      head.value = value;
      head.nextNode = temp;
    }
  }

  function getSize() {
    let curr = head;
    let pointer = head;
    let count = 0;
    while (pointer) {
      count += 1;
      pointer = curr.nextNode;
      curr = curr.nextNode;
    }
    return count;
  }

  function at(index) {
    let count = 0;
    let pointer = head;
    while (count !== index) {
      if (pointer.nextNode === null) return 'Does not exist';
      pointer = pointer.nextNode;
      count += 1;
    }

    return pointer;
  }

  function pop() {
    if (head === null && tail === null) return;

    function traverseTillSecondtoTheLast(nodes) {
      if (nodes.nextNode.nextNode === null) {
        const temp = nodes;
        nodes.nextNode = null;
        tail.value = temp.value;
        return;
      }

      traverseTillSecondtoTheLast(nodes.nextNode);
    }

    traverseTillSecondtoTheLast(head);
  }

  function contains(value) {
    let pointer = head;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }

  function find(value) {
    let pointer = head;
    let count = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        return count;
      }
      count += 1;
      pointer = pointer.nextNode;
    }
    return null;
  }

  function toArray() {
    const arr = [];
    let pointer = head;
    while (pointer !== null) {
      arr.push(pointer.value);
      pointer = pointer.nextNode;
    }
    return arr;
  }

  function toString() {
    return toArray().join(' -> ');
  }

  function insertAt(index, value) {
    if (index === 0){
      prepend(value)
      return
    } 
    
    if(index === toArray().length){
      append(value)
      return
    };

    if (index > toArray().length){
      return
    }

    const newNode = node(value);
    const prevNode = at(index - 1)
    newNode.nextNode = prevNode.nextNode
    prevNode.nextNode = newNode
  }

  function deleteAt(index){
    if(index === toArray().length - 1){
      pop()
      return
    }
    
    if (index === 0){
      let temp = head.nextNode
      head.value = temp.value
      head.nextNode = temp.nextNode
      temp = null
      return
    }

    if (index >= toArray().length) return

    const prevNode = at(index-1) 
    let temp = prevNode.nextNode
    prevNode.nextNode = temp.nextNode
    temp = null
  }

  return {
    head,
    tail,
    getSize,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    deleteAt,
  };
}

const linkList = linkedList();

linkList.append('13');
linkList.append(16);
linkList.prepend(7);
linkList.prepend(4);
linkList.append(19);
linkList.pop();
linkList.append('asd');
linkList.append(23);
console.log(linkList.head);
console.log(linkList.tail);
console.log(linkList.getSize());
console.log(linkList.at(4));
console.log(linkList.contains('as'));
console.log(linkList.find('13'));
linkList.insertAt(6,32)
linkList.insertAt(0,21)
linkList.deleteAt(0)
linkList.deleteAt(0)
console.log(linkList.head)
console.log(linkList.tail)
console.log(linkList.toString());
