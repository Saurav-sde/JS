// const originalAns = ["Sachin Tendulkar", "West Indies", "Sachin Tendulkar", "264", "Muttiah Muralitharan"];

const originalAns = {
   q1: "Sachin Tendulkar", 
   q2: "West Indies", 
   q3: "Sachin Tendulkar", 
   q4: "264", 
   q5: "Muttiah Muralitharan"
};
const form = document.querySelector('form');
form.addEventListener('submit', (event)=>{

   event.preventDefault();
   const data = new FormData(form);

   // const answer = Array.from(data.values());
   // console.log(answer);
   
   // let result = 0;
   // for(let i=0;i<answer.length;i++)
   // {
   //    if(answer[i] === originalAns[i])
   //       result++;
   // }

   let result = 0;
   for(let [key,value] of data.entries())
   {
      if(value === originalAns[key])
         result++;
   }

   console.log(result);

   // displaying the result
   const output = document.getElementById('result');
   output.innerText = `${result} out of 5 is Correct`;

})


// hw is make this quiz dynamic
// set of 100 questions, select 5 question randomly