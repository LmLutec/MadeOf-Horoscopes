const BASE_URL = "http://localhost:3000"
const HOROSCOPES_URL = `${BASE_URL}/horoscopes`




fetch(HOROSCOPES_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        
        json.forEach(element => {
            let sign = document.createElement("LI") 
            sign.innerHTML = element.name    
            document.body.appendChild(sign)
        });
        
      })

      