
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
let decryptBinary = ()=>{

}
ReduceSuitCase()

// user =  prompt("Welcome to the Aeroport Wifi please ")