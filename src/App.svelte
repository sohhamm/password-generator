<script lang="ts">
  import CharacterLength from './lib/CharacterLength.svelte'
  import CheckboxOptions from './lib/CheckboxOptions.svelte'
  import Password from './lib/Password.svelte'
  import Strength from './lib/Strength.svelte'
  import zxcvbn from 'zxcvbn'
  import {uppercaseArr, lowercaseArr, numbersArr, symbolsArr, getRandomInt} from './utils'
  import {StrengthEnum} from './types'

  const emptyPassword = 'P4$5W0rD!'
  let password = emptyPassword
  let characterLength = 1

  let strength: StrengthEnum

  let isHovering = false
  $: imgSrc = isHovering ? 'src/assets/arrow-right-hover.svg' : 'src/assets/arrow-right.svg'

  let options = [
    {
      info: 'Include Uppercase Letters',
      enabled: false,
      arrKey: uppercaseArr,
    },
    {
      info: 'Include Lowercase Letters',
      enabled: false,
      arrKey: lowercaseArr,
    },
    {
      info: 'Include Numbers',
      enabled: false,
      arrKey: numbersArr,
    },
    {
      info: 'Include Symbols',
      enabled: false,
      arrKey: symbolsArr,
    },
  ]

  let opacity = 0.25

  const handleGenerate = () => {
    const isDisabled = options.every(option => !option.enabled)
    if (isDisabled) {
      alert('Please select atleast one checkbox')
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
  }
</script>

<main>
  <h1>Password Generator</h1>
  <div class="container">
    <Password {password} {opacity} />

    <CharacterLength {characterLength} />

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
