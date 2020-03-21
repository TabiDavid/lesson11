function getUpdate(){
    var myday = new Date();
    var dayOfWeek = myday.getDay();
    var month = myday.getMonth();
    var dayOfMonth = myday.getDate();
    var year = myday.getFullYear();
    
var Months = ['January', 'Febrary', 'March', 'April', 'May', 'Jun', 'July',
'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    text = weekdays[dayOfWeek] + ", " + dayOfMonth + " " + Months[month] + " " + year;
    
    
    document.getElementById('outputDiv').innerHTML = text;
    }



    function toggleMenu() {
        document.querySelector(".navigation").classList.toggle("responsive");
      }

      function pancakeD(){
        var dayOfWeek = new Date().getDay();
        var weekdays = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        if(weekdays[dayOfWeek] == weekdays[5]){
        document.getElementById("pancake").style.display = "flex";
        }
        else {
            document.getElementById("pancake").style.display = "none";
        }
        
        }
        
        WebFont.load({ google: { families: ['Trade Winds', 'Roboto'] } });


        //Javascript from cards//

        const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {

        // Create HTML elements as variables//

        let card = document.createElement('section');
        let carddiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');

        //CLASS

        card.setAttribute('class', 'townsection');
        h2.setAttribute('class', 'townname');
        h3.setAttribute('class', 'towntittle');
        year.setAttribute('class', 'townp');
        population.setAttribute('class', 'townp');
        rainfall.setAttribute('class', 'townp');
        image.setAttribute('class', 'townimage');


        //Assign variables content from JSON//

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        year.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;


        //IMAGES//

        image.setAttribute('src', "img/" + towns[i].photo);
        image.setAttribute('alt', "picture of: " + h2.textContent);

        //Append HTML items//

        carddiv.appendChild(h2);
        carddiv.appendChild(h3);
        carddiv.appendChild(year);
        carddiv.appendChild(population);
        carddiv.appendChild(rainfall);
        card.appendChild(carddiv);
        card.appendChild(image);

        //Commit to DOM//

        document.querySelector('div.cards').appendChild(card);
      }
    }
  });