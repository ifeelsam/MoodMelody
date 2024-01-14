import React from 'react';

function MoodForm() {
  const [mood, setMood] = useState('');

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="moodInput">How are you feeling today?</label>
      <input type="text" id="moodInput" name="mood" value={mood} onChange={(e) => setMood(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

function MusicList() {
  const [tracks, setTracks] = useState([]);

  return (
    <div id="music">
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MoodForm />
      <MusicList />
    </div>
  );
}