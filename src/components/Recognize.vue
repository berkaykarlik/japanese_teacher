<template>
  <div id="recogdiv">
      <transition name="bounce">
          <p id="result_p" v-if="result" :style="{color:res_color}"> {{result}} </p>
      </transition>
      <transition name="fade" mode="out-in">
          <p id="letter_p" :key="letter"> {{letter}}</p>
      </transition>
      <input v-model="answer" type="text" id="answer" name="answer_textbox" placeholder="enter romaji here...">
      <button @click="check_answer" id="answer_btn">Check Answer</button>
      <Toggle :opt1="'hiragana'" :opt2="'katakana'" v-model="alphabet" />
  </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import  {HIRAGANA_ROMAJI, hira2kata, kata2hira} from '@/assets/js/jp_alphabet.js';
    import Toggle from '@/components/Toggle.vue'


    let alphabet = ref('hiragana');
    let letter = ref(null);
    let result = ref(null);
    let res_color = ref(null);
    let answer = ref(null);


    function random_letter () {
        const keys = Object.keys(HIRAGANA_ROMAJI);
        let rand_letter = keys[keys.length * Math.random() << 0]
        if (alphabet.value == 'katakana')
          rand_letter = hira2kata(rand_letter);
        return rand_letter;
    };


    watch(alphabet, (alphabet) => {
      if (alphabet == "hiragana")
          letter.value = kata2hira(letter.value);
      else
          letter.value = hira2kata(letter.value);
    });


    function check_answer () {
        result.value = null
        let letter_val =  alphabet.value == 'hiragana' ? letter.value : kata2hira(letter.value);
        if (answer.value == HIRAGANA_ROMAJI[letter_val]) {
            setTimeout(() => {
                result.value = "Correct!";
                letter.value = random_letter();
                setTimeout(() => {result.value= null},1000);
            },100);
            res_color.value = "green";

        } else {
            setTimeout(() => {
                result.value = "Incorrect!";
                setTimeout(() => {result.value= null},1000);
            },100);
            res_color.value = "red";
        }
    };

    letter.value = random_letter();

</script>

<style>
#recogdiv {
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: stretch;
    gap: 10px;
}

#letter_p {
    font-size: 100px;
    font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    text-align: center;
}

#result_p {
    font-size: 30px;
    font-family: sans-serif;
    text-align: center;
    color: red;
}

#answer_btn{
    font-size: 20px;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: 1px transparent;
    background-color: turquoise;
    cursor: pointer;
}

#answer_btn:hover{
    background-color: #00b8d4;
}

#answer{
    font-size: 20px;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid black;
    text-align: center;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

