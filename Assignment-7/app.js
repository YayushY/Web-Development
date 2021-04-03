// api key 9edf5aaa12b89912f7f1cef77cfa67f9
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let inpEle = document.querySelector('input'); 
const api_key = '9edf5aaa12b89912f7f1cef77cfa67f9';

 inpEle.addEventListener('keydown', async (e)=>{
    if(e.which==13){
        const val = inpEle.value;
        inpEle.value = "";
        const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+val+ '&appid='+ api_key );
        const conv_data = await data.json();
        if(conv_data.cod =="200"){
            const cur = Math.floor(conv_data.main.temp - 273);
            if(cur>25){
                $('body').addClass('body2');
            }
            else if(cur<10){
                $('body').addClass('body1');
            }
            else{
                $('body').removeClass();
            }
            const min = Math.floor(conv_data.main.temp_min- 273);
            const max = Math.floor(conv_data.main.temp_max- 273);
            const city = conv_data.name;
            const country = conv_data.sys.country;
            $("#place").text(city + ", "+ country);
            $("#temp").text(cur+"°C");
            $("#min_max").text(min+"°C / "+ max+"°C");
        }
        else{
            $("#place").text("");
            $("#temp").text("NA");
            $("#min_max").text("");
        }
    }
})