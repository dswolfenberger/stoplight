let isIntersectionBusy = false;

class Stoplight {
    #light

    constructor(name, parent) {
        this.#light = document.createElement("div")        
        this.#light.id = name
        this.#light.className = "stoplight " + name

        this.commonStyles();
        if (parent) {
            parent.appendChild(this.#light)
        }
    }
    /* common light styling */
    commonStyles() {
        this.#light.style.position = "absolute"
        this.#light.style.borderRadius = ".04rem"
        this.#light.style.zIndex = "2"
        this.#light.style.background = "#000000"
        this.#light.style.maxHeight = "3.25rem"
        this.#light.style.maxWidth = "1rem"
        this.#light.style.padding = ".3rem"
    }
    
    setPosition(x, y) {
        this.#light.style.left = x + "rem"
        this.#light.style.top = y + "rem"
    }

    /* change light color based on what car is clicked, after delay, 
    during delay, light = yellow, after delay opposite of what it was before */
    lightCycle(){
        addEventListener("???", (event) => {
            
        })
    }
}
class Car {
    #element
    constructor(name, parent) {
        this.#element = document.createElement("img")
        this.#element.id = name
        this.#element.src = "images/" + name + ".png"

        this.commonStyles()

        parent.appendChild(this.#element)
    }

    /* common car styling */  
    commonStyles() {
        this.#element.style.position = "absolute"
        this.#element.style.maxHeight = "3.8rem"
        this.#element.style.zIndex = "1"
        this.#element.style.transition = "all 1500ms ease"
    }

    setPosition(x,y) {
        this.#element.style.left = x + "px"
        this.#element.style.top = y + "px"
    }

    setRotation(degrees) {
        this.#element.style.rotate = degrees + "deg"
    }

    doThisWhenClicked(fun) {
        this.#element.addEventListener("click", fun)
    }

    moveAfterDelay(x, y, delayTime) {
        setTimeout(() => {
            this.setPosition(x, y)
            this.#element.style.transition = "none"
        }, delayTime)
    }

     /* reset the car after click event */
    resetTransition(){
        this.#element.style.transition = "all 1500ms ease"
    }
}
const backdrop = document.getElementById("backdrop")

const whiteCar = new Car("car1", backdrop)
whiteCar.setPosition(585, 265)
whiteCar.setRotation(270)

whiteCar.doThisWhenClicked(() => {
    whiteCar.setPosition(-100, 265)
    whiteCar.moveAfterDelay(585, 265, 2500); 
    whiteCar.resetTransition()
})

const policeCar = new Car("car2", backdrop)
policeCar.setPosition(328, 570)
policeCar.setRotation(0)

policeCar.doThisWhenClicked(() => {
    policeCar.setPosition(328, -100) 
    policeCar.moveAfterDelay(328, 570, 2500)
    policeCar.resetTransition()
})

const redCar = new Car("car3", backdrop)
redCar.setPosition(20, 315)
redCar.setRotation(-270)

redCar.doThisWhenClicked(() => {
    redCar.setPosition(700, 315)
    redCar.moveAfterDelay(20, 315, 2500)
    redCar.resetTransition()
})

const taxiCar = new Car("car4", backdrop)
taxiCar.setPosition(275, 10)
taxiCar.setRotation(180)

taxiCar.doThisWhenClicked(() => {
    taxiCar.setPosition(275, 720)
    taxiCar.moveAfterDelay(275, 10, 2500)
    taxiCar.resetTransition()
})