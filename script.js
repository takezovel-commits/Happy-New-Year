const PASSWORD = "Kai cakep";

/* SCREENS */
const screens = {
  pw: document.getElementById("screen-password"),
  name: document.getElementById("screen-name"),
  env: document.getElementById("screen-envelope"),
  letter: document.getElementById("screen-letter")
};

const pwInput = document.getElementById("password");
const nameInput = document.getElementById("username");
const error = document.getElementById("error");
const pesan = document.getElementById("pesan");
const photo = document.getElementById("letter-photo");

/* USER DATA */
const data = {
  jordan: {
    img: "jordan.png",
    text: `Happy new year bro, thanks dah jadi sohib gw walaupun kadang sesat haha.
Lu dah gw anggep saudara gw sendiri, jangan bosen-bosen sama gw bro :). Sorry juga kalo gw ada salah kata atau sikap selama kita berteman.

I hope 2026 brings you growth, peace, and gentle strength.
Take your time, trust the process, and remember — you’re not alone.
Tertanda: Kai-oon (pler)`
  },
  azellya: {
    img: "azellya.png",
    text: `Happy New Year bocil. Terimakasih dah nemenin gw dari zaman gw ilang arah dan selalu support gw. Gw dah anggep lu sebagai adek gw sendiri ye dan jangan bosen-bosen ke gw. Kalo gw banyak duit nanti gw traktir seblak sepuasnya sama gacoan, mukbang dah mukbang. Udah 2026 gausah mikirin si itu lagi ya, lu mau buat rekor 4 taun gamon? Haha. Terimakasih udah mau jadi tempat curhat gw dan terimakasih sudah percaya ke gw. Sorry juga kalau gw ada salah dan sikap yaa.

I hope 2026 brings you growth, peace, and gentle strength.
Take your time, trust the process, and remember — you’re not alone.
Tertanda: Kentut`
  },
  mochiko: { 
    img: "mochiko.png",
    text: `Happy New Year Ochi, 2026 semoga tahun yang bisa membawa kita ke kebahagiaan dan gaada yang macem-macem lagi ya hahaha. Terimakasih sudah selalu support pakcik dan sudah percaya ke saya. Kalo ada apa-apa jangan lupa ngadu ke saya, oke? Jangan sungkan ya. Dan maaf kalau saya ada salah kata dan perbuataan yaa. 

I hope 2026 brings you growth, peace, and gentle strength.
Take your time, trust the process, and remember — you’re not alone. 
Tertanda: Pakcik Kaionn`
  },
  alvaro: { 
    img: "alvaro.png",
    text: `Happy New Year Varo, sehat selalu dan terimakasih sudah menjadi salah satu temen gw. Sorry kalo gw suka bercanda berlebihan atau apa dan gw harap kedepannya kita bisa berteman menjadi lebih baik. 

I hope 2026 brings you growth, peace, and gentle strength.
Take your time, trust the process, and remember — you’re not alone.
Tertanda: Kaionn`
  },
  andra: { 
    img: "andra.png",
    text: `Happy New Year Andra. Terimakasih sudah mau menjadi salah satu teman dan partner gw di RUJIK. Sorry kalo gw ada salah kata atau perbuatan dan semoga kedepannya kita bisa menjadi teman yang lebih baik. 

I hope 2026 brings you growth, peace, and gentle strength.
Take your time, trust the process, and remember — you’re not alone.
Tertanda: Kaionn Niko`
  },
  rosie: { 
    img: "rosie.png",
    text: `Happy New Year Rosie. Terimakasih sudah mau menjadi salah satu teman dan partner gw di RUJIK. Sorry kalo gw ada salah kata atau sikap dan semoga kedepannya kita bisa jadi teman yang lebih baik. 

I hope 2026 brings you growth, peace, and gentle strength.
Take your time, trust the process, and remember — you’re not alone.`
  },
  xylan: { 
    img: "xylan.png",
    text: `Happy New Year Xylan. Terimakasih sudah mau menjadi salah satu teman gw, selalu support gw dan tetap bertahan dari zaman gw ilang arah. Terimakasih juga udah jadi tempat curhatan dan lu juga terimakasih udah percaya sama gw ya Lan. Janga bosen-bosen sama gw hahah, btw cari yang seagama jir jangan beda server mulu. Sorry juga kalo gw ada salah kata dan perbuatan. 

I hope 2026 brings you growth, peace, and gentle strength.
Take your time, trust the process, and remember — you’re not alone.
Tertanda: Kaionn Niko`
  }
};

/* PASSWORD CHECK */
document.getElementById("pwBtn").onclick = () => {
  if(pwInput.value.trim() === PASSWORD){
    screens.pw.classList.add("hidden");
    screens.name.classList.remove("hidden");
    error.innerText = "";
  } else {
    error.innerText = "ACCESS DENIED";
  }
};

/* NAME SCREEN */
document.getElementById("nameBtn").onclick = () => {
  screens.name.classList.add("hidden");
  screens.env.classList.remove("hidden");
};

/* ENVELOPE CLICK */
document.getElementById("envelope").onclick = () => {
  const envelope = document.getElementById("envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    screens.env.classList.add("hidden");
    screens.letter.classList.remove("hidden");

    const key = nameInput.value.trim().toLowerCase();
    if(data[key]){
      pesan.innerText = data[key].text;
      photo.src = data[key].img;
    } else {
      pesan.innerText = `Happy New Year ${nameInput.value}! 🎉`;
      photo.src = "jordan.png";
    }
  }, 800);
};
