<template>
  <div class="modal" :class="{ 'is-active': modalActive }">
    <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                
                
                <p class="modal-card-title">
                    <button @click="favoriteSwitch" class="button" :class="{ 'is-success': currentModal.back.favorite }">Is this your favorite today?</button>
                </p>
                <button @click="$emit('modalInactive')" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="content">
                    <p>~</p>
                    <p>{{ currentModal.back.quote }}</p>
                    <strong>- {{ currentModal.back.author }}</strong>
                </div>
            </section>
            <footer class="modal-card-foot">
                
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({

    }),
    props: {
        modalActive: Boolean,
        currentModal: Object,
    },
    methods:{
        favoriteSwitch(){
            this.currentModal.back.favorite = !this.currentModal.back.favorite,
            this.$emit('changeFavoriteStatus', this.currentModal.back.favorite)
        }
    }
}
</script>

<style>

</style>