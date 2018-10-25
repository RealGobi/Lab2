

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
                    <button id="true">True</button>
                    <button id="false">False</button>
                  </div>
                `; 


               // var input = document.getElementsById('true'|| "false" );
          
              //  var answer = input;
               // console.log(answer);




               document.addEventListener('DOMContentLoaded', function(){
                var sektion = document.getElementsByClassName("designToQuestion");
                sektion[0].addEventListener('click', function(e){
                    if (e.target.nodeName == "BUTTON") {
                        e.target.classList.add("done");
                      }
                    });
              
                  });

                document.getElementById("content").innerHTML = questionContent; 
            

              console.log(res.results[answersToQuestion].correct_answer);
             }

             question();



             function answers(){


                if (answer == res.results[answersToQuestion].correct_answer){
                    activQuestion++;
                    points++;
                  // alert ('Answer was correct!');
                }
                else {
                    activQuestion++;
                  // alert ('Answer was crap!');

                }
               // document.getElementById('answer').innerHTML = res.results[answersToQuestion].correct_answer;
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


