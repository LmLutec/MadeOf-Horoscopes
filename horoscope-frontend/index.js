const BASE_URL = "http://localhost:3000"
const HOROSCOPES_URL = `${BASE_URL}/horoscopes`



fetch(HOROSCOPES_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        //console.log(json)
        json.data.forEach(element => {
            s = document.getElementsByClassName('sign')
           
            for (const ele of s){
                console.log(ele)
                let sec = document.createElement("section")

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
                
                
            }
        
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
        
      })




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

 