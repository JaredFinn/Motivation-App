<template>
    <div>
        <ul class="flashcard-list">
            <li v-on:click="toggleCard(card)" v-for="card in cards" :key="card">
                <transition name="flip">
                    <div class="content">
                        
                        <p v-bind:key="card.flipped" class="card is-size-6">
                            {{ card.flipped ? card.back.quote : card.front.someArt }}
                            <img class="image" :src="card.front.pic" alt="oops">
                        </p>
                        <div  v-if="card.back.favorite"><i class="fas fa-heart"></i><p>Favorite</p></div>
                    </div>
                </transition>
            </li>
            <div>
                <modal :modalActive="cardClicked" v-on:modalInactive="toggleCard(currentCard)" :currentModal="currentCard" @changeFavoriteStatus="changeFavorite" />
            </div>
        </ul>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import image8 from '../assets/Isabella8.jpg'
import image9 from '../assets/Isabella9.jpg'
import image10 from '../assets/Isabella10.jpg'
import image11 from '../assets/Isabella11.jpg'
import image12 from '../assets/Isabella12.jpg'
import image13 from '../assets/Isabell13.jpg'
export default {
    data: () => ({
        cards: [
            {
                front: {
                    someArt: "<3 Boston",
                    pic: image8,
               },
                back: {
                    quote: '"Learn to value yourself, which means: fight for your happiness."',
                    author: "Ayn Rand",
                    favorite: false,
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Adults",
                    pic: image9,
                },
                back: {
                    quote: '"Happiness is a direction, not a place."',
                    author: "Sydney J. Harris",
                    favorite: false,
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "uhhh",
                    pic: image10,
                },
                back: {
                    quote: '"Put your thoughts to sleep. Do not let them cast a shadow over the moon of your heart. Let go of thinking."',
                    author: "Rumi",
                    favorite: false,
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "interesting",
                    pic: image11,
                },
                back: {
                    quote: '"Just when the caterpillar thought its world was over, it became a butterfly."',
                    author: "-",
                    favorite: false,
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "BDAY Muhfucka",
                    pic: image12,
                },
                back: {
                    quote: '"The darkest nights produce the brightest stars."',
                    author: "-",
                    favorite: false,
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Fine Wine",
                    pic: image13,
                },
                back: {
                    quote: '"You can’t stop the waves, but you can learn to swim."',
                    author: "-",
                    favorite: false,
                },
                flipped: false,
            },
            
        ],
        newFront: '',
        newBack: '',
        error: false,
        cardClicked: false,
        currentCard: null,
        image8: image8,
        image9: image9,
        image10: image10,
        image11: image11,
        image12: image12,
        image13: image13,

    }),
  methods: {
    toggleCard(card){
      card.flipped = !card.flipped;
      this.cardClicked = !this.cardClicked;
      this.currentCard = card;
    },
    addNew() {
      if(!this.newFront || !this.newBack) {
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        // set the field empty
        this.newFront = '';
        this.newBack = '';
        // Make the warning go away
        this.error= false;
      }
    },
    changeFavorite(currentCardStatus){
      this.currentCard.back.favorite = currentCardStatus
    }
  },
  props: {
        modalActive: Boolean
    },
    components:{
        Modal
    }
}
</script>

<style>
body {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
  
  ul {
    padding-left: 0;
    display: flex;
    flex-flow: row wrap;
  }
  
  li {
    list-style-type: none;
    padding: 10px 10px;
    transition: all 0.3s ease;
  }
  
  .image{
    border-radius: 10px;
  }
  .container {
    max-width: 100%;
    padding: 2em;
  }
  
  .card {
    display: block;
    width: 250px;
    height: 350px;
    margin: 30px;
    padding: 80px 50px;
    border-radius: 15px;
    text-align: center;
    line-height: 27px;
    cursor: pointer;
    position: relative;
    font-weight: 600;
    font-size: 20px;
    -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    will-change: transform;
  }
  
  li:hover{
    transform: scale(1.1);
  }
  
  li:nth-child(-n+3) .card{
    background-color: rgba(175, 250, 255, 0.842);
    }
  
  li:nth-child(2n+1) .card{
    background-color: rgba(175, 250, 255, 0.842);
    }
  
  li:nth-child(4n+2) .card{
    background-color: rgba(175, 250, 255, 0.842);
    }
  
  li:nth-child(5n-2) .card{
    background-color: rgba(175, 250, 255, 0.842);
    }
  
  li:nth-child(4n+4) .card{
    background-color: rgba(175, 250, 255, 0.842);
    }
  
  li:nth-child(-7n+7) .card{
    background-color: rgba(175, 250, 255, 0.842);
    }
  
  .delete-card {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 15px;
    opacity: .4;
    transition: all 0.5s ease;
  }
  
  .delete-card:hover, .error {
    opacity: 1;
    transform: rotate(360deg);
  }
  
  .flip-enter-active {
    transition: all 0.4s ease;
  }
  
  .flip-leave-active {
    display: none;
  }
  
  .flip-enter .flip-leave {
    transform: rotateY(180deg);
    opacity: 0;
  
  }
  
  /* Form */
  .flashcard-form{
    position: relative;
  }
  
  
  label{
    font-weight: 400;
    color: #333;
    margin-right: 10px;
  }
  
  input{
    border-radius: 5px;
    border: 2px solid #eaeaea;
    padding: 10px;
    outline: none;
  }
  
  button{
    border-radius: 5px;
    border: 1px solid #87cb84;
    background-color: #87cb84;
    padding: 8px 15px;
    outline: none;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  button:hover{
    background-color: #70a66f;
  }
  
  .error{
    margin-top: 10px;
    display: block;
    color: #e44e42;
    font-weight: 600;
  }
</style>