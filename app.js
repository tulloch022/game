//Plant cat randomly

const catLocation = 'box'+(Math.floor(Math.random() * 56))

console.log(catLocation)

//Event: Clicked box

counter = 0;
const clickBox = () => {
    console.log(counter)
    if (counter < 15) {
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
                 alert ('You WIN!');
                 window.location.reload()};
             }
    } else if (counter===15) { 
        console.log('uhh')
        alert ('You ran out of guesses!');
        window.location.reload()
}
};




//Update selected counter

const guessTaker = () => {
    document.querySelector("#guesses").innerText-=1;
}


//Check if cat is in box

