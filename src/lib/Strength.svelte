<script lang="ts">
  import {StrengthEnum} from '../types'

  export let strength: StrengthEnum
</script>

<div class="box">
  <p>STRENGTH</p>
  <div class="right-box">
    {#if strength === StrengthEnum.tw}
      <p class="info">TOO WEAK!</p>
      <div class="bars">
        <div class="bar bar-tw" />
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>
    {:else if strength === StrengthEnum.w}
      <p class="info">WEAK</p>
      <div class="bars">
        <div class="bar bar-w" />
        <div class="bar bar-w" />
        <div class="bar" />
        <div class="bar" />
      </div>
    {:else if strength === StrengthEnum.m}
      <p class="info">MEDIUM</p>
      <div class="bars">
        <div class="bar bar-m" />
        <div class="bar bar-m" />
        <div class="bar bar-m" />
        <div class="bar" />
      </div>
    {:else if strength === StrengthEnum.s}
      <p class="info">STRONG</p>
      <div class="bars">
        <div class="bar bar-s" />
        <div class="bar bar-s" />
        <div class="bar bar-s" />
        <div class="bar bar-s" />
      </div>
    {:else}
      <div class="bars">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>
    {/if}
  </div>
</div>

<style>
  .box {
    width: 100%;
    background-color: #18171f;
    margin-top: 32px;
    padding: 18px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: var(--body);
    color: var(--gray);
  }

  .info {
    font-size: var(--heading-m);
    color: var(--almost-white);
  }

  .right-box {
    display: flex;
    align-items: center;
  }

  .bars {
    display: flex;
    margin-left: 15.5px;
    column-gap: 8px;
  }

  .bar {
    width: 10px;
    height: 28px;
    border: 2px solid var(--almost-white);
  }

  .bar-m {
    background-color: var(--yellow);
    border-color: var(--yellow);
  }

  .bar-tw {
    background-color: var(--red);
    border-color: var(--red);
  }

  .bar-w {
    background-color: var(--orange);
    border-color: var(--orange);
  }

  .bar-s {
    background-color: var(--neon-green);
    border-color: var(--neon-green);
  }

  @media (max-width: 600px) {
    .box {
      padding: 16px;
    }
    .info {
      font-size: var(--body);
    }
  }
</style>
