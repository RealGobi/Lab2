

document.addEventListener('DOMContentLoaded', function (){
    var content = document.getElementById("content");
    var res;

    // XMLHttpRequest och status för den

var httpRequest = new XMLHttpRequest();   
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
             console.log(httpRequest.response);
             res = httpRequest.response;
                 
             
             // här hämtar vi och skriver ut frågorna ut, skapar html div mm

                 res.results.forEach(function(result, index ) {
                 var info = document.createElement('div');
                 info.classList.add('info');
                 info.id = index;
                 content.appendChild(info);
                 var infoContent = ` 
                 <div class="container">
                  <p> ${result.question} </p>
                  <p class="correctA"> ${result.correct_answer} </p>
                  <button type ="button" class="btnAll" id="btnTrue">True</button>
                  <button type ="button" class="btnAll" id="btnFalse">False</button>
                  </div> `;
                
                    // ersätter html med de vi hämtade oven

                document.getElementById(info.id).innerHTML = infoContent; 
             });


                var correctAnswer = res.results[1].correct_answer;
                    console.log(correctAnswer);

                    // kopplar ihop knapparna och lagrar input

                content.addEventListener('click', function(event){
                    if (event.target.nodeName == 'BUTTON') {
                
                        event.target.classList.add('true');
                    }
         
                });
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


