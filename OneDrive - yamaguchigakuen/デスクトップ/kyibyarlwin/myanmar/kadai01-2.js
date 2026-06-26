console.log("===== 魔法学校 授業時間割 =====")
let days=["月","火","水","木","金"]
let timetable=[ ["変身術", "数占い"],                      
  ["魔法生物飼育学", "魔法薬学", "天文学"],    
  ["魔法史", "薬草学"],                      
  ["闇の魔術に対する防衛術", "占い学"],      
  ["古代ルーン語", "薬草学"]  ]

  console.log(days.length)
  console.log(timetable[1].length)

  for(let i=0;i<days.length;i++){
    for(let j=0;j<timetable[i].length;j++){
        console.log(`${days[i]}曜${j+1}限 : ${timetable[i][j]}`)
    }
    
  }

