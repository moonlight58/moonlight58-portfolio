# DotIC

> An image converter that transforms any photo into pointillist art — a style inspired by painters like Seurat.

---

##  What is it?

DotIC is a desktop application I built in Python that takes any image and recreates it using only dots. The darker areas of the original photo become large, dense dots — the lighter areas become small, barely visible ones. The result is a style reminiscent of pointillist painting.

The application has a full graphical interface, so no technical knowledge is needed to use it.

---

##  What does it do?

You load any photo, adjust a handful of sliders, and DotIC generates the dotted version in real time. The main settings include:

- **Grid density** — how many dots to use horizontally and vertically (from a rough sketch to a very fine render)
- **Dot size range** — the minimum and maximum size each dot can reach
- **Color mode** — grayscale, original colors preserved from the photo, or a sepia tone
- **Output resolution** — from 400×400 up to 1200×1200 pixels

Once the result looks right, the image can be exported as PNG or JPEG.

---

## 󱕅 Key highlights

- **Real-time progress** — a progress bar tracks the generation as it runs, since processing a fine grid can take a few seconds
- **Non-blocking UI** — image generation runs in a background thread so the interface stays responsive throughout
- **Clean graphical interface** — built with Tkinter, with sliders, radio buttons, scrollable preview, and a status bar
- **Luminance-based algorithm** — dot sizes are calculated from the luminance of each pixel, which preserves the shading and depth of the original image faithfully

---

## 󱉟 What I learned

This project was an exploration of **image processing and generative art**. The main challenge was translating the abstract concept of pointillism into a concrete algorithm — figuring out how to map pixel brightness to dot size in a way that produces a visually pleasing result.

It also pushed me to think about **UI responsiveness**: running a heavy computation on the main thread would freeze the interface, so I had to learn how to offload work to a separate thread while keeping the progress bar and status updates synchronized.

---

## 󰓌 Stack

Built with **Python**, using OpenCV for image loading and processing, Pillow for drawing and export, and Tkinter for the graphical interface.

---

## 󱖫 Status

Core functionality is complete. Possible next steps include adding a background color picker, support for non-square grids, and a batch processing mode for multiple images.


## 󰊤 Github
> [Check out the code on GitHub](https://github.com/moonlight58/dotic)