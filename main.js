

document.addEventListener('DOMContentLoaded', function (){
    var content = document.getElementById("content");

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
                 

             function question(){
              
                var questionContent = ` 
                  <div class="designToQuestion">
                    <h4> ${res.results[activQuestion].question} </h4>
                    <button id="True">True</button>
                    <button id="False">False</button>
                  </div>
                `; 
                console.log(res.results[activQuestion].correct_answer);
            
             document.getElementById("content").innerHTML = questionContent; 
            
             }


             var correctAnswer = res.results[activQuestion].correct_answer;

             var btnTrue = document.getElementById('True');
                var btnFalse = document.getElementById('False');
                btnTrue = 'True';
                btnFalse = 'False';
                
            

             content.addEventListener('click', function(event){
                 if (event.target.nodeName == 'BUTTON') {
                    if (activQuestion == 9){
                        
                        activQuestion++;
                      alert('Push OK to se your score!');
                      getResult();
                           setTimeout(function(){
                           window.location.reload(1);
                        }, 10000);  
                }
                     if (correctAnswer == btnFalse || btnTrue){
                         event.target.classList.add('True');
                         points++;
                         activQuestion++;
                         console.log(points);
                         question();
                     } else if (correctAnswer != btnFalse || btnTrue)
                     { activQuestion++;
                        console.log(points);
                        question();
                    } 

                    
                 }
      
             });
    
            
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


