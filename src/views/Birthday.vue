<template>
  <div class="bday">
      <p id="t" class="title is-1 is-family-primary">
            <Roller class="roll-text" text="You can do anything! " transition="3" :charList="['','Y', 'o', 'u', 'c', 'a', 'n', 'd', 'y', 't', 'h', 'i', 'g', '!']" defaultChar=""/>
            <router-link to="/home" class="dot--delayed">
                <i id="cake" class="fas fa-heart"></i>
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
    padding-top: 100px;
    margin: auto;
}

#cake{
    color: rgb(97, 179, 255);
}
@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.dot--delayed {
  animation: blink 2s infinite 6s;
}
</style>