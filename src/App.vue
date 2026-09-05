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
/* Fonts (Lora / DM Sans / DM Mono) are loaded via <link> in index.html
   for a non-blocking, faster first paint. */

/*
   DESIGN TOKENS
 */
.portfolio {
  --bg: #fafaf8;
  --bg-tint: #f4f2ee;
  --bg-inset: #edeae4;
  --text: #1c1917;
  --text-2: #44403c;
  --text-3: #6b645f;
  --border: rgba(28, 25, 23, 0.1);
  --border-mid: rgba(28, 25, 23, 0.18);
  --accent: #c2693a;
  --accent-light: #f5e8e0;

  /* Semantic callout tokens (shared by project pages) */
  --success: #2e7d52;
  --success-bg: #edf7f0;
  --success-text: #1a4d32;
  --warning: #b45309;
  --warning-bg: #fef3e2;
  --warning-text: #7c3d0e;
  --info: #2563a8;
  --info-bg: #eaf1fb;
  --info-text: #1a3a5c;
  --code-bg: rgba(0, 0, 0, 0.06);

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

/*
   DARK THEME — token overrides only; every component reads these vars,
   so the whole UI follows. Toggled via <html data-theme="dark">.
 */
[data-theme='dark'] .portfolio {
  --bg: #1a1816;
  --bg-tint: #211e1b;
  --bg-inset: #2a2622;
  --text: #f4f1ec;
  --text-2: #c4bcb2;
  --text-3: #9a9088;
  --border: rgba(244, 241, 236, 0.1);
  --border-mid: rgba(244, 241, 236, 0.2);
  --accent: #db8a59;
  --accent-light: rgba(219, 138, 89, 0.16);

  --success: #6fc593;
  --success-bg: rgba(61, 143, 95, 0.16);
  --success-text: #a9dcbf;
  --warning: #e0a45f;
  --warning-bg: rgba(180, 83, 9, 0.2);
  --warning-text: #e6b483;
  --info: #6fa8dc;
  --info-bg: rgba(37, 99, 168, 0.22);
  --info-text: #a8c8e8;
  --code-bg: rgba(255, 255, 255, 0.1);
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
