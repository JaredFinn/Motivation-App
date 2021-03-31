<template>
  <div class="bday">
      <p id="t" class="title is-1 is-family-primary">
            <Roller class="roll-text" text="Happy Birthday" transition="3" :charList="['','H', 'a', 'p', 'y', 'B', 'i', 't', 'r', 'h', 'd']" defaultChar=""/>
            <router-link to="/home">
                <i id="cake" class="fas fa-birthday-cake"></i>
            </router-link>
         </p>
  </div>
</template>

<script>
import Roller from "vue-roller";

export default {
    components:{
        Roller
    }
}
</script>

<style>
.bday{
    padding-top: 200px;
    margin: auto;
    text-align: center;
}
.t{
    text-align: center;
}
#cake{
    color: rgb(97, 179, 255);
}
</style>