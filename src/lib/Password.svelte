<script lang="ts">
  import {toast} from '../utils'

  export let password
  export let opacity

  const handleCopyToClipboard = () => {
    if (opacity === 0.25) {
      toast('Generate a password before copying to clipboard', 'error')
      return
    }
    navigator.clipboard.writeText(password).then(() => {
      toast('Successfully copied to clipboard 📋')
    })
  }
</script>

<section>
  <p style:opacity>
    {password}
  </p>
  <img src="src/assets/icon-copy.svg" alt="copy password" on:click={handleCopyToClipboard} />

  <!-- <div>
    ${msg}
  </div> -->
</section>

<style>
  section {
    border-bottom: 24px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 -32px;
    padding: 19px 32px;
  }

  p {
    font-size: var(--heading-l);
    color: var(--almost-white);
  }

  img:hover {
    filter: brightness(0) invert(1);
    cursor: pointer;
  }
</style>
