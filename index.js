let isIntersectionBusy = false;

const whiteCar = document.getElementById('car1');
const policeCar = document.getElementById('car2');
const redCar = document.getElementById('car3');
const taxiCar = document.getElementById('car4');

//logic should be white car clicked, its light is green,
// so vertical cars will not operate, but when the opposite car is clicked
//the other operates, because the light associated with its road is green.
// while horizontal cars operate, vertical cars shouldn't operate.
//e.g white car is clicked, red car goes after delay unless clicked, it operates.
// but if the taxi is clicked within Xms don't honor click event, because intersection busy when
// other cars are operating.
//Stop light cycle
 

//
// Car1 - White car listener event


whiteCar.addEventListener('click', () => {
    if (isIntersectionBusy) return;
    isIntersectionBusy = true;
    
    whiteCar.classList.add('car1move');

    setTimeout(() => {
        policeCar.classList.add('car2move');
    }, 900);

    setTimeout(() => {
        whiteCar.classList.remove('car1move');
        policeCar.classList.remove('car2move');
        isIntersectionBusy = false;
    }, 3000);
});


//
// Police Car listener event
policeCar.addEventListener('click', (event) => {
    policeCar.classList.add('car2move');

    setTimeout(() => {
        policeCar.classList.remove('car2move');
    }, 3000);
});

//
// Red car listener event
redCar.addEventListener('click', (event) => {
    redCar.classList.add('car3move');

    setTimeout(() => {
        redCar.classList.remove('car3move');
    }, 3000);
});

//
// Taxi car listener event
taxiCar.addEventListener('click', (event) => {
    taxiCar.classList.add('car4move');

    setTimeout(() => {
        taxiCar.classList.remove('car4move');
    }, 3000);
});