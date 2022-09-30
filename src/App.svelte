<script lang="ts">
  import CharacterLength from './lib/CharacterLength.svelte'
  import Password from './lib/Password.svelte'

  let password = 'dfdas43x'
  let characterLength = 10
  let includeUppercase = true
  let includeLowercase = true
  let includeNumbers = true
  let includeSymbols = false

  let strength = 20

  const weights = {
    includeUppercase: 20,
    includeLowercase: 20,
    includeNumbers: 20,
    includeSymbols: 20,
    characterLength: 20,
  }

  // $: strength = getStrength({
  //   characterLength,
  //   includeLowercase,
  //   includeNumbers,
  //   includeUppercase,
  //   includeSymbols,
  // })

  const getStrength = ({
    characterLength,
    includeLowercase,
    includeNumbers,
    includeUppercase,
    includeSymbols,
  }) => {
    if (characterLength >= 8) {
      strength += weights[characterLength]
    }
    if (includeUppercase) {
      strength += weights[includeUppercase]
    }
    if (includeLowercase) {
      strength += weights[includeLowercase]
    }
    if (includeNumbers) {
      strength += weights[includeNumbers]
    }
    if (includeSymbols) {
      strength += weights[includeSymbols]
    }

    return strength
  }
</script>

<main>
  <h1>Password Generator</h1>
  <div class="container">
    <Password {password} />

    <CharacterLength length={characterLength} />
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
