<template>
  <div class="title-bar is-mobile" >
        <p id="t" class="title is-4 is-family-primary">
            <Roller class="roll-text" text="You're •" transition="3" :charList="['','Y', 'o', 'u', '\'', 'r', 'e',  '•']" defaultChar=""/>
            <Roller class="roll-text" text="Beautiful" transition="3" :charList="['','B', 'e', 'a', 'u', 't', 'i', 'f', 'u', 'l']" defaultChar=""/>
          
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
.title-bar{
  margin: auto;
}

</style>