<script lang="ts">
  import zxcvbn from 'zxcvbn'
  import CharacterLength from './lib/CharacterLength.svelte'
  import CheckboxOptions from './lib/CheckboxOptions.svelte'
  import Password from './lib/Password.svelte'
  import Strength from './lib/Strength.svelte'
  import {SvelteToast} from '@zerodevx/svelte-toast'
  import {uppercaseArr, lowercaseArr, numbersArr, symbolsArr, getRandomInt, toast} from './utils'
  import {StrengthEnum} from './types'

  let password = 'P4$5W0rD!'
  let characterLength = 1

  let strength: StrengthEnum

  let isHovering = false
  $: imgSrc = isHovering ? 'assets/arrow-right-hover.svg' : 'assets/arrow-right.svg'

  let options = [
    {
      id: 'uppercase',
      info: 'Include Uppercase Letters',
      enabled: false,
      arrKey: uppercaseArr,
    },
    {
      id: 'lowercase',
      info: 'Include Lowercase Letters',
      enabled: false,
      arrKey: lowercaseArr,
    },
    {
      id: 'numbers',
      info: 'Include Numbers',
      enabled: false,
      arrKey: numbersArr,
    },
    {
      id: 'symbols',
      info: 'Include Symbols',
      enabled: false,
      arrKey: symbolsArr,
    },
  ]

  let opacity = 0.25

  const handleGenerate = () => {
    if (options.every(option => !option.enabled)) {
      toast('Please select atleast one checkbox ☑️', 'error')
      return
    }

    if (characterLength <= 3) {
      toast('Password length must be greater than 3 characters', 'error')
      return
    }
    const aggregateArr = []
    for (let option of options) {
      if (option.enabled) {
        aggregateArr.push(...option.arrKey)
      }
    }
    password = Array(characterLength)
      .fill(null)
      .map(() => {
        const randIdx = getRandomInt(0, aggregateArr.length)
        return aggregateArr[randIdx]
      })
      .join('')

    const {score} = zxcvbn(password)

    switch (score) {
      case 0:
      case 1:
        strength = StrengthEnum.tw
        break
      case 2:
        strength = StrengthEnum.w
        break
      case 3:
        strength = StrengthEnum.m
        break
      case 4:
        strength = StrengthEnum.s
        break
    }
    opacity = 1

    // easter egg
    if (score === 4) {
      toast('Generated a secure password! 🥳')
    }
  }
</script>

<main>
  <h1>Password Generator</h1>
  <div class="container">
    <Password {password} {opacity} />

    <CharacterLength bind:characterLength />

    <CheckboxOptions {options} />

    <Strength {strength} />

    <button
      class="generate"
      on:mouseenter={() => (isHovering = true)}
      on:mouseleave={() => (isHovering = false)}
      on:click={handleGenerate}
    >
      GENERATE <img src={imgSrc} alt="right icon" class="right-icon" />
    </button>
  </div>
  <SvelteToast />
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
    max-width: 540px;
    width: 100%;
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
    border: 2px solid var(--neon-green);
  }

  .generate:hover {
    color: var(--neon-green);
    background-color: transparent;
    cursor: pointer;
  }

  .right-icon {
    margin-left: 24px;
  }

  @media (max-width: 600px) {
    main {
      padding: 0px 16px;
    }

    h1 {
      font-size: 16px;
      margin-bottom: 16px;
    }

    .container {
      padding: 16px;
      padding-top: 0px;
    }

    .generate {
      margin-top: 16px;
      padding: 16px;
    }
  }
</style>
