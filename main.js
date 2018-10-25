

document.addEventListener('DOMContentLoaded', function (){
    var content = document.getElementById("content");
    var res;
    var activQuestion = 0;
    var answersToQuestion = 0;
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
                    <!-- <input type="button" value="True"> -->
                    <!-- <input type="button" value="False"> -->
                    <button id="True">True</button>
                    <button id="False">False</button>
                  </div>
                `; 
                console.log(res.results[answersToQuestion].correct_answer);
            
             document.getElementById("content").innerHTML = questionContent; 
            
             }


             var correctAnswer = res.results[answersToQuestion].correct_answer;

             var btnTrue = document.getElementById('True');
                var btnFalse = document.getElementById('False');
                btnTrue = 'True';
                btnFalse = 'False';
                
              

             content.addEventListener('click', function(event){
                 if (event.target.nodeName == 'BUTTON') {
                     
                     if (btnTrue == correctAnswer){
                         event.target.classList.add('True');
                         points++;
                         activQuestion++;
                         console.log(points);
                         question();
                     }
                      if (btnFalse == correctAnswer){
                         event.target.classList.add('False');
                         activQuestion++;
                         points++;
                         console.log(points);
                         question();
                     }
                    else {
                        activQuestion++;
                        console.log(points);
                        question();
                    }
                 }
      
             });

             question();



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


