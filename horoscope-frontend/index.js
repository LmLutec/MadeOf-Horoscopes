const BASE_URL = "http://localhost:3000"
const HOROSCOPES_URL = `${BASE_URL}/horoscopes`
const todaysDate = new Date().toJSON().slice(0,10);



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

             let signId = document.getElementById(`${imgSrc.alt}`)


             let list = document.createElement('ul')
             let summary = document.createElement('summary')
             summary.innerText = signData.name
             list.appendChild(summary)

             signId.appendChild(list)

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
//creating house divider
             let houseInfo = document.createElement('div')
             houseInfo.className = "house"
             let hdr = document.createElement('h3')
             hdr.innerText = "What your house says about you"
             houseInfo.appendChild(hdr)
             signId.appendChild(houseInfo)

             list.appendChild(dates)
             list.appendChild(symbol)
             list.appendChild(house)
             list.appendChild(planet)
             list.appendChild(element)
             list.appendChild(quality)
             list.appendChild(polarity)

             let dailies = signData.dailies


             let currentDaily = dailies[dailies.length - 1]
            
              
                let divider = document.createElement('div')

                divider.innerHTML = `${currentDaily.date} - ${currentDaily.text}`
                divider.id = currentDaily.id
                divider.className = "daily"
                let lowerCaseName = signData.name.toLowerCase()
                let sec = document.getElementById(`${lowerCaseName}`)

                
                signId.appendChild(divider)
          
         }
     }
    
   
      })
    }

  s = document.getElementsByClassName('sign')

for (const img of s){
  img.addEventListener('click', function(){
  
    let signId = document.getElementById(`${img.alt}`)

    if (signId.style.display === "" || signId.style.display === "none"){
      signId.style.display = "inline-block"
    }
    else if (signId.style.display === "inline-block"){
      signId.style.display = "none"
    }
  })
} 

  

// function houseInfo(sign){
//   switch(sign.house) {
//     case 1:
//       The first house begins the zodiac, and covers the all “firsts”: 
//       first impressions, the self and appearance, leadership, new initiatives, fresh starts and beginnings.
//        The sign on the cusp, or starting edge, of this house, is referred to as your rising sign or ascendant.
//       break;
//     case 2:
//       // code block
//       break;
//     case 3:
//       // code block
//       break;
//     case 4:
//       break;
//     case 5:
//       break;
//     case 6:
//       break;  
//     case 7:
//       break;
//     case 8:
//       break;
//     case 9:
//       break;
//     case 10:
//       break;
//     case 11:
//       break; 
//     case 12:
//       break;
//   }
// }



    //let signs = document.getElementsByClassName('signs')[0].children
//    let signValues = Object.values(signs)
      //console.log(signValues)

      // for (const element of signs) {
      //   console.log(element)
      // }
//    signValues.forEach(element => {
        
//    });
        //working code





           //if (x.style.display === "none"){
        //}
        // if (x.style.display === "block"){
        //   x.style.display = "none"
        // }
        // else if (x.style.display === "none"){
        //   x.style.display = "block"
        // }
        // else if (x.style.display === "block"){
        //   x.style.display = "none"
        // }
        
    

      // for (const i of u){
      //   i.style.display = "block"
      //   console.log(i)
      // }
      //console.log(i.children)
      //element.style.display = none;
        // let d = document.createElement("dialog")
        // d.open = true
        // let p = document.createElement("p")
        // document.body.appendChild(d)  
        // d.appendChild(p)
        // p.innerText = "true"
  