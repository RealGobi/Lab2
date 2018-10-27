

document.addEventListener('DOMContentLoaded', function (){
    var content = document.getElementById("content");
    // deklarerat variablar
    var res;
    var activQuestion = 0;
    var points = 0;

   
    // XMLHttpRequest och status för den

var httpRequest = new XMLHttpRequest();   
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
             console.log(httpRequest.response);
             res = httpRequest.response;
    // funktionen som skriver ut frågor. Jag testade här att lägga in en "if","else" redan här, för at få den att räkna med sista frågan, men samma resultat 

             function question(){
                if (activQuestion < 10){   
                var questionContent = ` 
                  <div class="designToQuestion">
                    <h4> ${res.results[activQuestion].question} </h4> <!-- skriver ut frågan -->
                    <button id="True">True</button>
                    <button id="False">False</button>
                  </div>
                `; 
                 activQuestion++; // testa att lägga activQ här
                console.log(res.results[activQuestion].correct_answer);
                 } else { // skriver ut resultatet
                    alert ('Ready for you result?');
                    getResult();
                
                 }
             document.getElementById("content").innerHTML = questionContent; 
             }
           


             var correctAnswer = res.results[activQuestion].correct_answer;
      
    // if-sats för frågorna
                content.addEventListener('click', function(event) { 
                    if (event.target.id == "True") { 
                        if (correctAnswer == "True") {
                            points++;
                         
                            question();
                        } else {
                           
                            question();
                        }
                        
                    }
            
                    else if (event.target.id == "False") { 
                        if (correctAnswer == "False") {
                            points++;
                          
                            question();
                        } else {
                      
                            question();
                          }
                       
  
                    }
                 });
                       
             
     // start funktionen
            
             function start(){
                 
                var startQuiz = ` 
                  <div>
                
                    <button id="start">Start Quiz</button>
                  </div>
                `; 
                document.getElementById("start").innerHTML = startQuiz; 
             }
             start();
             var startPlaceholder = document.getElementById("start");
             startPlaceholder.addEventListener('click', function(event){
                if (event.target.nodeName == 'BUTTON') {
              
                    question();
                    event.target.classList.add('hide');
  
                    }});

    // resultat funktionen
                    function getResult() {
                        
                var result = ` 
                              <div>
                             
              <p>You got ${points} of 10, Good jod!</p>
                              </div>
                                      `; 
              document.getElementById("result").innerHTML = result; 
                    }



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


