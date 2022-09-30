<script lang="ts">
  import {Checkbox} from '@svelteuidev/core'
  import {createStyles} from '@svelteuidev/core'

  const useStyles = createStyles(theme => ({
    root: {
      color: theme.colors.white,
    },
  }))

  $: ({getStyles} = useStyles())

  let options = [
    {
      info: 'Include Uppercase Letters',
      enabled: true,
    },
    {
      info: 'Include Lowercase Letters',
      enabled: true,
    },
    {
      info: 'Include Numbers',
      enabled: true,
    },
    {
      info: 'Include Symbols',
      enabled: false,
    },
  ]
</script>

<div class="box">
  {#each options as option}
    <!-- <div class="checkbox-box">
      <div id="check">
        <Checkbox
          label={option.info}
          bind:checked={option.enabled}
          radius={0}
          color="$primary"
          class={getStyles()}
          override={{color: '$blue200'}}
        />
      </div>
    </div> -->

    <div class="checkbox-container">
      <input type="checkbox" name={option.info} id={option.info} bind:value={option.enabled} />
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
    margin-bottom: 1rem;
  }

  input[type='checkbox'] {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    background: transparent;
    height: 1.25rem;
    width: 1.25rem;
    border: 2px solid var(--almost-white);
    color: var(--almost-white);
  }

  input[type='checkbox']:hover {
    border: 2px solid var(--neon-green);
    transition: all 0.1s ease-in;
  }

  input[type='checkbox']:after {
    content: ' ';
    position: relative;
    left: 40%;
    top: 20%;
    width: 25%;
    height: 60%;
    border: solid var(--dark-gray);
    border-width: 0 3px 3px 0;
    transform: rotate(47deg);
    display: none;
  }

  input[type='checkbox']:checked:after {
    display: block;
  }

  input[type='checkbox']:checked {
    background: var(--neon-green);
    color: var(--almost-black);
    border: none;
  }
</style>
