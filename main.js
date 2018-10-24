

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

                  var correctAnswer1 = res.results[0].correct_answer;
                  var correctAnswer2 = res.results[1].correct_answer;
                  console.log(correctAnswer1,"\n",correctAnswer2);
                 var info = document.createElement('div');
                 info.classList.add('info');
                 info.id = index;
                 content.appendChild(info);
                 var infoContent = ` 
                 <div class="container">
                  <p> ${result.question} </p>
                  <p> ${result.correct_answer} </p>
                  <button input type ="button" class="btnAll" id="btnTrue">True</button>
                  <button input type ="button" class="btnAll" id="btnFalse">False</button>
                  </div> 
                  `;
                

                  // kopplar ihop knapparna och lagrar input
                 var btnTrue = document.getElementById('btnTrue');
                 var btnFalse = document.getElementById('btnFalse');
                 btnTrue = 'True';
                 btnFalse = 'False';
                 
              content.addEventListener('click', function(event){
                  if (event.target.nodeName == 'BUTTON') {
                      
                      if (btnTrue == correctAnswer1){
                          event.target.classList.add('trueC');
                        
                      }
                      else if (btnFalse == correctAnswer1){
                          event.target.classList.add('falseC');
                         
                      }
                     
                  }
       
              });
                

                    // ersätter html med de vi hämtade oven
// skriver ut svaren -    <p class="correctA"> ${result.correct_answer} </p>
                document.getElementById(info.id).innerHTML = infoContent; 
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


