function anagram(str1, str2) {
    let anag1 = str1.replace(/[^а-яА-Я]/g, '').split('').sort().join('')
    let anag2 = str2.replace(/[^а-яА-Я]/g, '').split('').sort().join('')

   if(anag1 == anag2){
       console.log('это анаграмма')
   }

    // let valid = 0

    // // let anag1 = str1.split('')
    // // let anag2 = str2.split('')
    // for (let i = 0; i<anag1.length; i++){
    //     for(let j = 0; j<anag2.length; j++){
    //         if(anag1[i] === anag1[j]){
    //             valid ++
    //             i++
                
    //         }
    //     }
    // }
    // if(valid === anag1.length){
    //     console.log('это анаграмма')
    // }
}
anagram('кот31 токток', 'ток кот кот')