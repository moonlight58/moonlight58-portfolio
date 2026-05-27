# Sagittarius

> A personal AI assistant that runs entirely on your own machine — no subscriptions, no data sent to the cloud.

---

##  What is it?

Sagittarius is a web application I designed and built from scratch as a personal project. The idea came from a simple frustration: most AI assistants require a paid subscription and send your conversations to external servers.

Sagittarius solves that by running everything **locally** on your computer. You own your data, you choose your AI model, and nothing ever leaves your machine.

A live preview is available at [sagittarius.grothlin.fr](https://sagittarius.grothlin.fr) — note that the AI features require a local setup to work, but you can explore the interface freely.

---

##  What does it do?

The application is organized around **workspaces** — dedicated environments each tailored to a specific task:

- **Code** — an assistant that helps write, explain, or debug code
- **Mail** — a drafting assistant for writing professional emails
- **Chat** — a general-purpose conversation interface

Each workspace keeps its own conversation history, so you can switch between contexts without losing your previous exchanges.

---

## 󱕅 Key highlights

- **Full privacy** — all AI processing happens on your machine via [Ollama](https://ollama.com), an open-source local model runner
- **Model flexibility** — works with any compatible AI model (Mistral, LLaMA, Gemma, etc.), switchable at any time
- **Clean interface** — custom dark theme with a sidebar, responsive input bar, and smooth transitions
- **Markdown support** — AI responses are rendered with proper formatting and syntax-highlighted code blocks

---

## 󱉟 What I learned

This project pushed me to work with real-time data streaming (the AI response appears word by word, like typing), state management across multiple chat sessions, and building a UI that feels polished without relying on any component library.

It also made me think seriously about **product design** — how to present complex technical functionality in a way that feels simple and approachable for the user.

---

## 󰓌 Stack

Built with **Vue 3**, styled with custom CSS, powered by **Ollama** on the backend.

---

## 󱖫 Status

Actively in development — the Calendar workspace and file attachment support are planned next.

## 󰐎 Preview

Available online at [sagittarius.grothlin.fr](https://sagittarius.grothlin.fr) (AI features disabled, but the interface is fully accessible).

![Preview of sagittarius](https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/preview/sagittarius-preview-1.GIF)

---

## 󰊤 Github
> [Check out the code on GitHub](https://github.com/moonlight58/sagittarius)