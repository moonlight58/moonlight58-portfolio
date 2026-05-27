<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ projectName }}.md</h2>
          <button class="close-btn" @click="closeModal">✕</button>
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

const closeModal = () => {
  emit('close')
}

const loadMarkdown = async () => {
  if (!props.isOpen || !props.projectName) return

  try {
    const projectNameLower = props.projectName.toLowerCase()
    const response = await fetch(`/projects/${projectNameLower}/${props.language}.md`)

    if (!response.ok) {
      throw new Error('Failed to load markdown')
    }

    const markdown = await response.text()
    renderedMarkdown.value = md.render(markdown)
  } catch (error) {
    renderedMarkdown.value = `<p>Error loading project details.</p>`
    console.error('Error loading markdown:', error)
  }
}

watch(() => props.isOpen, loadMarkdown)
watch(() => props.projectName, loadMarkdown)
watch(() => props.language, loadMarkdown)
</script>

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--color-bg);
  border: 1px solid rgba(79, 172, 254, 0.3);
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
}

.modal-header h2 {
  margin: 0;
  color: var(--color-primary);
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: var(--color-muted);
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: var(--color-primary);
}

.modal-body {
  padding: 32px;
}

.markdown-content {
  color: var(--color-text);
  line-height: 1.8;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3 {
  color: var(--color-primary);
  margin-top: 24px;
  margin-bottom: 12px;
}

.markdown-content hr {
  border: none;
  border-top: 1px solid rgba(79, 172, 254, 0.2);
  margin: 24px 0;
}

.markdown-content p {
  margin: 12px 0;
}

.markdown-content blockquote {
  border-left: 4px solid rgba(79, 172, 254, 0.3);
  padding-left: 16px;
  color: var(--color-muted);
  margin: 16px 0;
}

.markdown-content code {
  background: rgba(79, 172, 254, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--color-primary);
}

.markdown-content pre {
  background: rgba(79, 172, 254, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
}

.markdown-content ul,
.markdown-content ol {
  margin: 12px 0 12px 24px;
}

.markdown-content li {
  margin: 6px 0;
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
}

.markdown-content thead {
  background: rgba(79, 172, 254, 0.1);
}

.markdown-content th,
.markdown-content td {
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 8px;
  text-align: left;
}

.markdown-content a {
  color: var(--color-primary);
  text-decoration: underline;
}

.markdown-content img {
  max-width: 100%;
  border-radius: 4px;
  margin: 16px 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
