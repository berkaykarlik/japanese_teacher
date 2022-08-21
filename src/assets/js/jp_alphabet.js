
const UNICODE_HIRAGANA_START = 0x3041;
const UNICODE_KATAKANA_START =  0x30A1;
const HIRA2KATA_OFFSET = UNICODE_KATAKANA_START - UNICODE_HIRAGANA_START;

const HIRAGANA_ROMAJI = {
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


function hira2kata(ch){
    console.log("ch",ch.charCodeAt(0));
    const code = ch.charCodeAt(0) + HIRA2KATA_OFFSET;
    console.log("converted ch",code);
    return String.fromCharCode(code);
};

function kata2hira(ch){
    console.log("ch",ch.charCodeAt(0));
    const code = ch.charCodeAt(0) - HIRA2KATA_OFFSET ;
    console.log("converted ch",code);
    return String.fromCharCode(code);
};

export  {HIRAGANA_ROMAJI, hira2kata, kata2hira};
