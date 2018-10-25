

document.addEventListener('DOMContentLoaded', function (){
    var content = document.getElementById("content");
    var res;
    var activQuestion = 0;
    var answersToQuestion = 0;
    // XMLHttpRequest och status för den

var httpRequest = new XMLHttpRequest();   
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
             console.log(httpRequest.response);
             res = httpRequest.response;
                 
             function question(){
                let newDiv = document.createElement("div"); // skapa en ny div
                newDiv.classList.add("hej")
                var questionContent = ` 
                  <div class="designToQuestion">
                    <h4> ${res.results[activQuestion].question} </h4>
                  </div>
                `; //interpolering 
         document.getElementById("content").innerHTML = questionContent; //letar upp card.id klistrar över med cardContent.
            
             //questionsLength = res.results.length;
     
             // document.getElementById("activQuestion").innerHTML = res.results[activQuestion].question;
             
              console.log(res.results[answersToQuestion].correct_answer);
             }
             question();

             function answers(){
                var answer = userInput;


                if (answer == res.results[answersToQuestion].correct_answer){
                    activQuestion++;
                    answersToQuestion++;
                    alert ('Answer was correct!');
                }
                else {
                    activQuestion++;
                    alert ('Answer was crap!');

                }
                document.getElementById('answer').innerHTML = res.results[answersToQuestion].correct_answer;
             }
             answers();
             // felmedelande från XMLHttpRequest
        } else  {
                console.log('Något är fel, gör om, gör rätt!');
                }
    }
  
};

    // avslutar XMLHttpRequest, med att öppna o skicka den, även omvandla till JSON

    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean');
    httpRequest.responseType = 'json';
    httpRequest.send();

});


