<script lang="ts">
export let password;
</script>

<section>
    <p>
        {password}
    </p>
    <img src='src/assets/icon-copy.svg' alt='copy' />
</section>



<style>
    section{
        border-bottom: 24px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin:0 -32px;
        padding: 19px 32px;
    }

    p{
        font-size: var(--heading-l);
        color:var(--almost-white);
    }

    img:hover{
        filter:  brightness(0) invert(1);
        cursor: pointer;
    }
</style>