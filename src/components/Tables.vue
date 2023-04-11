<template>
    <div id="tables">
        <div class="table_wrap">
            <h1>Hiragana</h1>
            <table class="kanatable" id="hiraganatable">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="vowel in vowels" :key="vowel">{{ vowel }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tuple, index) in groupedHiraganaRomaji" :key="index">
                        <td>{{ consonants[index] }}</td>
                        <td v-for="item in tuple" :key="item.hiragana">{{ item.kana }}({{ item.romaji }})</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table_wrap">
            <h1>Katakana</h1>
            <table class="kanatable" id="katakanatable">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="vowel in vowels" :key="vowel">{{ vowel }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tuple, index) in groupedHiraganaRomaji" :key="index">
                        <td>{{ consonants[index] }}</td>
                        <td v-for="item in tuple" :key="item.hiragana">{{ hira2kata(item.kana) }}({{ item.romaji }})</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>


<script setup>
import { HIRAGANA_ROMAJI, hira2kata, kata2hira, vowels, consonants } from '@/assets/js/jp_alphabet.js';
import { ref, computed } from 'vue';

const groupedHiraganaRomaji = computed(() => {
    const tuples = [];
    let tuple = [];

    for (const [kana, romaji] of Object.entries(HIRAGANA_ROMAJI)) {
        tuple.push({ kana, romaji });

        if (tuple.length === 5) {
            tuples.push(tuple);
            tuple = [];
        }
    }

    if (tuple.length > 0) {
        tuples.push(tuple);
    }

    return tuples.slice(1);
});


</script>


<style>
#tables {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 200px;
    margin-top: 50PX;
}

.table_wrap{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

}

.kanatable {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.kanatable th,
.kanatable td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

.kanatable th {
    background-color: #f2f2f2;
}

.kanatable tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>