<template>
  <!-- Missing key in v-for -->
  <ul>
    <li v-for="item in items">{{ item.name }}</li>
  </ul>

  <!-- Using v-html (potential XSS vulnerability) -->
  <div v-html="rawHtml"></div>

  <!-- Inconsistent event naming (should be kebab-case) -->
  <button @click="submitForm"></button>

  <!-- Empty block -->
  <div class="empty-block"></div>

  <!-- No padding between blocks -->
  <div class="first-block">
    <p>First block content</p>
  </div>
  <div class="second-block">
    <p>Second block content</p>
  </div>
</template>

<script>
// @ts-nocheck
// Non-TypeScript script (missing lang="ts")
// Inconsistent component naming (not PascalCase)
export default {
  name: 'bad-component',

  // Props without validation
  props: ['title', 'items', 'rawHtml'],

  // Missing emits declaration

  // Data with arrow function (not recommended in Vue 2)
  data: () => ({
    unusedData: 'This data is never used',
  }),

  // Method without return type
  methods: {
    submitForm() {
      // Using this.$emit without declaring the event
      this.$emit('formSubmitted', { success: true });
    },

    // Unused method
    unusedMethod() {
      console.log('This method is never used');
    },
  },

  // Lifecycle hook with side effect
  mounted() {
    // Direct DOM manipulation (should use refs)
    document.querySelector('.empty-block').textContent = 'Modified';
  },
};
</script>

<style>
/* Non-scoped styles (could cause global conflicts) */
.empty-block {
  height: 50px;
  width: 100%;
}

/* Duplicate selector */
.empty-block {
  background-color: #f5f5f5;
}
</style>
