fetch ('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={3fb656bc2a822a3e466a727ba785585e}')
.then(response => response.json()) 
.then(data =>console.log(data)) 