let option;
let aajKaDate;
let myDate = new Date();
option = { weekday: 'long', year: 'numeric', month: 'long', Day: 'numeric' };
aajKaDate = myDate.toLocaleDateString(undefined, option);

var hours;
hours = myDate.getHours();
minutes = myDate.getMinutes();

let nowTime;
nowTime = hours + ":" + minutes;
var myObject = {
    market: 'Nifty',
    gallery: 'Photos',
    news: 'headlines',
    today: aajKaDate,
    time: nowTime,
    owner: 'Add Web Productions',
    me: 'user',
    hello: 'Hi, Nice to meet you'

}



function search_func() {
    let search;

    search = document.getElementById('mysearch').value;

    // array.includes("bla..bla..") is used for check whether an items is present in the array or not ..
    console.log("you searched for", search);
    console.log('Searching...');
    var myArr = ['market', 'gallery', 'news', 'today', 'owner', 'me', 'hello', 'time'];
    if (myArr.includes(search)) {
        // console.log('you searched the right thing')
        var ans = myObject[search];
        // console.log('your result is :', ans);
        var a = document.getElementById('result_box');
        a.style.background = "white";
        a.style.width = "420px";
        a.style.height = "96px";
        a.style.position = "absolute";
        a.style.top = "21rem";
        a.style.left = "32rem";
        a.style.border = "2px solid blue";
        a.style.borderRadius = "10px";
       



        var createdElement = document.createElement('p')
        createdElement.innerText =" Your result is : " + ans;
        a.appendChild(createdElement);


    }


}

function remove_func() {
    var tn = document.getElementById('allBoxes')
    tn.parentNode.removeChild(tn)
}


mysearch = document.getElementById('mysearch');
mysearch.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        document.getElementById('search_btn').click()
    }
    
})


// let button;
// button = document.getElementById('search_btn');
// button.addEventListener("click", search_func);
