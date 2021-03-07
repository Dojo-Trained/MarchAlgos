/* _______________________CGroup Advanced Concepts_________________



______________________________ALGO # 1________________________________________________

In this Algo we want to convert a string into an integer. The strings simply represent the numbers in words.

Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
Examples
"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
____________________________________________________________________________________________




______________________________ALGO # 2________________________________________________
DLL pop- Exercise

Implement pop function on the doubly Linked List class
This function should remove a node at the end of the DoublyLinkedList It should return the node removed

class Node{
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;
    }
    push(){
    }
    pop(){

    }
}
_____________________________________________________________________________________________
*/

/*



______________________________ALGO #3________________________________________________
Implement get function on the DoublyLinkedList

This internal/helper function should find a node at a specified index in a DoublyLinkedList
It should return the found node


Examples:
class Node{
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    get(){

_____________________________________________________________________________________________








*/
