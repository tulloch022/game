//Update Counter


//Event: Clicked box

const clickBox = () => {
    window.onclick = e => {
        let clickedBox = e.target;
        const style = getComputedStyle(clickedBox);
        const backgroundColor = style.backgroundColor;
        if (backgroundColor == "rgb(211, 222, 213)") {
            clickedBox.style.backgroundColor = "black";        
        } else {
            clickedBox.style.backgroundColor = "rgb(211, 222, 213)";
        }
    }
};

