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

    }),
    props: {
        cards: Array,
        modalActive: Boolean,
        currentModal: Number,
    }
}
</script>

<style>

</style>