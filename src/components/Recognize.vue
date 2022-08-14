
<template>
<div>
    <p id="letter"> {{'\u3041'}}</p>
    <input type="text" id="answer" name="answer_textbox" placeholder="enter romaji here...">
</div>
</template>


<script setup>

</script>


<style>
div {
    display: flexbox;
    flex-direction: column;
    text-align: center;
}

#letter {
    font-size: 100px;
    font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    margin-bottom: 10px;
}

</style>
