/* Stack.js
   JS version assistance from 
   https://www.geeksforgeeks.org/implementation-stack-javascript/
*/

class Stack {

   constructor()
   {
      this.items = [];
   }

   push(item){
      // added to end of array (top of stack)
      this.items.push(item);
   }

   pop(){
      if (this.items.length === 0)
      {
         return "Underflow";
      }
      return this.items.pop();
   }
   
   peek(){
      const len = this.items.length;
      return this.items[len - 1];
   }

   // Helper methods

  isEmpty(){
     return this.items.length === 0;
  }
  
  toString(){
     let str = "";
     for (let i = 0; i < this.items.length; i++){
        str += this.items[i] + " ";
     }
     return str;
  }

} 
