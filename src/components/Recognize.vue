
<template>
<div>
    <p id="letter_p"> {{letter}}</p>
    <input type="text" id="answer" name="answer_textbox" placeholder="enter romaji here...">
</div>
</template>


<script setup>
    import { ref } from 'vue';

    const unicode_hiragana_start = 0x3041;
    const unicode_hiragana_end = 0x3096;

    let letter = ref(null);

    function update_letter(){
        let rand_hiragana = Math.floor(Math.random() * (unicode_hiragana_end - unicode_hiragana_start + 1)) + unicode_hiragana_start ;
        letter = ref(String.fromCharCode(rand_hiragana));
    }
    update_letter();
</script>


<style>
div {
    display: flexbox;
    flex-direction: column;
    text-align: center;
}

#letter_p {
    font-size: 100px;
    font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    margin-bottom: 10px;
}

</style>
