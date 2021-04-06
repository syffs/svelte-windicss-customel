<script lang="ts">
    import TestButton from "./TestButton.svelte";
    export let buttons = 2
    export let text = 'Default Text'
    export let color = '#000000'
    let selection = null
</script>

<svelte:options tag="test-buttons-group" />

<div class="btn-group flex flex-col content-start" style="--theme-color: {color}">
    <div class="caption">
        {text} group
        <button class="info-btn">
            info
        </button>
    </div>
    <div class="flex flex-wrap gap-2">
        {#each Array(buttons) as _, i}
            <TestButton
                    text="{text} {i}"
                    selected="{selection === i}"
                    on:click={({target}) => {target.blur(); selection  = (selection === i ? null : i)}}>
            </TestButton>
        {/each}
    </div>
</div>

<!--<style>-->
<style lang="postcss">
    .btn-group {
        font-family: 'Nunito Sans', Helvetica, sans-serif;
        @apply text-sm;
        .caption {
            .info-btn {
                @apply inline-flex bg-transparent border-0 p-0 cursor-pointer focus:outline-none;
                color: var(--theme-color);
            }
        }
    }
</style>
