<template>
  <div class="translation-input">
    <mdc-textfield class="-textfield" v-model="text"
      multiline
      label="Hint text" rows="0" cols="0" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TranslationInput extends Vue {
  private text = '';
}
</script>

<style lang="scss">
// @import 'vue-mdc-adapter/dist/textfield/styles';

.translation-input {
  max-width: 100vw;
  // overflow: hidden;
  position: relative;

  .-textfield {
    background-color: var(--mdc-theme-primary, #6200ee);
    width: 100%;
    // padding-bottom: 42px;
    & > .mdc-text-field {
      width: inherit;
      margin-top: 0;
      border: none;

      &--disabled {
        opacity: .5;
        &, .mdc-floating-label {
          background-color: transparent;
        }
      }

      .mdc-text-field__input {
        height: 4em;
        max-height: 16em;
        min-height: 2em;
        width: 100%;
        max-width: 100%;
        min-width: calc(100% - 32px);
        padding-top: 0;
        color: var(--mdc-theme-text-primary-on-dark, #ffffff);
      }
      .mdc-text-field:not(.mdc-text-field--disabled),
      .mdc-floating-label {
        color: var(--mdc-theme-text-hint-on-dark, #ffffff);
      }
      .mdc-floating-label {
        top: 0;
        &--float-above {
          color: transparent;
        }
      }
    }
  }
}
</style>