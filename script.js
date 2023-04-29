function convert(unit, checkbox) {
    var bigTemp = document.getElementById("bigTemp");
    var bigC = document.getElementById("bigC");
    var temps = document.querySelectorAll(".weakly-weather-item p.mb-0");
    var symb = document.querySelectorAll(".weakly-weather-item p.symb");
    
    if (unit == "user") {
      if (checkbox.checked) {
        // Conversión a Fahrenheit
        bigTemp.innerHTML = Math.round(parseInt(bigTemp.getAttribute("value")) * 1.8 + 32);
        bigC.innerHTML = "°F";
        for (var i = 0; i < temps.length; i++) {
          temps[i].innerHTML = Math.round(parseInt(temps[i].getAttribute("value")) * 1.8 + 32);
          symb[i].innerHTML = "°F";
        }
      } else {
        // Conversión a Celsius
        bigTemp.innerHTML = bigTemp.getAttribute("value");
        bigC.innerHTML = "°C";
        for (var i = 0; i < temps.length; i++) {
          temps[i].innerHTML = temps[i].getAttribute("value");
          symb[i].innerHTML = "°C";
        }
      }
    }
  }
  