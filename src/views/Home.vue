<template>
  <div>
      <div class="home">
          <div id="title-bar">
            <title-bar/>
          </div>

            <section class="hero is-large ">
                <p class="direct">Click on the cards and choose your favorite quote.</p>
                <div class="columns">
                    <div class="column">
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

    }),
    components: { TitleBar, Card },
    methods: {

    }
}
</script>

<style>
.hero{
    border-radius: 20px;
    margin-top: 10px;
    width: 310px;
    margin: auto;
    background-image: linear-gradient(30deg, rgb(29, 127, 238), rgb(198, 255, 172));
}
.home{

}
#title-bar{
    margin-bottom: 20px;
}
.direct{
    margin: 5px;
}

</style>