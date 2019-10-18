console.log("Hello from the JavaScript console!");

const blah = (res) => { 
    console.log(res); 
    console.log("Sabit is testing!"); 
}

$.get({ 
    url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
    success: blah
});

console.log("Sabit is the best!")