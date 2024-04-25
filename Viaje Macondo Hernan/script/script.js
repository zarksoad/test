
let days = 5
const characteristics = {name:"Hildebrando", budget:0 ,health:100,hunger:100}

// Case one

// Day friday 


// Hildebrando got pay$ 2.500.00

//opcions to eat
let staringTrip = () =>{
    let flag = true

while(flag){
    let opcions = parseInt(prompt("What do you want to do? \n 1  buy almojábana for 15.000 \n 2  buy Subway for 23.000 \n 3  to wait and buy something in medellin"))    
    if(!isNaN(opcions)){
        switch(opcions){
            case 1: 
            characteristics.budget-=15000
            characteristics.health-=20
            characteristics.hunger+= 10
            alert("The almojabana was bad for you and your health was affected")
            flag = false
            break
            
            case 2: 
            characteristics.budget-=23000
            characteristics.hunger+= 30
            alert("The Subway was good for you, you are sastified")
            flag = false
            break

            case 3:
            characteristics.budget-=15000
            characteristics.health-=20
            characteristics.hunger+= 10
            alert("Your hunger was affected, and you will more hungry in Medellin")
            flag = false
            break
        }
     
    }
    else{
        alert("Enter a valid opcion")
    }
}

alert(JSON.stringify(characteristics))
}


// Aeroport waitting room  

// Suit Case required 
let ReduceSuitCase =()=>{
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

alert(`newHeight ${newHeight} newLong ${newLong} newWidth ${newWidth}`)
}

// Issue Wifi  
//WiFi password required
let descryptBinary = ()=>{
    let password = "01110010_01101001_01110111_01101001".split("_")

    // Chage binay to decimal
    let decimal = password.map(binay => parseInt(binay,2))
    console.log(decimal)
    
    // Change binay to character
     let character = decimal.map(function(decimal) {
        return String.fromCharCode(decimal)
     })
    
     let final_convert = character.join("")
    
    alert(`The password is ${final_convert}`)
    budget-= 50000
}

// Convert vocal 
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

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let game = ()=>{
   let ramdonNumber = randomNumber(1,3)
    alert("📄🪨✂️Lets play Scissor Paper and Rock 🍀🍀🍀")
    let opcion = parseInt(prompt("Choose between \n 1: 📄paper \n 2: 🪨rock \n 3:✂️scissors "))
    let driverChoose,scissors,rock,paper,messaje
    let lost = 1
    let won = 1
    let tie = 1
    if(!isNaN(opcion) && opcion >0 && opcion <=3){
          // Taxi Driver choose
        if(ramdonNumber === 1 ){
            driverChoose = "The driver choose paper📄"
            paper = 1
        }
        else if(ramdonNumber === 2){
            driverChoose = "The driver choose rock🪨 "
            rock =2
        }   
        else{
            driverChoose = "The driver choose scissors✂️"
            scissors =3
        }
   
    }
    else{
        alert("Enter valid opcion")
        return
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
    }
    else{
        alert("Nothing happeen")
    }

}

game()

console.table(JSON.stringify(characteristics))

