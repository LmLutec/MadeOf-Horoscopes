const BASE_URL = "http://localhost:3000"
const HOROSCOPES_URL = `${BASE_URL}/horoscopes`



fetch(HOROSCOPES_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        
         setUpHoroscopes(json)

         
     });
        
 

function setUpHoroscopes (arr){
  arr.forEach(signData => {

     s = document.getElementsByClassName('sign')
    
     for (const imgSrc of s){
         
         if (signData.name.toLowerCase() == imgSrc.alt){  
             
             let para = document.getElementById(`${imgSrc.alt}`)

             let header = document.createElement('h4')
             header.innerHTML = signData.name
                 
             para.appendChild(header)

             let list = document.createElement('ul')

             para.appendChild(list)

             let dates = document.createElement('h4')
             dates.innerHTML = `${signData.start_date} - ${signData.end_date}`

             let symbol = document.createElement('li')
             symbol.innerText =  `Symbol: ${signData.symbol}`

             let house = document.createElement('li')
             house.innerText = `House: ${signData.house}`

             let planet = document.createElement('li')
             planet.innerText = `Ruling planet: ${signData.planet}`

             let element = document.createElement('li')
             element.innerText = `Element: ${signData.element}`

             let quality = document.createElement('li')
             quality.innerText = `Quality: ${signData.quality}`

             let polarity = document.createElement('li')
             polarity.innerText = `Polarity: ${signData.polarity}`

             list.appendChild(dates)
             list.appendChild(symbol)
             list.appendChild(house)
             list.appendChild(planet)
             list.appendChild(element)
             list.appendChild(quality)
             list.appendChild(polarity)

             //console.log(signData.relationships)
             let daily = signData.dailies

             daily.forEach(day => {
               console.log(day)
               // code needs to check the current date and only display the daily of the day
             })
         }
     }
    })
}


//    let signs = document.getElementsByClassName('signs')[0].children
//    let signValues = Object.values(signs)
      //console.log(signValues)

      
//    signValues.forEach(element => {
        
//    });
        
// s = document.getElementsByClassName('sign')


// for (const element of s) {
//     console.log(element.alt)
//     element.addEventListener("click", function(){
//         let d = document.createElement("dialog")
//         d.open = true
//         let p = document.createElement("p")
//         document.body.appendChild(d)  
//         d.appendChild(p)
//         p.innerText = "true"
//     })
//   }

 