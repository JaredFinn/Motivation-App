<template>
  <div>
      <div class="home">
          <div id="title-bar">
            <title-bar/>
          </div>
            <section class="hero is-large is-info">
                <div class="columns is-mobile">
                    <div v-for="card in cards" :key="card" class="column">
                        <a @click="clickActive"><card/></a>
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div v-for="card in cards" :key="card" class="column">
                        <a @click="clickActive"> <card/></a>
                    </div>
                </div>

                <modal :modalActive="cardClicked" v-on:modalInactive="cardClicked = false"/>
                
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
        ],
        cardClicked: false,
    }),
    components: { TitleBar, Card, Modal },
    methods: {
        clickActive(){
            this.cardClicked = true;
        },
    }

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