const music = new Audio('audio/a1.mp3');

const songs = [
    {
        id: "1",
        songName: `Fallen Angels<br>
        <div class="subtitle">Black Veil Brides</div>`,
        poster: "img/song_1.jpg"
    },
    {
        id: "2",
        songName: `Just Pretend<br>
        <div class="subtitle">Bad Omens</div>`,
        poster: "img/song_2.jpg"
    },
    {
        id: "3",
        songName: `Kool-Aid<br>
        <div class="subtitle">Bring Me The Horizon</div>`,
        poster: "img/song_3.jpg",
    },
    {
        id: "4",
        songName: `The Downfall Of Us All<br>
        <div class="subtitle">A Day To Remember</div>`,
        poster: "img/song_4.jpg",
    },
    {
        id: "5",
        songName: `If I'm James Dean, You're Audrey Hepburn <br>
        <div class="subtitle">Sleeping With Sirens</div>`,
        poster: "img/song_5.jpg",
    },
    {
        id: "6",
        songName: `Check Yes, Juliet<br>
        <div class="subtitle">We The Kings</div>`,
        poster: "img/song_6.jpg",
    },
    {
        id: "7",
        songName: `I'm Not Okay<br>
        <div class="subtitle">My Chemical Romance</div>`,
        poster: "img/song_7.jpg",
    },
    {
        id: "8",
        songName: `Thnks fr th Mmrs<br>
        <div class="subtitle">Fall Out Boy</div>`,
        poster: "img/song_8.jpg",
    },
    {
        id: "9",
        songName: `Emperror's New Clothes<br>
        <div class="subtitle">Panic! At The Disco</div>`,
        poster: "img/song_9.jpg",
    },
    {
        id: "10",
        songName: `The Final Episode(Let's Change The Channel)<br>
        <div class="subtitle">Asking Alexandria</div>`,
        poster: "img/song_10.jpg",
    },
    {
        id: "11",
        songName: `That's What You Get<br>
        <div class="subtitle">Paramore</div>`,
        poster: "img/song_11.jpg",
    },
    {
        id: "12",
        songName: `I Miss You<br>
        <div class="subtitle">Blink-182</div>`,
        poster: "img/song_12.jpg",
    },
    {
        id: "13",
        songName: `Weightless<br>
        <div class="subtitle">All Time Low</div>`,
        poster: "img/song_13.jpg",
    },
    {
        id: "14",
        songName: `Boom!<br>
        <div class="subtitle">Simple Plan</div>`,
        poster: "img/song_14.jpg",
    },
    {
        id: "15",
        songName: `Eu Nunca Fui Embora<br>
        <div class="subtitle">Fresno</div>`,
        poster: "img/song_15.jpg",
    },
    {
        id: "16",
        songName: `The Drug In Me Is You<br>
        <div class="subtitle">Falling In Reverse</div>`,
        poster: "img/song_16.jpg",
    },
    {
        id: "17",
        songName: `Lost in Echoes<br>
        <div class="subtitle">Caskets</div>`,
        poster: "img/song_17.jpg",
    },
    {
        id: "18",
        songName: `F.U<br>
        <div class="subtitle">Avril Lavigne</div>`,
        poster: "img/song_18.jpg",
    },
    {
        id: "19",
        songName: `Lost<br>
        <div class="subtitle">Linkin Park</div>`,
        poster: "img/song_19.jpg",
    },
    {
        id: "20",
        songName: `Holiday<br>
        <div class="subtitle">Green Day</div>`,
        poster: "img/song_20.jpg"
    },
    {
        id: "21",
        songName: `vampire<br>
        <div class="subtitle">Olivia Rodrigo</div>`,
        poster: "img/song_21.jpg"
    },
    {
        id: "22",
        songName: `Heat Waves<br>
        <div class="subtitle">Glass Animals</div>`,
        poster: "img/song_22.jpg"
    },
    {
        id: "23",
        songName: `Cream Soda<br>
        <div class="subtitle">EXO</div>`,
        poster: "img/song_23.jpg"
    },
    {
        id: "24",
        songName: `Swim<br>
        <div class="subtitle">Chase Atlantic</div>`,
        poster: "img/song_24.jpg"
    },
    {
        id: "25",
        songName: `Aquariano Nato<br>
        <div class="subtitle">MC Saci, Complexo dos Hits, DJ Sammer, Mc Pretchako</div>`,
        poster: "img/song_25.jpg"
    },
    {
        id: "26",
        songName: `Standing Next to You<br>
        <div class="subtitle">Jung Kook</div>`,
        poster: "img/song_26.jpg"
    },
    {
        id: "27",
        songName: `Shoong! (feat LISA of BLACKPINK)<br>
        <div class="subtitle">TAEYANG, LISA</div>`,
        poster: "img/song_27.jpg"
    },
    {
        id: "28",
        songName: `Poeira Estelar<br>
        <div class="subtitle">Fresno</div>`,
        poster: "img/song_28.jpg"
    },
    {
        id: "29",
        songName: `Don't Go Insane<br>
        <div class="subtitle">DPR IAN</div>`,
        poster: "img/song_29.jpg"
    },
    {
        id: "30",
        songName: `Like A Villain<br>
        <div class="subtitle">Bad Omens</div>`,
        poster: "img/song_30.jpg"
    },
    {
        id: "31",
        songName: `Circles<br>
        <div class="subtitle">Pierce The Veil</div>`,
        poster: "img/song_31.jpg"
    },
    {
        id: "32",
        songName: `UMA BAD UMA FARRA<br>
        <div class="subtitle">Di Ferrero</div>`,
        poster: "img/song_32.jpg"
    },
    {
        id: "33",
        songName: `Midas Touch<br>
        <div class="subtitle">KISS OF LIFE</div>`,
        poster: "img/song_33.jpg"
    },
    {
        id: "34",
        songName: `YOUtopia<br>
        <div class="subtitle">Bring Me the Horizon</div>`,
        poster: "img/song_34.jpg"
    },
    {
        id: "35",
        songName: `Therefore I Am<br>
        <div class="subtitle">Billie Eilish</div>`,
        poster: "img/song_35.jpg"
    },
    {
        id: "36",
        songName: `FREAK<br>
        <div class="subtitle">YUQI</div>`,
        poster: "img/song_36.jpg"
    }
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

//Master Play

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});


//Master Play Music Update

const makeItPlay = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}

const makeHighlight = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.color = 'rgb(255, 255, 255)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
          
        music.src = `audio/a${index}.mp3`;
        poster_master_play.src = `img/song_${index}.jpg`;
        
        music.play();

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

            makeHighlight();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.color = "rgb(255, 105, 10)";

            makeItPlay();
            el.target.classList.add('bi-pause-circle-fill');
            el.target.classList.remove('bi-play-circle-fill');
            wave.classList.add('active1'); 
    });
});



// Player Bar

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    if (isNaN(min1, sec1)) {
        
    } else {
        currentEnd.innerText = `${min1}:${sec1}`;
    }

    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;

    if (isNaN(min1, sec1)) {
        
    } else {
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    }   
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

//Volume Bar

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    } if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    } if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

// Skip and Next Buttons

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;

    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/a${index}.mp3`;
    poster_master_play.src = `img/song_${index}.jpg`;

    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

        makeHighlight();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.color = "rgb(255, 105, 10)";

        makeItPlay();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
});

next.addEventListener('click', () => {
    index ++;

    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `audio/a${index}.mp3`;
    poster_master_play.src = `img/song_${index}.jpg`;

    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

        makeHighlight();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.color = "rgb(54, 226, 236)";

        makeItPlay();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
})

//Popular Songs Scroll

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 320;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 320;
});

//Popular Artists Scroll

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 320;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 320;
});

//Buttons

let followButton = document.getElementById('followButton');

followButton.addEventListener('click', () => {
    followButton.style.color = "rgb(255, 255, 255, .1) "
    followButton.style.background = "rgb(255, 255, 255, .1)"
    followButton.style.border = "rgb(255, 255, 255)"
    followButton.style.cursor = 'unset';
    followButton.innerHTML = "FOLLOWED";    
})

let playNewsButton = document.getElementById('playNewsButton');

let NewSingle = document.getElementById('32')

playNewsButton.addEventListener('click', (el) => {

    index = 32;
    music.src = `audio/a${index}.mp3`;
    poster_master_play.src = `img/song_${index}.jpg`;

    music.play(); 

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    
        makeHighlight();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.color = "rgb(54, 226, 236)";
        
        makeItPlay();
        NewSingle.classList.add('bi-pause-circle-fill');
        NewSingle.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');

})

const Profile = document.querySelector(".user");
const exitButton = document.querySelector("#menu_user");

Profile.addEventListener("click", () => {
    if (exitButton.style.display === "none" || exitButton.style.display === "") {
        exitButton.style.display = "block";
    } else {
        exitButton.style.display = "none";
    }
});

