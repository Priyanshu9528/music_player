const music = new Audio('audio/10.mp3');
// music.play();

const songs = [{
        id: 1,
        songName: `Barsaat ki Dhun <br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/1.jpg"
    },
    {
        id: 2,
        songName: `Thoda Thoda Pyaar<br>
        <div class="subtitle">Stebin Ben, Nilesh Ahuja</div>`,
        poster: "images/2.jpg"
    },
    {
        id: 3,
        songName: `Tera Rusna Manana Mera Time Par Na Aana <br> 
        <div class="subtitle"> Raju Punjabi</div>`,
        poster: "images/3.jpg"
    },
    {
        id: 4,
        songName: `Koyi-Gabbru-Tera-Yaar-Na-Ho-Jaye-Taiyon-Mouser-Laune<br> 
        <div class="subtitle">Shivjot</div>`,
        poster: "images/4.jpg"
    },
    {
        id: 5,
        songName: `Gulab <br> 
        <div class="subtitle">Jatinder Shah, Akhil Pasreja</div>`,
        poster: "images/5.jpg"
    },
    {
        id: 6,
        songName: `Main-Thoda-Teri-Aankhon-Pe-Mar-Gaya<br>
        <div class="subtitle"> King, Zahrah S Khan</div>`,
        poster: "images/6.jpg"
    },
    {
        id: 7,
        songName: `Teri-Mithi-Mithi-Gal-Soniya<br>
        <div class="subtitle">Jubin Nautiyal | Payal Dev, Shanvi Srivastava </div>`,
        poster: "images/7.jpg"
    },
    {
        id: 8,
        songName: `Mere-Apno-Ne-Mujhe-Hai-Pukara<br> 
        <div class="subtitle">Roopkumar Rathod, Udit Narayan</div>`,
        poster: "images/8.jpg"
    },
    {
        id: 9,
        songName: `2 kilo perfume<br>
        <div class="subtitle">Sandeep Surila and Komal Chaudhary|Ajay Hooda</div>`,
        poster: "images/9.jpg"
    },
    {
        id: 10,
        songName: `Tum Hi Aana <br>
        <div class="subtitle"> Renuka Panwar | Kunaal Verma</div>`,
        poster: "images/10.jpg"
    },
    {
        id: 11,
        songName: `Matak Matak <br>
        <div class="subtitle">Renuka Panwar</div>`,
        poster: "images/11.jpg"
    },
    {
        id: 12,
        songName: `Tuition Badmashi Kaa<br>
        <div class="subtitle">MASOOM SHARMA, Manisha Sharma</div>`,
        poster: "images/12.jpg"
    },
    {
        id: 13,
        songName: `Ab Tere Bin Jee Lenge hum<br>  
        <div class="subtitle">Kumar Sanu</div>`,
        poster: "images/13.jpg"
    },
    {
        id: 14,
        songName: `Jazbaat<br>  
        <div class="subtitle">Renuka Panwar</div>`,
        poster: "images/14.jpg"
    },
    {
        id: 15,
        songName: `Haansda Khelta Panchhi Tha Chhod Gya Ambara Ki Yaari <br> 
        <div class="subtitle">Billa Sonipat Ala</div>`,
        poster: "images/15.jpg"
    },
    {
        id: 16,
        songName: `Haye Gall Naal Yaar Nu Tu Laake Rakh Lai<br>
        <div class="subtitle"> Jerry</div>`,
        poster: "images/16.jpg"
    },
    {
        id: 17,
        songName: `Sare-Tare <br> 
        <div class="subtitle"> Akhil Pasreja</div>`,
        poster: "images/17.jpg"
    },
    {
        id: 18,
        songName: `Attt Karti <br> 
        <div class="subtitle">Jassie Gill</div>`,
        poster: "images/18.jpg"
    },
    {
        id: 19,
        songName: `Yaar Jatt De<br> 
        <div class="subtitle">Jassie Gill</div>`,
        poster: "images/19.jpg"
    },
    {
        id: 20,
        songName: `8 Parche  <br> 
        <div class="subtitle">Baani Sandhu, Gur Sidhu</div>`,
        poster: "images/20.jpg"
    },
    {
        id: 21,
        songName: `Tere Piche Piche <br>
        <div class="subtitle">Baani Sandhu</div>`,
        poster: "images/21.jpg"
    },
    {
        id: 22,
        songName: `jatt da blood <br> 
        <div class="subtitle">Mankirt Aulakh</div>`,
        poster: "images/22.jpg"
    },
    {
        id: 23,
        songName: `Kesariya <br> 
        <div class="subtitle">Amitabh Bhattacharya, Arijit Singh, and Pritam Chakraborty</div>`,
        poster: "images/23.jpg"
    },
    {
        id: 24,
        songName: `Dhokha<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "images/24.jpg"
    },
    {
        id: 25,
        songName: `Meri Zindagi Hai Tu <br>
        <div class="subtitle"> Jubin Nautiyal, Neeti Mohan </div>`,
        poster: "images/25.jpg"
    },
    {
        id: 26,
        songName: `Teri Mitti<br> 
        <div class="subtitle"> B Praak</div>`,
        poster: "images/26.jpg"
    },
    {
        id: 27,
        songName: `Mehabooba<br> 
        <div class="subtitle">Ravi Basrur</div>`,
        poster: "images/27.jpg"
    },
    {
        id: 28,
        songName: `Dil Galti Kar Baitha Hai <br>  
        <div class="subtitle">Shardul Rathod, Meet Bros, Jubin Nautiyal</div>`,
        poster: "images/28.jpg"
    },
    {
        id: 29,
        songName: `Nagin Dance <br>
        <div class="subtitle">Viruss, Ullumanati </div>`,
        poster: "images/29.jpg"
    },
    {
        id: 30,
        songName: `3 peg<br> 
        <div class="subtitle">Sharry Maan</div>`,
        poster: "images/30.jpg"
    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//search data start

let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
    ${songName}
    </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
///problem h abhi 
input.addEventListener('keyup', () => {
        let input_value = input.value.toUpperCase();
        let items = search_result.getElementsByTagName('a');

        for (let i = 0; i < items.length; i++) {
            let as = items[i].getElementsByClassName('content')[0];
            let text_value = as.textContent || as.innerText;

            if (text_value.toUpperCase().indexOf(input_value) > -1) {
                items[i].style.display = "flex";
            } else {
                items[i].style.display = "none";
            }

            if (input_value == 0) {
                search_result.style.display = "none";
            } else {
                search_result.style.display = "";
            }

        }
    })
    ///
    //search data end

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
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

////
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songsTitle = songs.filter((els) => {
            return els.id == index;
        });

        songsTitle.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
})

///
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

//

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});



///
let back = document.getElementById('back');
let next = document.getElementById('next');
//
back.addEventListener('click', () => {
        index -= 1;
        if (index < 1) {
            index = Array.from(document.getElementsByClassName('songItem')).length;
        }

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songsTitle = songs.filter((els) => {
            return els.id == index;
        });

        songsTitle.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
    //
next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songsTitle = songs.filter((els) => {
        return els.id == index;
    });

    songsTitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

    makeAllplays();
    //
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

})

///
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})