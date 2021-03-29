<template>
  <div>
      <div class="home">
          <div id="title-bar">
            <title-bar/>
          </div>

            <section class="hero is-large is-info">
                <div class="columns is-mobile">
                    <div v-for="card in cards" :key="card" class="column">
                        <a><card/></a>
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div v-for="card in cards" :key="card" class="column">
                        <a><card/></a>
                    </div>
                </div>
                <div>
                    <modal/>
                </div>



            </section>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import TitleBar from '../components/TitleBar.vue'


export default {
    data: () => ({
        cards: [
            "Card1",
            "Card2",
            "Card3",
        ]
    }),
    components: { TitleBar, Card, Modal },

}
</script>

<style>
.hero{
    border-radius: 20px;
    margin-top: 10px;
    width: 1000px;
}
.home{
    margin: auto;
    margin: 10px;
}
#title-bar{
    margin-top: 10px;
    margin-left: 20px;
}

</style>