const BASE_URL = "http://localhost:3000"
const HOROSCOPES_URL = `${BASE_URL}/horoscopes`



fetch(HOROSCOPES_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        
         json.forEach(signData => {

           let horoscope = signData.attributes

            s = document.getElementsByClassName('sign')
           
            for (const imgSrc of s){
                
                if (horoscope.name.toLowerCase() == imgSrc.alt){  
                    
                    let para = document.getElementById(`${imgSrc.alt}`)

                    let header = document.createElement('h4')
                    header.innerHTML = horoscope.name
                        
                    para.appendChild(header)

                    let list = document.createElement('ul')

                    para.appendChild(list)

                    let dates = document.createElement('h4')
                    dates.innerHTML = `${horoscope.start_date} - ${horoscope.end_date}`

                    let symbol = document.createElement('li')
                    symbol.innerText =  `Symbol: ${horoscope.symbol}`

                    let house = document.createElement('li')
                    house.innerText = `House: ${horoscope.house}`

                    let planet = document.createElement('li')
                    planet.innerText = `Ruling planet: ${horoscope.planet}`

                    let element = document.createElement('li')
                    element.innerText = `Element: ${horoscope.element}`

                    let quality = document.createElement('li')
                    quality.innerText = `Quality: ${horoscope.quality}`

                    let polarity = document.createElement('li')
                    polarity.innerText = `Polarity: ${horoscope.polarity}`

                    list.appendChild(dates)
                    list.appendChild(symbol)
                    list.appendChild(house)
                    list.appendChild(planet)
                    list.appendChild(element)
                    list.appendChild(quality)
                    list.appendChild(polarity)

                    console.log(signData.relationships)
                    
                }
            }




           
         









                    //let p = document.getElementsByClassName('description')
            
                    // for (const i of p){
                    //     console.log(i.innerHTML = signData.attributes.name)
                    // }
                //}
            })
              //if (element.attributes.name.toLowerCase() == ele.alt){
            
             // }
           
  
            
                //  console.log(a)
                
              //  }
                // if (element.attributes.name.toLowerCase() == ele.alt){
                //     p = document.createElement('p')
                //     ele.appendChild(p)
                //     p.innerText = `${element.attributes.name} , ${element.attributes.house}`
                // } **WORKING CODE
               
                // let splitSigns = ele.alt.split("")
                // let changeCase = splitSigns[0].toUpperCase()
                // splitSigns.shift()
                // splitSigns.unshift(changeCase)
                // let rejoinSigns = splitSigns.join(" ")
                
                
           // }


       
         
        
            // if (element.attributes.name == element.alt.toUpperCase()){
            //     console.log('true')
            // }
            // else {
            //     console.log('false')
            // }
            // let sign = document.createElement("LI") 
            // sign.innerHTML = element.name    
            // document.body.appendChild(sign)
        });
        
      //})




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

 