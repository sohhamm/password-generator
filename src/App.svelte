<script lang="ts">
  import CharacterLength from './lib/CharacterLength.svelte'
  import CheckboxOptions from './lib/CheckboxOptions.svelte'
  import Password from './lib/Password.svelte'
  import Strength from './lib/Strength.svelte'

  let password = 'dfdas43x'
  let characterLength = 10
</script>

<main>
  <h1>Password Generator</h1>
  <div class="container">
    <Password {password} />

    <CharacterLength length={characterLength} />

    <CheckboxOptions />

    <Strength />
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
</style>
