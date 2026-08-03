const menus = [

{
    image:"assets/images/original.jpg",
    eng:"ORIGINAL",
    kor:"오리지널",
    desc:"가장 기본이면서 가장 완벽한 험프티덤프티 대표 에그타르트입니다."
},

{
    image:"assets/images/emmental.jpg",
    eng:"EMMENTAL",
    kor:"에멘탈치즈",
    desc:"고소한 에멘탈 치즈가 더해져 더욱 깊은 풍미를 느낄 수 있습니다."
},

{
    image:"assets/images/blueberry.jpg",
    eng:"BLUEBERRY",
    kor:"크림치즈 블루베리",
    desc:"부드러운 크림치즈와 달콤한 블루베리의 조화가 매력적인 메뉴입니다."
},

{
    image:"assets/images/chocolate.jpg",
    eng:"CHOCOLATE",
    kor:"초코",
    desc:"진한 초콜릿이 가득 들어간 달콤한 에그타르트입니다."
},

{
    image:"assets/images/applecinnamon.jpg",
    eng:"APPLE CINNAMON",
    kor:"애플시나몬",
    desc:"사과와 시나몬 향이 어우러져 따뜻한 디저트의 매력을 느낄 수 있습니다."
}

];

let current = 0;
let autoSlide;

const img = document.getElementById("menuImage");
const eng = document.getElementById("menuEng");
const kor = document.getElementById("menuKor");
const desc = document.getElementById("menuDesc");

function render(){

    img.src = menus[current].image;
    img.alt = menus[current].kor;

    eng.textContent = menus[current].eng;
    kor.textContent = menus[current].kor;
    desc.textContent = menus[current].desc;

}

function startAutoSlide(){

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        current++;

        if(current >= menus.length){
            current = 0;
        }

        render();

    }, 5000);

}

document.querySelector(".next").addEventListener("click",()=>{

    current++;

    if(current >= menus.length){
        current = 0;
    }

    render();
    startAutoSlide();

});

document.querySelector(".prev").addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = menus.length - 1;
    }

    render();
    startAutoSlide();

});

render();
startAutoSlide();