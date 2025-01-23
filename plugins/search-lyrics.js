/*const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "lyrics",
    desc: "Get the lyrics of a song.",
    category: "music",
    react: "🎶",
    filename: __filename
},
async (conn, mek, m, { from, reply, text }) => {
    // Extract song title and artist from the message text
    const [songTitle, artist] = text.split('|').map(str => str.trim());

    if (!songTitle || !artist) {
        return reply("Please provide the song title and artist in the format: `!lyrics <song_title> | <artist>`");
    }

    try {
        // Replace spaces with '+' for URL encoding
        const song = songTitle.replace(/\s+/g, '+');
        const songArtist = artist.replace(/\s+/g, '+');

        // Construct the API URL
        const url = `https://api.davidcyriltech.my.id/lyrics?t=song   a={songArtist}`;

        // Fetch lyrics from the API
        const response = await axios.get(url);
      const data = response.data;

        // Check if the response contains lyrics
        if (data.lyrics) {
            const lyricsMessage = `
🎶 *Lyrics for*: songTitle by{artist}

${data.lyrics}

*Lyrics provided by MR FRANK OFC*
            `;
            return reply(lyricsMessage);
        } else {
            return reply("Sorry, I couldn't find the lyrics for this song. Please check the song title and artist.");
        }
    } catch (e) {
        console.error("Error fetching lyrics:", e);
        reply("¢συℓ∂ ησт ƒєт¢н α lуrιc. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});

*/
  
