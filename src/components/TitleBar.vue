<template>
  <div class="title-bar is-mobile" >
        <p id="t" class="title is-4 is-family-primary">
            <Roller class="roll-text" text="Daily •" transition="3" :charList="['','D', 'a', 'i', 'y', 'l',  '•']" defaultChar=""/>
            <Roller class="roll-text" text="Affirmation" transition="3" :charList="['','A', 'f', 'r', 'm', 't', 'o', 'n', 'i', 'a']" defaultChar=""/>
          
          <router-link to="/">
                <i id="heart" class="fas fa-heart"></i>
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
#heart{
  color: rgb(247, 51, 142);
}
.roll-text{
  margin: auto;
}

</style>