# SpotCLI

> A Spotify client that lives entirely in your terminal — no browser, no app, just a command line.

---

##  What is it?

SpotCLI is a command-line application I built in C that lets you control Spotify entirely from a terminal. It connects to the Spotify API using OAuth2 authentication and gives you full control over your music without ever opening the Spotify app.

This was a deliberate challenge: build something feature-complete, in a low-level language, communicating directly with a real-world API.

---

##  What does it do?

SpotCLI offers two ways to interact with it. You can use quick commands directly from the terminal — for example, searching for a track or checking what's currently playing — or switch to an interactive menu that guides you through all available features.

The main capabilities include:

- **Music search** — search for tracks, artists, or albums and save results directly to your library
- **Playback control** — play, pause, skip, seek, adjust volume, toggle shuffle and repeat
- **Library management** — browse your saved tracks and albums, add or remove them
- **Playlist management** — create, edit, and delete playlists, add or remove tracks
- **Queue control** — view your upcoming queue and add tracks to it
- **Multi-device support** — see all active Spotify devices and transfer playback between them

---

## 󱕅 Key highlights

- **Written in C** — the entire project is built without any high-level framework, which required careful memory management and manual HTTP request handling
- **Real OAuth2 flow** — authentication works by opening a browser URL, then SpotCLI launches a local HTTP server to catch the callback and exchange it for a token automatically
- **Full Spotify API coverage** — the project wraps a large portion of the Spotify Web API into a clean, organized C library
- **Token persistence** — credentials are stored locally and refreshed automatically when they expire, so you only log in once

---

## 󱉟 What I learned

This project forced me to think carefully about **software architecture in C** — organizing a large codebase into logical modules (authentication, HTTP, API wrappers, UI) without the safety nets that higher-level languages provide.

Working directly with HTTP requests, JSON parsing, and OAuth2 also gave me a much deeper understanding of how APIs actually work under the hood, beyond just calling a library function.

---

## 󰓌 Stack

Built entirely in **C**, using libcurl for HTTP requests, json-c for JSON parsing, and ncurses for the terminal interface.

---

## 󱖫 Status

Core features are complete and functional. Extended search types (playlists, audiobooks) and a richer TUI interface are planned for the next phase.

## 󰐎 Preview

SpotCLI in action is shown in the screenshots below. The first image shows the search functionality, while the second image displays the player interface with current track information and playback controls.
![SpotCLI in action](https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/preview/spotcli-1.png)
![SpotCLI Player](https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/preview/spotcli-2.png)

---

## 󰊤 Github

> [Check out the code on GitHub](https://github.com/moonlight58/spotcli)