const loader=document.querySelector(".gift");

const page=document.getElementById("site");

const loading=document.getElementById("loader");

const music=document.getElementById("bgMusic");

loader.onclick=()=>{

loading.style.display="none";

page.style.display="block";

music.play();

}

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},350);

document.getElementById("explore").onclick=()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

};
/* Scroll Animation */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".memory").forEach(item=>{

observer.observe(item);

});

document.querySelectorAll(".photo").forEach(item=>{

observer.observe(item);

});
/* ================= LETTERS ================= */

/* ================= LETTERS ================= */

const letters = [

`Hey,

I am glad that I am still there as a part of your life and wishing you on your day.

And probably glad that I got to know you.

Call it destiny or an accident...

But it's the accident I love the most. ❤️

— Boo`,

`We met as strangers.

Two different peeps from two different cities leaning forward for each other.

Decreasing distances...

Growing love day by day...

And now attached so deeply that knowing something feels different is enough to make us wonder. 😂

Pyaar me chutiye ho gye h dono. ❤️😂

— Boo`,

`Thank you for being this generous.

Thank you for making my wishes come true even before I ask.

Thank you for being my foodie partner.

Thank you for being YOU with me.

Love you always. ❤️

— Boo`

];

let currentLetter = 0;
let typingInterval = null;

const letterBox = document.getElementById("typedLetter");

function typeLetter(index){

    clearInterval(typingInterval);

    letterBox.textContent = "";

    const text = letters[index];

    let i = 0;

    typingInterval = setInterval(() => {

        if(i < text.length){

            letterBox.textContent += text.charAt(i);
            i++;

        }else{

            clearInterval(typingInterval);

        }

    },30);

}

typeLetter(currentLetter);

document.getElementById("nextLetter").addEventListener("click",()=>{

    currentLetter = (currentLetter + 1) % letters.length;
    typeLetter(currentLetter);

});

document.getElementById("prevLetter").addEventListener("click",()=>{

    currentLetter = (currentLetter - 1 + letters.length) % letters.length;
    typeLetter(currentLetter);

});
/* ================= MUSIC ================= */

const bgMusic = document.getElementById("bgMusic");
const voiceNote = document.getElementById("voiceNote");

const NORMAL_VOLUME = 0.8;
const VOICE_VOLUME = 0.08; // 8%

bgMusic.volume = NORMAL_VOLUME;

function smoothVolume(target, duration = 800) {

    clearInterval(bgMusic.fadeInterval);

    const start = bgMusic.volume;
    const stepTime = 20;
    const steps = duration / stepTime;
    const change = (target - start) / steps;

    let count = 0;

    bgMusic.fadeInterval = setInterval(() => {

        count++;
        bgMusic.volume += change;

        if (count >= steps) {
            bgMusic.volume = target;
            clearInterval(bgMusic.fadeInterval);
        }

    }, stepTime);
}

voiceNote.addEventListener("play", () => {
    smoothVolume(VOICE_VOLUME);
});

voiceNote.addEventListener("pause", () => {
    smoothVolume(NORMAL_VOLUME);
});

voiceNote.addEventListener("ended", () => {
    smoothVolume(NORMAL_VOLUME);
});
/* ================= SECRET ================= */

const heart=document.getElementById("heartButton");

const secret=document.getElementById("secretMessage");

heart.onclick=()=>{

secret.style.display="block";

secret.scrollIntoView({

behavior:"smooth"

});

}
/* ======================= */

const replay=document.getElementById("replay");

replay.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* Balloon Generator */

setInterval(()=>{

const balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-50px";

balloon.style.fontSize=(25+Math.random()*35)+"px";

balloon.style.animation="balloon 10s linear";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},10000);

},1000);