<script lang="ts">
  import {onMount} from 'svelte'

  export let characterLength
  let input

  onMount(() => {
    input.style.setProperty('--background-size', `${getBackgroundSize(input)}%`)
  })

  function setBackgroundSize(event: any) {
    event.target.style.setProperty('--background-size', `${getBackgroundSize(event.target)}%`)
  }

  // for input range left side
  function getBackgroundSize(input) {
    const min = +input.min || 1
    const max = +input.max || 20
    const value = +characterLength
    const size = ((value - min) / (max - min)) * 100

    return size
  }
</script>

<div class="box">
  <div class="top-box">
    <p class="info">Character Length</p>
    <p class="length">{characterLength}</p>
  </div>
  <div class="slider-container">
    <label for="slider" class="hidden-label" />
    <input
      type="range"
      name="slider"
      id="slider"
      min="1"
      max="20"
      bind:value={characterLength}
      on:input={setBackgroundSize}
      bind:this={input}
    />
  </div>
</div>

<style>
  .box {
    margin-bottom: 10px;
    margin-top: 24px;
  }

  .top-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .info {
    font-size: 18px;
    color: var(--almost-white);
  }

  .length {
    font-size: var(--heading-l);
    color: var(--neon-green);
  }

  /* SLIDER START */

  .slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hidden-label {
    display: none;
  }

  #slider {
    width: 100%;
    background-color: var(--dark-gray);
    margin-bottom: 2rem;
  }

  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: var(--almost-black);
  }

  input[type='range']:focus {
    outline: none;
  }

  /* SLIDER END */

  /* SLIDER CHROME START */

  input[type='range']::-webkit-slider-runnable-track {
    background: linear-gradient(to right, var(--neon-green), var(--neon-green)),
      var(--very-dark-gray);
    background-size: var(--background-size, 0%) 100%;
    background-repeat: no-repeat;
    height: 0.5rem;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.75rem;
    height: 1.75rem;
    background-color: var(--almost-white);
    border-radius: 50%;
    margin-top: -0.5rem;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    cursor: pointer;
    background-color: var(--very-dark-gray);
    border: 2px solid var(--neon-green);
  }

  /* SLIDER CHROME END */

  /* SLIDER FIREFOX START */

  input[type='range']::-moz-range-track {
    background-color: var(--very-dark-gray);
    height: 0.5rem;
  }

  input[type='range']::-moz-range-progress {
    background-color: var(--neon-green);
    height: 0.5rem;
  }

  input[type='range']::-moz-range-thumb {
    -moz-appearance: none;
    width: 1.75rem;
    height: 1.75rem;
    background-color: var(--almost-white);
    border-radius: 50%;
    border: none;
    margin-top: -0.5rem;
  }

  input[type='range']::-moz-range-thumb:hover {
    box-sizing: border-box;
    cursor: pointer;
    background-color: var(--very-dark-gray);
    border: 2px solid var(--neon-green);
  }

  input[type='range']::-moz-range-thumb:active {
    box-sizing: border-box;
    cursor: pointer;
    background-color: var(--very-dark-gray);
    border: 2px solid var(--neon-green);
  }

  /* SLIDER FIREFOX END */

  @media (max-width: 600px) {
    .box {
      margin-bottom: 8px;
      margin-top: 16px;
    }

    .top-box {
      margin-bottom: 16px;
    }

    .info {
      font-size: 18px;
      color: var(--almost-white);
    }

    .length {
      font-size: var(--heading-m);
      color: var(--neon-green);
    }

    #slider {
      margin-bottom: 1.3rem;
    }
  }
</style>
