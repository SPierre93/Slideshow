class Avenger
{
    //Properties
    name;
    image;
    colour;
    description;

    //Constructor
    constructor(n, i, c,desc)
    {
        this.name = n;
        this.image = i;
        this.colour = c;
        this.description = desc;
    }
}

function main()
{
    //Fetch future event handlers first, then other DOM elements
    const leftArrowButton = document.querySelector("#leftArrow");
    const rightArrowButton = document.querySelector("#rightArrow")
    const headingTxt = document.querySelector("#slideContent > h1");
    const photo = document.querySelector("#slideContent > img");

    //Objects created from the Avenger class
    let Tony = new Avenger("Iron Man", "img/tStark.jpg", "#d3172a", "Photo of Iron Man");
    let Steve = new Avenger("Captain America", "img/sRogers.jpg", "#416cD1", "Photo of Captain America");
    let Thor = new Avenger("Thor", "img/tOdinson.jpg", "#d3172a", "Photo of Thor");
    let Bruce = new Avenger("The Hulk", "img/bBanner.jpg", "#1e8b47", "Photo of The Hulk");
    let Natasha = new Avenger("Black Widow", "img/nRomanov.jpg", "#d3172a", "Photo of Black Widow");
    let Clint = new Avenger("Hawkeye", "img/cBarton.jpg", "#8340a6", "Photo of Hawkeye");
    let Nick = new Avenger("Nick Fury", "img/nFury.jpg", "#d3172a", "Photo of Nick Fury");

    const avengersArr = [Tony, Steve, Thor, Bruce, Natasha, Clint, Nick];

    let i=0;

    let leftClick = false; //Flags
    let rightClick = false;

    setInterval(function(){
        if(i==avengersArr.length)
        {
            i=0;
        }

        headingTxt.innerHTML = avengersArr[i].name;
        photo.src = avengersArr[i].image;
        headingTxt.style.backgroundColor = avengersArr[i].colour;
        leftArrowButton.style.color = avengersArr[i].colour;
        rightArrowButton.style.color = avengersArr[i].colour;
        photo.alt = avengersArr[i].description;

        if(leftClick==false && rightClick==false || leftClick==false && rightClick==true)
        {
            i++;
        }

        else if(leftClick==true)
        {
            i--;

            if(i<0)
            {
                i=avengersArr.length-1;
            }
        }
    },2000);

    //Event listeners calling each Avenger function
    rightArrowButton.addEventListener("click", function(){
        rightClick = true;
        leftClick = false;
    });

    leftArrowButton.addEventListener("click", function(){
        leftClick = true;
        rightClick = false;
    })
}
main();