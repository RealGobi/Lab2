

document.addEventListener('DOMContentLoaded', function (){
    var content = document.getElementById("content");
    var res;

    
var httpRequest = new XMLHttpRequest();   
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
             console.log(httpRequest.response);
             res = httpRequest.response;
                        
                 res.results.forEach(function(result, index ) {
                 var info = document.createElement('div');
                 info.classList.add('info');
                 info.id = index;
                 content.appendChild(info);
                 var infoContent = ` 
                 <div class="container">
                  <p> ${result.question} </p>
                  <p class="remove"> ${result.correct_answer} </p>
                  <p class="falseQ"> ${result.incorrect_answers[0]} </p>
                  <button type ="button" class="btnAll" id="btnTrue">True</button>
                  <button type ="button" class="btnAll" id="btnFalse">False</button>
                  </div> `;
                


                document.getElementById(info.id).innerHTML = infoContent; 
             });

             //

  //  use if needed    // var container = document.getElementsByClassName("conteiner");
 //  use if needed   // var button = document.getElementsByClassName('btnAll');
 var correctAnswer = res.results[1].correct_answer;
            // console.log(correctAnswer);


             content.addEventListener('click', function(event){
               if (event.target.nodeName == 'BUTTON') {

                    event.target.classList.remove('remove');
                   event.target.classList.add('trueAnswer');
                    }
         
                });
             //
        } else  {
                console.log('Något är fel, gör om, gör rätt!');
                }
    }


    
};


/*

*/

    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean');
    httpRequest.responseType = 'json';
    httpRequest.send();

});


