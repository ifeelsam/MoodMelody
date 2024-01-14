const moodForm = document.getElementById('moodForm');
const musicDiv = document.getElementById('music');

// Get the user's mood input and send it to the server for processing
moodForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const moodInput = document.getElementById('moodInput').value;
    fetch('/api/mood', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mood: moodInput })
    }).then((response) => response.json())
      .then((data) => {
          // Display the music recommendations in the #music div
          const musicList = document.createElement('ul');
          data.tracks.forEach((track) => {
              const li = document.createElement('li');
              li.textContent = track.name;
              musicList.appendChild(li);
          });
          musicDiv.innerHTML = '';
          musicDiv.appendChild(musicList);
      })
      .catch((error) => console.log(error));
});
