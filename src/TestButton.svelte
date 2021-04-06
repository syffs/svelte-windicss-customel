<script lang="ts">
    export let text = 'Default Text'
    export let className = ''
    export let color = '#000000'
</script>

<svelte:options tag="test-button" />

<button
        style="--theme-color: {color}"
        class="test-btn {className}"
        class:selected={$$props.selected}
        on:click
>
    {text}
</button>

<!--<style>-->
<style lang="postcss">
    .test-btn {
        @apply focus:outline-none select-none bg-transparent text-black border-1
        cursor-pointer rounded py-1 px-1 sm:py-2 sm:px-2 max-w-full flex flex-1 flex-wrap justify-center gap-1;
        min-width: 150px;
        border-color: var(--theme-color);
        transition: border 200ms, box-shadow 200ms;
        @media (hover: hover) {
            &:hover {
                @apply outline-none text-white;
                box-shadow: 0 0 0 1px inset var(--theme-color);
                border-color: var(--theme-color);
                background-color: var(--theme-color);
            }
        }
        &.selected {
            border-color: var(--theme-color);
            background-color: var(--theme-color);
            &, &:hover, &:focus {
                @apply text-white;
            }
        }
    }
</style>
