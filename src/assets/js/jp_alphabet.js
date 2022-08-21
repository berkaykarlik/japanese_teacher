
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


function get_all_kana_paired(){
    for(let i = 0; i < 83; i++) {
        console.log(String.fromCharCode(0x3041+i),String.fromCharCode(0x30A1+i));
    }
}

export  {HIRAGANA_ROMAJI, get_all_kana_paired};
