const BASE_URL = "http://localhost:3000"
const HOROSCOPES_URL = `${BASE_URL}/horoscopes`



fetch(HOROSCOPES_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        console.log(json)
        // json.forEach(element => {
        //     let sign = document.createElement("LI") 
        //     sign.innerHTML = element.name    
        //     document.body.appendChild(sign)
        // });
        
      })



//    let signs = document.getElementsByClassName('signs')[0].children
//    let signValues = Object.values(signs)
      //console.log(signValues)

      
//    signValues.forEach(element => {
        
//    });
        
s = document.getElementsByClassName('sign')

for (const element of s) {
    element.addEventListener("click", function(){
        alert('true') 
    })
  }

 