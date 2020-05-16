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
//building list
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

             list.appendChild(dates)
             list.appendChild(symbol)
             list.appendChild(house)
             list.appendChild(planet)
             list.appendChild(element)
             list.appendChild(quality)
             list.appendChild(polarity)


//creating house divider
             let houseInfo = document.createElement('div')
             houseInfo.className = "house"
             let hdr = document.createElement('h4')
             hdr.innerText = "The houses are WHERE these energies are most likely to manifest. The houses are the fields of experience, not the experience themselves..."
             let p = document.createElement('p')
             p.innerText = getHouse(signData.house)
         
             houseInfo.appendChild(hdr)
             houseInfo.appendChild(p)
             signId.appendChild(houseInfo)
// creating element divider

            let elementDiv = document.createElement('div')
            let elementHdr = document.createElement('h4')
            elementHdr.innerText = "The element of a zodiac sign reveals the basic temperament of the sign..."
            let elementP = document.createElement('p')
            elementP.innerText = getElement(signData.element)

            signId.appendChild(elementDiv)
            elementDiv.appendChild(elementHdr)
            elementDiv.appendChild(elementP)
            
            
//creating daily
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

  

function getHouse(house){
  
   switch(house) {
    case '1st':
      return "The first House is the House of self. This includes self-awareness, the physical body, personality, appearance, personal views on life, self-identity, self-image, early environment, and beginnings; how we initiate, how we're impulsive. Any planets in this house will greatly influence your personality and how others perceive you."
      break;
    case '2nd':
      return "The second House refers to your own money and possessions, what you value, your hidden talents, sense of self-worth, self-esteem (how you value yourself, instead of describing your personality as in the 1st House). Possessions include anything a person owns (except the house/home which is ruled by the 4th House): cars, furniture, clothing, moveable property, investments and securities, etc. The 2nd house specifies how you gain and spend your own money (as opposed to other's money in the 8th house), your attitude towards wealth and material possessions, and your potential for accumulating it/them."
      break;
    case '3rd':
      return "The third House is that of communication, which by extension includes one's immediate environment: siblings, neighbors, short journeys, and all forms of transportation. The 3rd house also includes the intellect, the lower mind (details and small bits of information as opposed to the higher mind in 9th house), thinking patterns, and early education (before college). Communication includes messages, deliveries, gossip, phone calls, visits, reading and writing."
      break;
    case '4th':
      return "The fourth House refers to the home and everything associated with it (both the childhood home & the current home): family, land, personal foundations (inner emotional security), your roots. Astrologers are divided over whether this house is associated with one's mother or father. What is clear is that a person's upbringing is associated with this House.On a deeper level, the 4th house is the base of consciousness or the center of our concrete existence. See how the cusp of the 4th house is the I.C., the lowest point on the chart, representative of things below the surface of Earth. Due to that, the 4th house was believed to rule the conditions at the end of life, and graves. As the root or base of your real self, the 4th house rules where you go when you 'die' but also where you came from. For those who believe in reincarnation, the 4th house would give clues to your karmic lesson for this lifetime. It shows what karmic baggage you brought with you into this life. Even if you don't believe in reincarnation, you're likely to be surprised by what you find in your 4th house for it may move your soul. Any planets in the 4th house affect your home life, your emotions, your subconscious, and possibly your relationship with your parents."
      break;
    case '5th':
      return "The fifth House refers to children, creativity, and the pursuit of pleasure. This includes personal interests, love affairs, sports, hobbies, speculation, risk-taking, teaching, drama, creative self-expression, love given, gambling. The 5th house is all about you being yourself and enjoying it. Romance, dating, love affairs, and sexual relationships are ruled by this 5th house, yet marriage is assigned to the 7th. Why? Because, until very recently, marriage was not entered into for pleasure, for love, nor for personal fulfillment. Marriage was hardly even entered into by choice, but rather for the purpose of raising kids to preserve the values of a particular culture or religion. And these marriages were most often arranged according to class and financial status, a partnership befitting the 7th house. Nowadays, it's common to marry for love. To avoid confusion, remember: affairs of the heart are in the 5th house, but cooperative partnerships are in the domain of the 7th house."
      break;
    case '6th':
      return "The sixth House refers to daily work, service, diet, health and physical sickness, physical ability to work, employees. This includes volunteer labor, civil service work, caretaking, and mundane daily tasks. The 6th house really involves the quality of your work, the quality of the jobs you perform, as opposed to an actual career (career is represented by the 10th house). Daily mundane tasks include personal hygiene and our method of responding to everyday crises."
      break;  
    case '7th':
      return "The seventh House is sometimes referred to as the House of marriage, but it encompasses all one-to-one relationships: marriage, business partnerships, contracts, cooperative relationships, and also divorce, separation, quarrels, open enemies, and law suits. The difference between the love affairs of the 5th House and love relationships of the 7th is that the 7th House refers to more permanently binding relationships, whereas the 5th House refers to affairs that may be temporary. When the 5th House affair progresses into a serious relationship, we can say that the relationship has 'moved into the 7th House'. 7th house relationships are about cooperation and sharing, and they generally serve some functional purpose in the larger social community (i.e. a marriage). This is different from a 5th house love affair, whose only qualification is 'butterflies in the stomach'. The 7th house includes the way you relate to those closest to you. Planets in this house will influence your manner of relating. They also give clues to issues that arise in your relationships."
      break;
    case '8th':
      return "Simply put, the 8th house is the polar opposite of the 2nd house. Whereas the 2nd rules your own individual possessions, the 8th house rules what a relationship owns (joint finances). The 8th House is one of the most misunderstood Houses. This is probably because the things represented by the 8th House seem to have nothing in common with each other, or they seem to be negative. This House governs death, regeneration, taxes, inheritances, wills & legacies, sex (the actual act of sex), latent occult ability, joint resources, your partner’s money and possessions, spouse's money, bankruptcy, losses, personal sacrifices, alimony, clairvoyance. On a positive note, this House is about transformation and healing. But transformation and healing require some type of death, loss, or injury first. This House rules those processes and things by which we transform and become more powerful. Yes, this includes the act of sex."
      break;
    case '9th':
      return "The ninth House refers to philosophy, religion, law, learning, higher education (as opposed to early education by the 3rd House), ethics, morals, long journeys, travel, foreign countries and interests, spiritual urges, dreams, visions, higher mind, ideas, understanding and wisdom, books, publishing, ceremonies, and rituals. This is the House of big thoughts and big ideas. 9th house 'understanding' is more complex than 3rd house 'knowledge'. The act of 'knowing' belongs to the 3rd house because it implies simply the direct contact of a person with something in his environment. Understanding involves the synthesis of known data. While the 3rd house refers to an individual's need to understand his close and personal environment, the 9th house is an area in which one seeks to discover the significance of larger fields of social existence which one may not experience directly but which his mind may explore through the use of analogy, generalization and abstraction. The 3rd and 9th houses symbolize the 2 polarities of the human mind, the concrete and the abstract. In summary, the 9th house includes experiences that we encounter when we search for the meaning of things. Whatever expands your field of activity or the scope of your mind – long journeys, contact with other cultures, great dreams, and even experiences with fortunetellers."
      break;
    case '10th':
      return "The tenth House is the House of status, honor, community power, prestige, reputation, and professional career. In our society, this includes financial success, but only as it relates to community power and prestige. It's not about gaining 'material stuff' as it is in the 2nd house. The 10th house wants success for the sake of honor and social status. This house includes social foundations (as opposed to personal home foundations in the 4th), recognition, personal achievements, social responsibilities, sense of duty, authority figures, politicians. This House encompasses the most public areas of one's life, and the career that you grow into, as opposed to daily work and odd jobs ruled by the 6th House. As with the 4th House, astrologers are divided over whether the 10th House rules one's mother or father. Those that say the 4th House rules the mother, say the 10th House rules the father, and vice versa. What is clear is that the 4th House rules the nurturing, home-body parent, while the 10th House rules the public, success-focused parent (the parent who 'wears the pants'). As with the other angular houses, any planets in this house are very important. Planets in the 10th house, the sign on the cusp of the 10th house, and its ruling planet will greatly influence your career and your general reputation in public."
      break;
    case '11th':
      return "The eleventh House is the House of community, large groups, and friends. It refers to memberships, hopes, goals, ambitions, wishes, social groups, associations, humanitarian interests. It also refers to self-realization, liberty, legislation and regulation."
      break; 
    case '12th':
      return "This is probably the most misunderstood house of all. The twelfth House refers to the subconscious, the hidden self that exists apart from our physical everyday reality. This includes the unconscious mind, subconscious memory, subconscious habit patterns from the past, mental illness, karmic debts, self-deception, escapism, spiritual realization, limitations, frustration, and ultimately our self-undoing. On a physical, material level, the 12th house includes things that take us away from everyday life: institutions (such as hospitals, prisons, government offices), places of confinement, secrets, secret relationships, hidden enemies, and self-sacrifice for others. It also refers to sorrow, tribulations, widowhood, grief, funerals, exile, seclusion, bribery, subversion, murder, suicide, kidnapping, and endings.For those who believe, the 12th house is also considered to refer to the collective unconscious of all humanity."
      break;
  }
}



function getElement(element){
  switch(element){
    case 'Air':
      return "Air signs approach energy mentally; they are thinkers. They are social, always ready for a new relationship or friendship. They love learning, but bore easily. Gemini has great intellectual curiosity, but too many personalities. Libra is partnership driven, but not in an emotional way. Aquarius is popular with friends and is unstoppable when it has a cause to champion. Air signs are into ideas and people. They are communicative; they must share information, interact with others, and influence society."
      break;
    case 'Fire':
      return "Fire signs respond to energy very quickly. They favor action. They're ready to go, take a risk, start a business, go on a trip, etc. They are confident, idealistic, intense, and approach life with zest and enthusiasm. Here is energy to conquer, lead, and travel physically and mentally. Aries must act, Leo must lead grandly, and Sagittarius explores unknown places and ideas."
      break;
    case 'Earth':
      return "Earth signs are more cautious in their approach. They are more practical, realistic, and they need solid footing before going forward. Taurus will dig the heels in and really ponder things. Virgo will analyze. Capricorn will climb, but will do it with care, first needing a vision, a plan, an organized structure before starting the ascent. Earth signs are dependable, thorough and solid. Earth signs seek to engage the physical world and master it through efficient organization. Earth signs seek economic security, respect, and prestige, and they work hard for it."
      break; 
    case 'Water':
      return "Water signs respond to energy almost unconsciously. They are deeply emotional. Cancer is motivated to nurture and be nurtured. Scorpio has intense vision, never swaying, looking straight ahead with laser-like focus. Pisces is the trickiest to describe. Pisces energy is chameleon-like, absorbing its surroundings."
      break;
  }
}