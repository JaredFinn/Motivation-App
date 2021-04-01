<template>
  <div class="bday">
      <p id="t" class="title is-1 is-family-primary">
            <Roller class="roll-text" text="Happy " transition="3" :charList="['','H', 'a', 'p', 'y', 'B', 'i', 't', 'r', 'h', 'd']" defaultChar=""/>
            <Roller class="roll-text" text="Birthday" transition="3" :charList="['','H', 'a', 'p', 'y', 'B', 'i', 't', 'r', 'h', 'd']" defaultChar=""/>
            <Roller class="roll-text" text="Isabella" transition="3" :charList="['', 'l', 'e', 'b', 'a', 's', 'I']" defaultChar=""/>
            <router-link to="/home" class="dot--delayed">
                <i id="cake" class="fas fa-birthday-cake"></i>
            </router-link>
            <Roller class="roll-text" text="21 Woo!" transition="3" :charList="['','!', '2', '1', 'W', 'o']" defaultChar=""/>
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