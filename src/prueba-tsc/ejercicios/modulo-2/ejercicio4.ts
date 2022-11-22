/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

   let randomNumbers: Array<number> = [];
   let nextNumber:number;
   for (let i = 0;i<10;i++){
       nextNumber = Math.floor(Math.random()*(100-1))+1;
       randomNumbers.push(nextNumber);
   }
   
   console.log(randomNumbers);