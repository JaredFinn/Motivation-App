<template>
  <div class="title-bar is-mobile" >
        <p class="title is-3 is-family-primary">
            <Roller class="roll-text" text="Daily • Affirmation" transition="3" :charList="['','D', 'a', 'i', 'y', 'l', 'A', 'f', 'r', 'm', 't', 'o', 'n', '•']" defaultChar=""/>
          <i id="heart" class="fas fa-heart"></i>
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
#heart{
  color: rgb(247, 51, 142);
}
.roll-text{
  margin: auto;
}
</style>