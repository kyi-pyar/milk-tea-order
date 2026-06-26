function getShiftJudgement(storeName,staffCount){
    let rule=""
    if(staffCount<=0){
        rule="エラー：出勤人数を確認してください。"
    }
    else if(staffCount<=2){
        rule='最小人数で営業中。店長！他の店舗からヘルプを呼んでください！'
    }
    else if(staffCount<=4){
        rule='通常通り営業中。ホール、キッチン・ドリンクを分担できます。'
    }
    else if(staffCount<=7){
        rule="ピークタイム対応可。マルゲリータとクワトロフォルマッジも回せます。"
    }
    else if(staffCount>=8){
        rule="多すぎです。何もしないバイトが続出中。"
    }
    return`
    ECC Pizza ${storeName}店
    出勤人数：${staffCount}名
    シフト判断：${rule}`
}
console.log(getShiftJudgement("中崎町本店",'3'))
console.log(getShiftJudgement("梅田店",'1'))
console.log(getShiftJudgement("天神橋筋六丁目店",'5'))
console.log(getShiftJudgement("天満橋店",'10'))