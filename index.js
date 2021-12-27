let TIME_SET_ID = ""

const get_time = () =>{
    const d = new Date
    let time = d.toLocaleTimeString()
    const time_document = document.getElementById("current_time")
    time_document.innerText = "⏰ Current Time Is: " + time
}

const check_for_christmass = () =>{
    const snowflakes = document.getElementById("snowflakes")
    const d = new Date
    if(d.getMonth() + 1 == 12){
        snowflakes.hidden = false
    }
}

const set_time = (id) =>{
    TIME_SET_ID = id
    document.getElementById("main_content").remove()
    document.getElementById("set_time").hidden = false

    
}

const method_selector = () =>{
    const hour = document.getElementById("hour_selector").value
    const minute = document.getElementById("minute_selector").value
    console.log(hour, minute)
    if(id == "fall_asleep") fall_asleep()
    if(id == "wake_up") wake_up
}

const sleep_now = (hour , minute) =>{
    document.getElementById("main_content").remove()
    document.getElementById("sleep_now").hidden = false

    const d = new Date();
    const times_document = document.getElementById("sleep_now_times")

    const res1 = new Date(d.getTime() + 104*60000);
    const res2 = new Date(res1.getTime() + 90*60000);
    const res3 = new Date(res2.getTime() + 90*60000);
    const res4 = new Date(res3.getTime() + 90*60000);
    const res5 = new Date(res4.getTime() + 90*60000);
    const res6 = new Date(res5.getTime() + 90*60000);

    const times_string = `
1️⃣ ${res1.getHours()}:${res1.getMinutes()}
2️⃣ ${res2.getHours()}:${res2.getMinutes()}
3️⃣ ${res3.getHours()}:${res3.getMinutes()}
4️⃣ ${res4.getHours()}:${res4.getMinutes()}
5️⃣ ${res5.getHours()}:${res5.getMinutes()}
6️⃣ ${res6.getHours()}:${res6.getMinutes()}
    `
    times_document.innerText = times_string


    
    
}


const wake_up = (hour, minute) =>{

}

const fall_asleep = () =>{

}

window.onload = function (){

check_for_christmass()
setInterval(get_time, 1000)









}

