
<template>
<div>
    <p id="letter_p"> {{letter}}</p>
    <input v-model="answer" type="text" id="answer" name="answer_textbox" placeholder="enter romaji here...">
    <button @click="check_answer" id="answer_btn">Check Answer</button>
</div>
</template>


<script setup>
    import { ref } from 'vue';

    // from https://github.com/WaniKani/WanaKana/blob/master/src/utils/kanaToRomajiMap.js
    const BASIC_ROMAJI = {
        あ:'a',    い:'i',   う:'u',   え:'e',    お:'o',
        か:'ka',   き:'ki',  く:'ku',  け:'ke',   こ:'ko',
        さ:'sa',   し:'shi', す:'su',  せ:'se',   そ:'so',
        た:'ta',   ち:'chi', つ:'tsu', て:'te',   と:'to',
        な:'na',   に:'ni',  ぬ:'nu',  ね:'ne',   の:'no',
        は:'ha',   ひ:'hi',  ふ:'fu',  へ:'he',   ほ:'ho',
        ま:'ma',   み:'mi',  む:'mu',  め:'me',   も:'mo',
        ら:'ra',   り:'ri',  る:'ru',  れ:'re',   ろ:'ro',
        や:'ya',   ゆ:'yu',  よ:'yo',
        わ:'wa',   ゐ:'wi',  ゑ:'we',  を:'wo',
        ん: 'n',
        が:'ga',   ぎ:'gi',  ぐ:'gu',  げ:'ge',   ご:'go',
        ざ:'za',   じ:'ji',  ず:'zu',  ぜ:'ze',   ぞ:'zo',
        だ:'da',   ぢ:'ji',  づ:'zu',  で:'de',   ど:'do',
        ば:'ba',   び:'bi',  ぶ:'bu',  べ:'be',   ぼ:'bo',
        ぱ:'pa',   ぴ:'pi',  ぷ:'pu',  ぺ:'pe',   ぽ:'po',
        // ゔぁ:'va', ゔぃ:'vi', ゔ:'vu',  ゔぇ:'ve', ゔぉ:'vo',
        };

    let letter = ref(null);

    function random_letter () {
        var keys = Object.keys(BASIC_ROMAJI);
        return keys[keys.length * Math.random() << 0];
    };

    function check_answer () {
        if (answer.value == BASIC_ROMAJI[letter.value]) {
            alert("Correct!");
            letter.value = random_letter();
        } else {
            alert("Incorrect!");
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

</style>
