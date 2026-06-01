<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="portfolio">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
/* Google Fonts — loaded inline so the component is self-contained */
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

/* 
   DESIGN TOKENS
 */
.portfolio {
  --bg: #fafaf8;
  --bg-tint: #f4f2ee;
  --bg-inset: #edeae4;
  --text: #1c1917;
  --text-2: #44403c;
  --text-3: #78716c;
  --border: rgba(28, 25, 23, 0.1);
  --border-mid: rgba(28, 25, 23, 0.18);
  --accent: #c2693a;
  --accent-light: #f5e8e0;
  --font-serif: 'Lora', Georgia, serif;
  --font-sans: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'DM Mono', 'Fira Code', monospace;
  --max-w: 1160px;
  --section-gap: 120px;

  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/*  Reset helpers  */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
}
button {
  cursor: pointer;
}

/*  Scrollbar  */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--bg-tint);
}
::-webkit-scrollbar-thumb {
  background: var(--border-mid);
  border-radius: 3px;
}

/* 
   GLOBAL BUTTONS
 */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.15s;
  border: 1.5px solid transparent;
  text-decoration: none;
}

.btn--primary {
  background: var(--text);
  color: var(--bg);
  border-color: var(--text);
}
.btn--primary:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-1px);
}

.btn--ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border-mid);
}
.btn--ghost:hover {
  border-color: var(--text);
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}
</style>
