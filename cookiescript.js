let clicks = 0;
let clickstxt = document.getElementById('clickscookie');
let cookiebtn = document.getElementById('cookie');

cookiebtn.addEventListener('click', function(){
    clicks = clicks + 1;
    clickstxt.innerHTML = clicks + " Koekjes gegeten!";
})