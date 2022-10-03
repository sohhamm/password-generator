<script lang="ts">
  export let options
</script>

<div class="box">
  {#each options as option}
    <div class="checkbox-container">
      <input type="checkbox" name={option.info} id={option.info} bind:checked={option.enabled} />
      <label for={option.info}>{option.info}</label>
    </div>
  {/each}
</div>

<style>
  .box {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: var(--almost-white);
    row-gap: 19px;
  }

  label {
    align-self: center;
    font-size: 1rem;
    line-height: 1.3125rem;
    margin-left: 1.25rem;
  }

  .checkbox-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  input[type='checkbox'] {
    accent-color: var(--neon-green);
    color-scheme: dark;
    width: 20px;
    height: 20px;
  }
</style>
