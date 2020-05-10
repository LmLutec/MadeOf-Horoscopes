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

             let para = document.getElementById(`${imgSrc.alt}`)

            //  let newDiv = document.createElement('div')
            //  newDiv.id = `${imgSrc.alt}-info`
            //  newDiv.className = "info"


            // para.appendChild(newDiv)

             let list = document.createElement('details')
             let summary = document.createElement('summary')
             summary.innerText = signData.name
             list.appendChild(summary)

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

             let dailies = signData.dailies


             dailies.forEach(daily => {
              
                let divider = document.createElement('div')

                divider.innerHTML = `${daily.date} - ${daily.text}`
                divider.id = daily.id
                divider.className = "daily"
                let lowerCaseName = signData.name.toLowerCase()
                let sec = document.getElementById(`${lowerCaseName}`)

                
                para.appendChild(divider)
          
            })
         }
     }
    
   
      })
    }


  
// <details>
//   <summary>Copyright 1999-2018.</summary>
//   <p> - by Refsnes Data. All Rights Reserved.</p>
//   <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
// </details>

    






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
  