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

    setPosition(x, y) {
        this.#element.style.left = x + "%";
        this.#element.style.top = y + "%";
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

/* White Car */
const whiteCar = new Car("car1", backdrop)
whiteCar.setRotation(270)
whiteCar.setPosition(91.4, 41.4);

whiteCar.doThisWhenClicked(() => {
    whiteCar.setPosition(-15.6, 41.4);
    whiteCar.moveAfterDelay(91.4, 41.4, 2500);
    whiteCar.resetTransition();
})

/* Police Car */
const policeCar = new Car("car2", backdrop)
policeCar.setRotation(0)
policeCar.setPosition(51.25, 89.1);

policeCar.doThisWhenClicked(() => {
    policeCar.setPosition(51.25, -15.6);
    policeCar.moveAfterDelay(51.25, 89.1, 2500);
    policeCar.resetTransition();
});

/* Red Car */
const redCar = new Car("car3", backdrop)
redCar.setRotation(-270)
redCar.setPosition(3.1, 49.2);

redCar.doThisWhenClicked(() => {
    redCar.setPosition(109.4, 49.2);
    redCar.moveAfterDelay(3.1, 49.2, 2500);
    redCar.resetTransition();
})

/* Taxi Car */
const taxiCar = new Car("car4", backdrop)
taxiCar.setRotation(180)
taxiCar.setPosition(43, 1.6);

taxiCar.doThisWhenClicked(() => {
    taxiCar.setPosition(43, 112.5);
    taxiCar.moveAfterDelay(43, 1.6, 2500);
    taxiCar.resetTransition();
})