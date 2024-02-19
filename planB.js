document.getElementById('moodForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('music').style.display = 'block';
  let mood = document.getElementById('moodInput').value.toLowerCase();

  let songs = {
    happy: [
      { title: "Watermelon Sugar", artist: "Harry Styles", trackID: "6UelLqGlWMcVH1E5c4H7lY"},
      { title: "Happier", artist: "Ed Sheeran" , trackID: "2RttW7RAu5nOAfq6YFvApB" },
      { title: "Bang Bang", artist: "Benny Dayal, Neeti Mohan", trackID: "464gxyow4GJ7Wuz3cHrdBB" },
    ],
    sad: [
      { title: "Teri Ho Na Saki", artist: "King", trackID:"4wr3QwOxLqh4uBlHKhtTlx" },
      { title: "Eyes on You", artist: "Vwillz", trackID:"6fVazKhR05IQGpyTDnyd3L" },
    ],
    romance: [
      { title: "Apna Bana Le", artist: "Arijit Singh", trackID:"5bQ6oDLqvw8tywmnSmwEyL" },
      { title: "Closer", artist: "The Chainsmokers", trackID:"7BKLCZ1jbUBVqRi2FVlTVw" },
      { title: "positions", artist: "Ariana Grande", trackID:"35mvY5S1H3J2QZyna3TFe0" },
      { title: "Baarishein", artist: "Anuv Jain", trackID:"3WLJ7D5kh44K5eJ1NqZQ6W" },
    ],
    rap: [
      { title: "Machayenge", artist: "Emiway Bantai", trackID:"5yUxKeTYbocSVfT1BUWJpb" },
      { title: "Genda Phool", artist: "Badshah", trackID:"0gzu5mm36VJH2Zqu8sQPTf" },
      { title: "Bella Ciao", artist: "Manu Pilas", trackID:"3lWzVNe1yFZlkeBBzUuZYu" },
    ],
    seedhemaut: [
      { title: "khata flow", artist: "Seedhe Maut", trackID:"2qb5ASYergjk2qNLvYEQJD" },
      { title: "lukka chuppi", artist: "Seedhe Maut", trackID:"6DtmY1H3Uo1g6MoD6sKKjm" },
      { title: "nanchaku", artist: "Seedhe Maut", trackID:"6btegcu44HqquqArljhFxu" },
      { title: "shaktimaan", artist: "Seedhe Maut", trackID:"0DPjmMiDoPiMNPTtorAMeY" },
      { title: "Akatsuki", artist: "Seedhe Maut", trackID:"1Iqn110sncyGBTNEHGnhAU" },
      { title: "Champions", artist: "Seedhe Maut", trackID:"7h43vNZTZgv5EcSQaUaMNg" },
    ],
    neutral: [
      { title: "Dil Chahte Ho", artist: "Jubin Nautiyal", trackID:"60dbY1IYizdQQVhC4QTyEc" },
      { title: "Tera Yaar Hoon Main", artist: "Arijit Singh", trackID:"4ZTx87kAgEwlPMzoojFZWg" },
      { title: "Tum Hi Ho", artist: "Arijit Singh", trackID:"56zZ48jdyY2oDXHVnwg5Di" },
      { title: "Tum Jo Aaye", artist: "Rahat Fateh Ali Khan", trackID:"2iZeKe5avjtKVmjfSFkpxd " },
    ],
    angry: [
      { title: "The Electro Suite", artist: "Various Artists", trackID:"7MyNaeme4s4l9MfBjRHRe6" },
      { title: "Why So Serious?", artist: "Hans Zimmer", trackID:"1wdoaja3ueHHvzobn2jE2n" },
      { title: "Astronaut In The Ocean", artist: "Masked Wolf", trackID:"3Ofmpyhv5UAQ70mENzB277" },
    ],
    surprise: [
      { title: "MONTERO (Call Me By Your Name)", artist: "Lil Nas X", trackID:"67BtfxlNbhBmCDR2L2l8qd" },
      { title: "Levitating (feat. DaBaby)", artist: "Dua Lipa", trackID:"5nujrmhLynf4yMoMtj8AQF"},
      { title: "Blinding Lights", artist: "The Weeknd", trackID:"0VjIjW4GlUZAMYd2vXMi3b" },
      { title: "drivers license", artist: "Olivia Rodrigo", trackID:"5wANPM4fQCJwkGd4rN57mH " },
    ]
  };

  if (songs[mood]) {
    let recommendedSongs = songs[mood].map(function(song) {
      let embedLink = song.trackID ? `https://open.spotify.com/embed/track/${song.trackID}` : '';
      return `${song.title} by ${song.artist}<br><iframe src="${embedLink}" style="border-radius:12px"  width="330" height="100" frameborder="0" allow="encrypted-media"></iframe>`;
      
    });

    // Get the music div and clear its contents
    const musicDiv = document.getElementById('music');
    musicDiv.innerHTML = '';

    // Create a new list and append it to the music div
    const musicList = document.createElement('ul');
    recommendedSongs.forEach(function(song) {
      const li = document.createElement('li');
      li.innerHTML = song;
      musicList.appendChild(li);
    });
    musicDiv.appendChild(musicList);
  } else {
    alert("Sorry, we don't have any songs for that mood.");
  }
});
