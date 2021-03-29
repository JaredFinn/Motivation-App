<template>
  <div>
      <div class="home">
          <div id="title-bar">
            <title-bar/>
          </div>

            <section class="hero is-large is-info">
                <div class="columns is-mobile">
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