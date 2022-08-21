<template>
<div>
    <transition name="bounce">
        <p id="result_p" v-if="result" :style="{color:res_color}"> {{result}} </p>
    </transition>
    <transition name="fade" mode="out-in">
        <p id="letter_p" :key="letter"> {{letter}}</p>
    </transition>
    <input v-model="answer" type="text" id="answer" name="answer_textbox" placeholder="enter romaji here...">
    <button @click="check_answer" id="answer_btn">Check Answer</button>
</div>
</template>

<script setup>
    import { ref } from 'vue';
    import  {HIRAGANA_ROMAJI, hira2kata} from '@/assets/js/jp_alphabet.js';

    // from https://github.com/WaniKani/WanaKana/blob/master/src/utils/kanaToRomajiMap.js


    let letter = ref(null);
    let result = ref(null);
    let res_color = ref(null);
    let answer = ref(null);

    function random_letter () {
        var keys = Object.keys(HIRAGANA_ROMAJI);
        return keys[keys.length * Math.random() << 0];
    };

    function check_answer () {
        result.value = null
        if (answer.value == HIRAGANA_ROMAJI[letter.value]) {
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
    }

    letter.value = random_letter();

</script>

<style>
div {
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

