<script lang="ts">
  import Password from './lib/Password.svelte'

  let password='dfdas43x'
</script>

<main>
  <h1>Password Generator</h1>
  <div class='container'>
    <Password {password}/>


  </div>
</main>



<style>
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }


  h1{
    font-weight: 700;
    font-size: 24px;
    color: #817D92;
    margin-bottom: 31px;

  }
  .container{
    width: 540px;
    height: 632px;
    background-color: var(--dark-gray);
    padding: 32px;
    padding-top: 0px;
  }
</style>