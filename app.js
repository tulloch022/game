//Plant cat randomly

const mineLocation = (Math.floor(Math.random() * 56))


//Event: Clicked box

counter = 0;
const clickBox = () => {
    console.log(counter)
    if (counter < 3) {
        window.onclick = e => {
            let clickedBox = e.target;
            const style = getComputedStyle(clickedBox);
            const backgroundColor = style.backgroundColor;
             if (backgroundColor == "rgb(211, 222, 213)") {
                 clickedBox.style.backgroundColor = "black";
                 counter+=1;        
            } else {
            clickedBox.style.backgroundColor = "rgb(211, 222, 213)";
            counter-=1;
             }
         }
    } else { 
        alert ('You lost!');
        window.location.reload()}
        
};

