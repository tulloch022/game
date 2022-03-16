//Plant cat randomly

const catLocation = 'box'+(Math.floor(Math.random() * 56))
const theCat = document.querySelector("#cat");


console.log(catLocation)



//Countdown

const makeCountdown = () => {
    if (document.querySelector("#countdown").innerText > 0) {
        document.querySelector("#countdown").innerText -=1;
    }
}

window.setInterval(makeCountdown, 1000);


//Make intro tip disappear


const disappear = () => {
    document.querySelector("#starter").style.display = "none"
}


//Winner Screen

const winnerScreen = document.querySelector("#winner");


//Event: Clicked box

counter = 0;
const clickBox = () => {
    console.log(counter)
    if (counter < 14) {
        window.onclick = e => {
            let clickedBox = e.target;
            console.log(clickedBox.id)
            const style = getComputedStyle(clickedBox);
            const backgroundColor = style.backgroundColor;
            if (backgroundColor == "rgb(211, 222, 213)" && clickedBox.id !== catLocation) {
                 clickedBox.style.backgroundColor = "black";
                 counter+=1;
                 guessTaker()        
             } else if (clickedBox.id == catLocation) {
                 theCat.style.display = 'block';
                 winnerScreen.style.display = 'block';
                 setTimeout(function() {window.location.reload()},  5000)};

             }
    } else if (counter===14) { 
        console.log('uhh')
        alert ('You ran out of guesses!');
        window.location.reload()
}
};




//Update selected counter

const guessTaker = () => {
    document.querySelector("#guesses").innerText-=1;
}
