// const now = () => {
//   return 30
// }

// const later = () => {
//   result = result * 2
//   console.log('результ: ', result)
// }

// var result = now()

// setTimeout(later, 1000)\
// setTimeout(later2, 5000)
// setTimeout(later3, 1000)
// setTimeout(later4, 100000)
// ajax() 
// ///


// // EvenLoop - массив, первый пришел первый вышел

// const eventLoop = []
// let event

// // цикл работает безконечно
// while (true) {
  
//    const flag = () => {
//     // блок выполения
//   }

//   // обрабатываем тик
//   if (eventLoop.length > 0) {
    
//     // получить следующее событие в EvenLoop
//     event = eventLoop.shift()

   
//     // проверяет флаг выполнения
//     if( flag) {
//        // выполняем полученое событие
//       try {
//         event()
//       }
//       catch (error) {
//         reportError(error)
//       }
//     }
    

//   }

// }

// const [age, setAge] = useState(24)
// setAge(25)

// class Example export
//   constructor(props) {
//   super(props) 
//     this.state: {age: 24}
//   }

  let str1 = 'Казак'
  const str2 = str1.toLowerCase().split('').reverse().join('')

  if(str1.toLowerCase() === str2){
    console.log('true')
  }else {
    console.log('false')
  }