obj1 = {
   question: "Who has the most centuries in international cricket?",
   options: ["Sachin Tendulkar", "virat Kohli", "Ricky Ponting", "Jacque Kallis"],
   answer: "Sachin Tendulkar"
}

obj2 = {
   question: "Who won the first ICC Cricket World Cup?",
   options: ["West Indies", "Australia", "India", "England"],
   answer: "West Indies"
}

obj3 = {
   question: "Who is the highest wicket-taker in Test cricket?",
   options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
   answer: "Muttiah Muralitharan"
}

obj4 = {
   question: "Which cricketer is known as 'The Wall'?",
   options: ["Rahul Dravid", "Sachin Tendulkar", "Brian Lara", "Jacques Kallis"],
   answer: "Rahul Dravid"
}

obj5 = {
   question: "Who has the highest individual score in a Test innings?",
   options: ["Brian Lara", "Matthew Hayden", "Virender Sehwag", "Don Bradman"],
   answer: "Brian Lara"
}

obj6 = {
   question: "Which country has won the most ICC T20 World Cups?",
   options: ["India", "West Indies", "Australia", "Pakistan"],
   answer: "West Indies"
}

obj7 = {
   question: "Who is the fastest bowler in cricket history?",
   options: ["Shoaib Akhtar", "Brett Lee", "Jeff Thomson", "Mitchell Starc"],
   answer: "Shoaib Akhtar"
}

obj8 = {
   question: "Who has the most runs in a single ODI innings?",
   options: ["Rohit Sharma", "Martin Guptill", "Chris Gayle", "Virender Sehwag"],
   answer: "Rohit Sharma"
}

obj9 = {
   question: "Which cricketer has the most sixes in international cricket?",
   options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "Brendon McCullum"],
   answer: "Chris Gayle"
}

obj10 = {
   question: "Who has the best bowling figures in an ODI match?",
   options: ["Chaminda Vaas", "Glenn McGrath", "Muttiah Muralitharan", "Anil Kumble"],
   answer: "Chaminda Vaas"
}

obj11 = {
   question: "Which team has won the most ICC Champions Trophy titles?",
   options: ["India", "Australia", "South Africa", "Sri Lanka"],
   answer: "India"
}

obj12 = {
   question: "Who is the only cricketer to score 100 international centuries?",
   options: ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Kumar Sangakkara"],
   answer: "Sachin Tendulkar"
}

obj13 = {
   question: "Who has the most wickets in a single World Cup tournament?",
   options: ["Mitchell Starc", "Glenn McGrath", "Muttiah Muralitharan", "Shane Warne"],
   answer: "Glenn McGrath"
}

obj14 = {
   question: "Which cricketer has the highest batting average in Test cricket?",
   options: ["Don Bradman", "Steve Smith", "Kane Williamson", "Joe Root"],
   answer: "Don Bradman"
}

obj15 = {
   question: "Who is the youngest cricketer to score a century in international cricket?",
   options: ["Shahid Afridi", "Sachin Tendulkar", "Mohammad Ashraful", "Usman Ghani"],
   answer: "Shahid Afridi"
}

obj16 = {
   question: "Which country hosted the first ever Day/Night Test match?",
   options: ["Australia", "England", "India", "South Africa"],
   answer: "Australia"
}

obj17 = {
   question: "Who has the most catches in Test cricket as a fielder?",
   options: ["Rahul Dravid", "Ricky Ponting", "Jacques Kallis", "Mahela Jayawardene"],
   answer: "Rahul Dravid"
}

obj18 = {
   question: "Which cricketer has the most double centuries in Test cricket?",
   options: ["Don Bradman", "Kumar Sangakkara", "Brian Lara", "Virat Kohli"],
   answer: "Don Bradman"
}

obj19 = {
   question: "Who is the first cricketer to score a double century in ODI cricket?",
   options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
   answer: "Sachin Tendulkar"
}

obj20 = {
   question: "Which team has won the most ICC Cricket World Cups?",
   options: ["Australia", "India", "West Indies", "England"],
   answer: "Australia"
}


const quizQuestions = [
   obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10,
   obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20
];

function randomQuestion(){
   // use set for unique object  o(n)
   // const data = new Set();
   // while(data.size != 5){
   //    const index = Math.floor(Math.random() * 20);
   //    data.add(quizQuestions[index]);
   // }

   // // convert set into array
   // return [...data];


   // optimize the above code
   // sort function :- it doees not behave like normal sort function, it compares two values in the form of string
   // randomly sort krenge isko hamlog
   // quizQuestions.sort(()=> Math.random() - 0.5); // nlogn 
   // return quizQuestions.slice(0,5);
   // its tc is worst than the set 



   // fisher algorithm o(n)
   // rohit bhaiya algorithm :- most optimized o(n) in worst case
   const arr = [];
   let length = quizQuestions.length;
   for(let i=0;i<5;i++)
   {
      const index = Math.floor(Math.random() * length);
      arr.push(quizQuestions[index]);
      // swap
      [quizQuestions[index], quizQuestions[length-1]] = [quizQuestions[length-1], quizQuestions[index]];
      length--;
   }
   return arr;
}



const form = document.querySelector('form');
const problem = randomQuestion();
const originalAns = {}; // key,value pair of question and answer

// inserting all the elements into it
problem.forEach((obj, index)=>{ // obj is the object of the array
   const div_element = document.createElement('div');
   div_element.setAttribute('class', 'question');

   // cretead the original answer of selected question
   originalAns[`q${index+1}`] = obj.answer; // obj[key] = value
   
   
   const para = document.createElement('p');
   para.textContent =`${index+1}. ${obj.question}`;
   div_element.appendChild(para);

   // create 4 options
   obj.options.forEach((data)=>{ // data is the value of the options
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = "radio";
      input.name = `q${index + 1}`;
      input.value = data;
      label.appendChild(input);
      label.appendChild(document.createTextNode(data));
      div_element.appendChild(label);
      div_element.appendChild(document.createElement('br'));
   })
   form.appendChild(div_element);
})


const button = document.createElement('button');
button.type = 'submit';
button.setAttribute('class', 'submit-btn');
button.textContent = "Submit";
form.appendChild(button);


// check the submitted form

form.addEventListener('submit', (event)=> {
   event.preventDefault();
   const data = new FormData(form); // it will return the key value pair of all the selected options

   let result = 0;
   for(let key of data.keys()){  // data.keys() will return the key of the selected options
      if(data.get(key) === originalAns[key]){ // data.get(key) will return the value of the selected options
         result++;
      }
   }

   const output = document.createElement('div');
   output.setAttribute('class', 'result');
   output.textContent = `${result} out of 5 is Correct`;
   form.appendChild(output);
})

// const resButton = document.createElement('button');
// resButton.type = 'button';
// resButton.setAttribute('class', 'res-btn');
// resButton.textContent = "Reset";
// form.appendChild(resButton);

// form.addEventListener('click', (event)=>{
//    if(event.target.classList.contains('res-btn')){
//       form.reset();
//       form.removeChild(document.querySelector('.result'));
//    }
// })




