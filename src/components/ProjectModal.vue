<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content" role="dialog" :aria-label="projectName" aria-modal="true">
        <div class="modal-header">
          <h2 class="modal-title">{{ projectName }}</h2>
          <button class="modal-close" @click="closeModal" aria-label="Close">✕</button>
        </div>
        <div class="modal-body markdown-content" v-html="renderedMarkdown"></div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps({
  isOpen: Boolean,
  projectName: String,
  language: String,
})

const emit = defineEmits(['close'])

const renderedMarkdown = ref('')
const md = new MarkdownIt()

const closeModal = () => emit('close')

const loadMarkdown = async () => {
  if (!props.isOpen || !props.projectName) return
  try {
    const res = await fetch(`/projects/${props.projectName.toLowerCase()}/${props.language}.md`)
    if (!res.ok) throw new Error('Failed to load')
    renderedMarkdown.value = md.render(await res.text())
  } catch {
    renderedMarkdown.value = '<p>Error loading project details.</p>'
  }
}

watch(() => props.isOpen, loadMarkdown)
watch(() => props.projectName, loadMarkdown)
watch(() => props.language, loadMarkdown)
</script>

<style>
/* Modal uses global styles intentionally — no scoped — so markdown content is styled */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(28, 25, 23, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  padding: 20px;
}

.modal-content {
  background: var(--bg);
  border: 1px solid var(--border-mid);
  border-radius: 6px;
  max-width: 760px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 8px 40px rgba(28, 25, 23, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 1;
}

.modal-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--text-3);
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  transition: color 0.2s;
  border-radius: 3px;
}
.modal-close:hover { color: var(--text); }

.modal-body {
  padding: 32px;
}

/* ── Markdown content styles ── */
.markdown-content {
  color: var(--text-2);
  line-height: 1.75;
  font-size: 15px;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3 {
  font-family: var(--font-serif);
  font-weight: 500;
  color: var(--text);
  margin: 28px 0 12px;
  line-height: 1.3;
}
.markdown-content h1 { font-size: 1.5rem; }
.markdown-content h2 { font-size: 1.2rem; }
.markdown-content h3 { font-size: 1rem; }

.markdown-content h1:first-child,
.markdown-content h2:first-child { margin-top: 0; }

.markdown-content p { margin: 0 0 14px; }

.markdown-content hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 24px 0;
}

.markdown-content blockquote {
  border-left: 3px solid var(--accent-light);
  padding: 4px 0 4px 16px;
  color: var(--text-3);
  margin: 16px 0;
  font-style: italic;
}

.markdown-content code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--text-2);
}

.markdown-content pre {
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 16px 20px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 16px 0;
}
.markdown-content pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: 13px;
}

.markdown-content ul,
.markdown-content ol {
  margin: 0 0 14px 20px;
  padding: 0;
}
.markdown-content li { margin: 5px 0; }

.markdown-content a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.markdown-content a:hover { opacity: 0.8; }

.markdown-content img {
  max-width: 100%;
  border-radius: 4px;
  margin: 16px 0;
  border: 1px solid var(--border);
}

.markdown-content strong { color: var(--text); font-weight: 600; }

/* Transition */
.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity 0.2s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to    { opacity: 0; }
</style>