<template>
    <div>
        <ul class="flashcard-list">
            <li v-on:click="toggleCard(card)" v-for="card in cards" :key="card">
                <transition name="flip">
                    <div class="content">
                        <p v-bind:key="card.flipped" class="card is-size-6">
                            {{ card.flipped ? card.back.quote : card.front.someArt }}
                        </p>
                </div>
                </transition>
            </li>
            <div>
                <modal :modalActive="cardClicked" v-on:modalInactive="toggleCard(currentCard)" :currentModal="currentCard"/>
            </div>
        </ul>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
    data: () => ({
        cards: [
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Instead of worrying about what you cannot control, shift your energy to what you can create."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"Take responsibility of your own happiness, never put it in other people’s hands."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
            {
                front: {
                    someArt: "Some Art Perhaps"
                },
                back: {
                    quote: '"More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate."',
                    author: "Roy T. Bennett"
                },
                flipped: false,
            },
        ],
        newFront: '',
        newBack: '',
        error: false,
        cardClicked: false,
        currentCard: null,
    }),
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
      this.cardClicked = !this.cardClicked;
      this.currentCard = card;
    },
    addNew: function() {
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
  
  .container {
    max-width: 100%;
    padding: 2em;
  }
  
  .card {
    display: block;
    width: 273px;
    height: 350px;
    margin: 30px;
    padding: 80px 50px;
    background-color: #51aae5;
    border-radius: 7px;
    text-align: center;
    line-height: 27px;
    cursor: pointer;
    position: relative;
    color: #fff;
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
    background-color: #e65f51;
    }
  
  li:nth-child(2n+1) .card{
    background-color: #a17de9;
    }
  
  li:nth-child(4n) .card{
    background-color: #feca34;
    }
  
  li:nth-child(5n-2) .card{
    background-color: #51aae5;
    }
  
  li:nth-child(4n+4) .card{
    background-color: #feca34;
    }
  
  li:nth-child(-7n+7) .card{
    background-color: #e46055;
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
  
  .flip-enter, .flip-leave {
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