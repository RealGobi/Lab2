

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
                 let info = document.createElement('div');
                 info.classList.add('info');
                 info.id = index;
                 content.appendChild(info);
                 var infoContent = ` 
                 <div class="container">
                  <p> ${result.question} </p>
                  <p id="true"> ${result.correct_answer}  </p>
                  <p id="false"> ${result.incorrect_answers[0]} + 'Fel!' </p>
                  <button type ="button" class="btnAll" id="btnTrue">True</button>
                  <button type ="button" class="btnAll" id="btnFalse">False</button>
                </div> `;

             //   var answerTrue = ` ${result.correct_answer}`

                document.getElementById(info.id).innerHTML = infoContent; 
             });

        } else  {
                console.log('Något är fel, gör om, gör rätt!');
                }
    }

};







    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean');
    httpRequest.responseType = 'json';
    httpRequest.send();




});

