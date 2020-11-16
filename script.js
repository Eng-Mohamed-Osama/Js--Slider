var sliderImgs = Array.from(document.querySelectorAll('.slider-container img'));
var mainUl = document.getElementsByClassName('main');
console.table(sliderImgs);
var slideCont = sliderImgs.length ;
console.log(slideCont);
// for (i=0 ; i<slideCont ;i++){
//     var para = document.createElement("li");
//     var node = document.createTextNode(i);
//     para.appendChild(node);
//     mainUl.appendChild(para);
// }
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
var currentSlide = 12;
var slideNumberElement = document.getElementById('silder-number');
// create the indecator buttons

var theMainUl = document.createElement('ul');
theMainUl.setAttribute('id', ' pagaing')

for(var i = 1 ; i <= slideCont ; i++){
    var theLilist = document.createElement('li');
    theLilist.setAttribute('data-index' ,  i);
    theLilist.setAttribute('id' ,  'rr');
    theLilist.appendChild(document.createTextNode(i));
    theMainUl.appendChild(theLilist);
}
document.getElementById('indicators').appendChild(theMainUl)
// nextButton.onclick = showNext;
// prevButton.onclick = nextFun;

var bullets = Array.from(document.querySelectorAll('ul li'));
// function showNext(){
//     sliderImgs.
// }

checker();
function showPrev(){
    console.log('Prev');
}
function prevFun(){
    if(prevButton.classList.contains('disabled')){

    }else{

        currentSlide--;
        checker();
    }

}
function NetxFun(){
    if(nextButton.classList.contains('disabled')){

    }else{

        currentSlide++;
        checker();
    }

}
for(i=0 ; i< bullets.length; i++){
    bullets[i].onclick = changeBulletnumb
}
function changeBulletnumb(){
    currentSlide = this.textContent;
    console.log(5);
    checker();
}

function checker(){
    prevButton.onclick = prevFun;
    nextButton.onclick = NetxFun;
    document.getElementById('silder-number').textContent = `Slide #${currentSlide} of ${slideCont}`;
    removeAllactiveclasses();
    sliderImgs[currentSlide-1].classList.add('active');
    
    theMainUl.children[currentSlide -1].classList.add('current');


    if(currentSlide == 1 ){
        prevButton.classList.add('disabled')
    }else{
        prevButton.classList.remove('disabled')
    }
    if(currentSlide ==  slideCont){
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove('disabled')
    }
    
    
}
function removeAllactiveclasses(){
    sliderImgs.forEach(function(img){
        img.classList.remove('active');
    })
    bullets.forEach(function(eachbullet){
        eachbullet.classList.remove('current')
    })
}
