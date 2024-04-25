// Functions
// Global Variables
let characteristics = {name:"Hildebrando", budget:0,live:true}
let counter = 0
let flag = true
let spendMoney = 0
// Data: is for access the information about the main character
let data = ()=>{
    alert(`📚The data of ${JSON.stringify(characteristics.name)} are: budget  $${characteristics.budget} , Live: ${characteristics.live} `)
}
// StaringTrip  case 1
let staringTrip = () =>{
    let flag = true
    alert("Friday, Hildebrando arrives at El Dorado Airport,He wants to buy some food before the flight since he has a layover in Medellin in the early morning.")
    while(flag){
        let opcions = parseInt(prompt("🍔What do you want to do?🍔 \n        1 to buy almojábana for 15.000 \n        2  to buy Subway for 23.000 \n        3  to wait and buy something in medellin"))    
        if(!isNaN(opcions)){
            switch(opcions){
                case 1: 
                characteristics.budget-=15000
                spendMoney+=15000
                alert("The almojabana was bad for you and you are not feelling well")
                flag = false
                break
                
                case 2: 
                characteristics.budget-=23000
                spendMoney+=23000
                alert("The Subway was good for you, you are sastified")
                flag = false
                break

                case 3:
                alert("Your hunger was affected, and you will more hungry in Medellin")
                flag = false
                break
            }
        
        }
        else{
            alert("Enter a valid opcion")
        }
    }

}  
let medellinStop =() =>{
 if(spendMoney === 0){
    let flag = true
    alert("Medellin, Hildebrando arrives at Medellin aeroport. He wants to buy some food because he didn't eat something in the previous aeroport")
    while(flag){
        let opcions = parseInt(prompt("🥓What do you want to do?🥓 \n 1 to buy Chicharron for $150.000 \n 2 to buy Macondo food for $100.000 \n 3 to buy Empanada $2000"))    
        if(!isNaN(opcions)){
            switch(opcions){
                case 1: 
                characteristics.budget-=150000
                spendMoney+=150000
                alert("The Chicharron was good for you and you are feelling very well")
                flag = false
                break
                
                case 2: 
                characteristics.budget-=1000000
                spendMoney+=1000000
                alert("Very delicuous 👌")
                flag = false
                break

                case 3:
                alert("The empanada it was bad for you, and you spend in the farmaccy $100.000")
                characteristics.budget-=102000
                spendMoney+=102000
                flag = false
                break
            }
        
        }
        else{
            alert("Enter a valid opcion")
        }
    }

 }
 else{
    return
 }
}
// Suit Case required  case 2
let reduceSuitCase =()=>{
alert("Hildebrando arrives at the waiting area and checks his suitcase, which does not meet the carry-on size requirements.")
let requiredHeight = 55
let requiredLong = 40
let requiredWidth = 20 

let originHeight = 60
let originLong = 40
let originWidth = 20 

let calcHeight = requiredHeight/originHeight 
let calcLong = requiredLong/originLong
let calcWidth = requiredWidth/originWidth


let reduction = Math.min(calcHeight,calcLong,calcWidth)
let newHeight= originHeight * reduction
let newLong = originLong * reduction
let newWidth =originWidth * reduction
alert("The only way to continue is by reducing his loggages to reach the minimum required.");
alert("Hildebrando accepts and proceeds to reduce his loggages. The result is:");

alert(`new Height ${newHeight.toFixed(2)} new Long ${newLong.toFixed(2)} newWidth ${newWidth.toFixed(2)}`)
alert("Hildebrando can continue with his travel ✔️ ")
}
// Issue Wifi  
//WiFi password required case 3
let descryptBinary = ()=>{
    alert("Now that Hildebrando is heading to the city of Medellín, he arrives at 2 am and must board at 3 am for Macondo. He encounters the problem that the airport's wifi is failing, and he needs to secure his hotel reservation for the following day. While walking through the airport, he finds wifi. The network is called (ElPassEs: 01110010_01101001_01110111_01101001), but the password is encrypted in binary numbers. Additionally, they charge $50,000 per hour.")
    
    alert("Hildebrando accepts, research how to descript the password")
    characteristics.budget-=50000
    spendMoney+=50000
    let password = "01110010_01101001_01110111_01101001".split("_")

    // Chage binay to decimal
    let decimal = password.map(binay => parseInt(binay,2))
    console.log(decimal)
    
    // Change binay to character
     let character = decimal.map(function(decimal) {
        return String.fromCharCode(decimal)
     })
    
     let final_convert = character.join("")
    
    alert(`Finally Hilderbrando resolve The password and continue to book the hotel room, the password is ${final_convert}`)
    }   
let convertVocal = word=>{
    let expresionRegular = /[a-zA-Z]+/.test(word)  

    if(expresionRegular){
        let vocal = word.replace(/[aeou]/gi,"i")
        alert(vocal)
    }
    else {
        alert("Enter a valid phrase")
    }
    
}
// RandomNumber provided ramdoms numbers 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// This function is about the game  
let game = ()=>{
    alert("Taxi Driver : Hey bro the fee will be $300.000 :Hiy bri thi fii will bi $300.000")
    let word ="Hildebrando think:Hey bro, I think the fee is a little bit expensive, I recomend you to do a bet , so Lets play Scissor Paper and Rock, if I won I would have the fee free , but if you won, you would have  $300.000"
    alert(word)
    alert("Hilderbrando proceed to traduce his words, and say")
    convertVocal(word)
    alert("Taxi Driver:challingi icciptid ⚔️")
   let ramdonNumber = randomNumber(1,3)
    alert("📄🪨✂️Lets play Scissor Paper and Rock 🍀🍀🍀")
    
    let driverChoose,scissors,rock,paper,messaje
    let lost = 1
    let won = 1
    let tie = 1
    let flag = true
    let opcion
    while(flag){
    opcion = parseInt(prompt("Choose between \n 1: 📄paper \n 2: 🪨rock \n 3:✂️scissors "))
    
    if(!isNaN(opcion) && opcion >0 && opcion <=3){
          // Taxi Driver choose
        if(ramdonNumber === 1 ){
            driverChoose = "The taxi driver choose paper📄"
            paper = 1
            flag = false
        }
        else if(ramdonNumber === 2){
            driverChoose = "The taxi driver choose rock🪨 "
            rock =2
            flag = false
        }   
        else{
            driverChoose = "The taxi driver choose scissors✂️"
            scissors =3
            flag = false
        }
   
    }
    else{
        alert("Enter valid opcion") 
        
    }
    } 
   if(scissors === opcion || rock === opcion || paper == opcion){
        messaje = "a tie"
        tie = 2
       
    }
    else if(paper === 1 && opcion ===2){
        messaje = "You have lost"
        lost = 2
    }
    else if(rock === 2 && opcion ===3){
        messaje = "You have lost"
        lost = 2
    }
    else if(scissors == 3 && opcion ===1) {
        messaje = "You have lost"
        lost = 2
    }
    else{
        messaje = "You have won"
        won = 2
    }


    if(opcion === 1) opcion= "you have choosed paper📄"; 
    if(opcion === 2) opcion= "you have choosed rock 🪨"; 
    if(opcion === 3) opcion= "you have choosed scissors✂️"; 

    alert(`${driverChoose}, and ${opcion} `)
    alert(`The result is ${messaje}`)

    if(won > lost  && won > tie){
        alert("You don't have to pay anything 😊")
    }
    else if(lost > won && lost > tie){
        alert("Sorry man, you have to pay $300.000 😢")
        characteristics.budget-=300000
        spendMoney+=300000
    }
    else{
        alert("Nothing happeen")
    }

}
// Multiple decitions 
// each deciction is about the dress color with them we can finally the results
let yellow = ()=>{
    alert("Hildebrando has chosen yellow💛, 🏊‍♂️🏊‍♀️he will go to the swimming pool,")
    let flagIn = true
    while(flagIn){
    let opcion = parseInt(prompt(("The water smells strange, What do you want to do?\n 1 to swim🏊\n any number to do other thing")))
    if(!isNaN(opcion)){
        if(opcion === 1) {


            
           alert("Hildebrando starts to feel suffocated, too much chlorine, he dies 💀💀💀")
           characteristics.live = false
           flag = false
           flagIn = false
        }
        else{
            alert("Nothing happen")
            flagIn = false
        }
        
    }
    else(
        alert("Please enter a valid Opcion")
    )
}

}
let blue =()=>{
    alert("Hildebrando has chosen Blue 🔵,you will go to do an activity in the hotel,")
    let flagIn = true
    while(flagIn){
    let opcion = parseInt(prompt(("What do you want to do?\n 1: to play bingo 🎱\n 2: to dance💃🕺 \n press any number: Gambling in the Casino 🎰")))
    if(!isNaN(opcion)){
        if(opcion === 1) {
           alert("Hildebrando won the bingo, Total prize $1.000.000 🤑💸")
           characteristics.budget += 1000000;
           flagIn = false
        }
        else if (opcion === 2){
            alert("Hildebrando Passed a great day dancing 💃🕺 with a beatiful girl")
            flagIn = false
        }
        else{
            alert("Hildebrando bets, and only ends up with hist return ticket,😢")
            let num  = characteristics.budget * 0.8
            characteristics.budget-=num
            spendMoney+= num
            flag = false
            flagIn = false
        }
        
    }
    else(
        alert("Please enter a valid Opcion")
    )
}
   
    
}
let red =()=>{
    alert("Hildebrando has chosen 🔴Red ,Hildebrando will go to the beach 🏖️")
    let flagIn = true
    while(flagIn){
    let opcion = parseInt(prompt(("What do you want to do?\n1: play volleyball 🏐\n2: to swim in the sea 🌊 \nPress any key:to Drink Alcohol 🍾🍾🍾 ")))
    if(!isNaN(opcion)){
        if(opcion === 1) {
           alert("Hildebrando plays voleyball 🏐, he pass a great time")
           flagIn = false
           
        }
        else if (opcion === 2){
            alert("Hildebrando swins,and he drives a water scooters for $100.000")
            spendMoney+=100000
            flagIn = false
        }
        else{
            alert("Hildebrando starts drinking cocktails while resting 🥴, suddenly he feels a strong headache and begins to lose his vision  , adulterated chirrinchi, he had to go back in an emergency 🏥. he spend $500000")
            alert("Vacations is over 😔")
            characteristics.budget-=500000
            spendMoney+=500000
            characteristics.live= false
            flagIn = false
            flag = false            
        }
        
    }
    else(
        alert("Please enter a valid Opcion")
    )
}
}
let green =()=>{
    alert("Hildebrando has chosen green 🟢,he will hike and take with him water,🚶‍♂️🚶‍♀️")
    let flagIn = true
    while(flagIn){
    let opcion = parseInt(prompt(("Hildebrando, What do you want to do?\n1: go all the hike with the group🌱\npress any key:to go to the hike alone 🌱")))    
    if(!isNaN(opcion)){
        if(opcion === 1) {
           alert("Hildebrando goes to a beautiful waterfall and take photos.")  
           flagIn = false
        }
        else{
            alert("He will reach a certain point, and will return alone, 🌱 and at night gets lost 😨 , Hildebrando was eaten by a wolf 🐺")
            alert("Vacations is over 😔")
            live = false
            flag = false
            flagIn = false
        }    
    }
    else(
        alert("Please enter a valid Opcion")
    )
}
}
let vacationsActivities = ()=>{
    while(counter <4 && flag){
     counter+=1  
     data() 
    if(counter === 1){
        alert("🌴🏖️🌞Today is Saturday, Day 1🍹🕶️🏄‍♂️")
    }
    else if(counter === 2){
        alert("🌴🏖️🌞Today is Sunday, Day 2🍹🕶️🏄‍♂️")
    }
    else if(counter === 3){
        alert("🌴🏖️🌞Today is Monday, Day 3🍹🕶️🏄‍♂️")
    }
    else if(counter === 4){
        alert("🌴🏖️🌞Today is Tuesday, Day 4🍹🕶️🏄‍♂️")
    }
    let opcion = parseInt(prompt("Choose between \n1:💛Yellow \n2:🔵Blue \n3:🔴Red \n4:🟢Green  ")) 
        if(!isNaN(opcion) && opcion >0  && opcion <5){  
            
            switch(opcion){
                case 1: 
                    yellow()
                break
                case 2:
                blue()
                break
                case 3:
                red()
                break
                case 4: 
                green() 
                break  
            }
        }  
        else{
            alert("Please enter a valid opcion")
        }

                }

            }  
// Results 
let results = ()=>{
    alert("The Vacation is over,these are the results")
    alert(`Hildebrando was for ${counter} days`)
    let resultLive = characteristics.live
    if(resultLive){
        alert("Hildebrado is alive and he returned to Bogota")
    }
    else{
        alert("Hildebrado is Dead for your bad choises")
    }

    alert(`The total money spend by Hildebardo was ${spendMoney}`)
}            
function main(){
    alert("Hildebrando is packing his bags🧳🧳, Day thursday")
    data()
    // Hildebrando got pay$ 2.500.00
    alert("Hildebrando got pay $2.500.000 🤑💸")
    characteristics.budget+=2500000
    data()
    staringTrip()
    medellinStop()
    data()
    descryptBinary()
    alert("Upon arriving in Macondo, he realizes that everyone speaks differently, only using the vowel (i). So, everything he will say is with the vowel (i). To request a taxi, it would be converted ")
    let word = "Taxi would you mind to take me to butterflies yellow "
    convertVocal(word)
    data()
    alert("Finally ,he could take a taxi🚖")
    game()
    data()
    alert("He arrives at the hotel and notices that for the activities inside the hotel they have a dress code for everything,") 
    data()
    vacationsActivities()
    results()
    data()
    
}
   
   
main()