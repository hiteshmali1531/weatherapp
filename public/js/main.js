const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const data_hide = document.getElementById("data_hide");
const day = document.getElementById("day");
const today = document.getElementById("today_date")

const getInfo = async(e) =>{
    e.preventDefault();
    let cityVal = cityName.value;
    // alert("Welcome to page");
    if(cityVal === ""){
         city_name.innerText= `Plz write the name before search`;
         data_hide.classList.add("data_hide");
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7d72568c17c2b16370b36948083865a5`;
            const response = await fetch(url);
            const Data = await response.json();
            console.log(Data);
            const arrData = [Data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML = `${arrData[0].main.temp} <span>0</span><sup>o</sup> C`;
            const tempMood = arrData[0].weather[0].main;
            data_hide.classList.remove("data_hide");
            if(tempMood == "Clear"){
                temp_status.innerHTML = `<i class="fas fa-sun" style='color: #eccc68;'></i>`;
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = `<i class="fas fa-cloud" style='color: #f1f2f6;'></i>`
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style='color: #a4b0be;'></i>`
            }else {
                temp_status.innerHTML = `<i class="fas fa-cloud" style='color: #f1f2f6;'></i>`
            }
            

            // const 
            
        } catch (error) {
            city_name.innerText = `Plz enter the city name properly`;
            data_hide.classList.add("data_hide");
        }
        
    }
}

let Day= ""; 
let Time = "";

const currentTime = ()=>{
    let time = new Date();
    let day = time.getDay();
    console.log(day);
    var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
    let currentDay = weekday[day];
    console.log(currentDay);
    Day = currentDay; 
    console.log(currentDay);
    
    day.innerText = Day;

}

const correctNow = () =>{
    const now = new Date();

    var d = new Date();
        var months = new Array();
        months[0] = "Jan";
        months[1] = "Feb";
        months[2] = "Mar";
        months[3] = "Apr";
        months[4] = "May";
        months[5] = "Jun";
        months[6] = "Jul";
        months[7] = "Aug";
        months[8] = "Sep";
        months[9] = "Oct";
        months[10] = "Nov";
        months[11] = "Dec";
    let month = now.getMonth();
    let day = now.getDate();
    let realmonth = months[month];
    

    Time = ` ${realmonth} ${day}  `;


    
    console.log(realmonth + "/"+ day);

    today.innerText = Time;
}


correctNow();
currentTime();

submitBtn.addEventListener('click', getInfo);
