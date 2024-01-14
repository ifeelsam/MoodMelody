document.getElementById('moodForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('music').style.display = 'block';
    let mood = document.getElementById('moodInput').value.toLowerCase();

    let songs = {
        happy: [
            {title: "Watermelon Sugar", artist: "Harry Styles"},
            {title: "Happier", artist: "Ed Sheeran"},
            {title: "Bang Bang", artist: "Benny Dayal, Neeti Mohan"},
        ],
        sad: [
            {title: "Teri Ho Na Saki", artist: "King"},
            {title: "Baarishein", artist: "Anuv Jain"},
            {title: "Eyes on You", artist: "Vwillz"},
        ],
        romance: [
            {title: "Apna Bana Le", artist: "Arijit Singh"},
            {title: "Closer", artist: "The Chainsmokers"},
            {title: "positions", artist: "Ariana Grande"},
        ]

       
    };

    if (songs[mood]) {
        let recommendedSongs = songs[mood].map(function(song) {
            return song.title + " by " + song.artist;
        });

        // Get the music div and clear its contents
        const musicDiv = document.getElementById('music');
        musicDiv.innerHTML = '';

        // Create a new list and append it to the music div
        const musicList = document.createElement('ul');
        recommendedSongs.forEach(function(song) {
            const li = document.createElement('li');
            li.textContent = song;
            musicList.appendChild(li);
        });
        musicDiv.appendChild(musicList);
    } else {
        alert("Sorry, we don't have any songs for that mood.");
    }
});