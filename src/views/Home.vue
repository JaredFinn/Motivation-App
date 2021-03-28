<template>
  <div>
      <div class="home">
          <div id="title-bar">
            <title-bar/>
          </div>

            <section class="hero is-fullheight is-info">
                <div class="columns">
                    <div v-for="card in cards" :key="card" class="column">
                        <card/>
                    </div>
                </div>
                <div class="columns">
                    <div v-for="card in cards" :key="card" class="column">
                        <card/>
                    </div>
                </div>
            </section>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import TitleBar from '../components/TitleBar.vue'


export default {
    data: () => ({
        cards: [
            "Card1",
            "Card2",
            "Card3",
            "Card4"
        ]
    }),
    components: { TitleBar, Card },

}
</script>

<style>
.hero{
    border-radius: 20px;
    margin-top: 10px;
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