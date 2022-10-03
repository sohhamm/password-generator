<script lang="ts">
  import CharacterLength from './lib/CharacterLength.svelte'
  import CheckboxOptions from './lib/CheckboxOptions.svelte'
  import Password from './lib/Password.svelte'
  import Strength from './lib/Strength.svelte'
  import {StrengthEnum} from './types'

  let password = 'PTx1f5DaFX'
  let characterLength = 10

  let strength: StrengthEnum = StrengthEnum.s

  let isHovering = false
  $: imgSrc = isHovering ? 'src/assets/arrow-right-hover.svg' : 'src/assets/arrow-right.svg'
</script>

<main>
  <h1>Password Generator</h1>
  <div class="container">
    <Password {password} />

    <CharacterLength length={characterLength} />

    <CheckboxOptions />

    <Strength {strength} />

    <button
      class="generate"
      on:mouseenter={() => (isHovering = true)}
      on:mouseleave={() => (isHovering = false)}
    >
      GENERATE <img src={imgSrc} alt="right icon" class="right-icon" />
    </button>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: #817d92;
    margin-bottom: 31px;
  }
  .container {
    width: 540px;
    height: 632px;
    background-color: var(--dark-gray);
    padding: 32px;
    padding-top: 0px;
  }

  .generate {
    width: 100%;
    background-color: var(--neon-green);
    color: var(--dark-gray);
    margin-top: 32px;
    padding: 18px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .generate:hover {
    border: 2px solid var(--neon-green);
    color: var(--neon-green);
    background-color: transparent;
    cursor: pointer;
  }

  .right-icon {
    margin-left: 24px;
  }
</style>
