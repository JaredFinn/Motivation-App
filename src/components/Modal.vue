<template>
  <div class="modal" :class="{ 'is-active': modalActive }">
    <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Hello</p>
                <button @click="$emit('modalInactive')" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="content">
                    <h1>Hello</h1>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        cards: [
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Instead of worrying about what you cannot control, shift your energy to what you can create."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Take responsibility of your own happiness, never put it in other people’s hands."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
        ],
    }),
    props: {
        modalActive: Boolean,
        currentModal: Number,
    }
}
</script>

<style>

</style>