// main.js

let sound_img = document.getElementById('sound-image');

let vol_img = document.getElementById('volume-image');
let vol_num = document.getElementById('volume-number');
let vol_slide = document.getElementById('volume-slider');

let air_horn = document.getElementById('radio-air-horn');
let car_horn = document.getElementById('radio-car-horn');
let party_horn = document.getElementById('radio-party-horn');

let horn_audio = document.getElementById('horn-sound');
let honk_btn = document.getElementById('honk-btn');


/* Volume Control Event Listeners */
vol_num.addEventListener('input', function(){
    vol_slide.value = vol_num.value;
    
    updateVol();
});

vol_slide.addEventListener('input', function(){
    vol_num.value = vol_slide.value;

    updateVol();
    
});

/* Update volume function for volume controls */
function updateVol() {
    horn_audio.volume   = vol_slide.value / 100;

    if (vol_num.value > 66) {
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
    } else if (vol_num.value > 33) {
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
    } else if (vol_num.value > 0) {
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
    }

    if (vol_num.value > 0) {
        honk_btn.disabled = false;
    } else {
        honk_btn.disabled = true;
    }
}


/* Radio Button Event Listeners */
air_horn.addEventListener('input', function(){
    updateHorn("air-horn", "air-horn");
});

car_horn.addEventListener('input', function(){
    updateHorn("car-horn", "car");
});

party_horn.addEventListener('input', function(){
    updateHorn("party-horn", "party-horn");
});


/* Update function for radio buttons */
function updateHorn(horn_name, img_name) {
    horn_audio.src = "./assets/media/audio/" + horn_name + ".mp3";
    sound_img.src = "./assets/media/images/" + img_name + ".svg";
}

honk_btn.addEventListener('click', function(){        
    horn_audio.play();
    event.preventDefault();
});