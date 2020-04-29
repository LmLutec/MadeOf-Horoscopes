const BASE_URL = "http://localhost:3000"
const HOROSCOPES_URL = `${BASE_URL}/horoscopes`
const DAILY_HOROSCOPES = "https://astrostyle.com/horoscopes/daily/"



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


fetch(DAILY_HOROSCOPES)
      .then(function(response) {
          return response.json();
      })
      .then(function(data){
          console.log(data)
      })
   
