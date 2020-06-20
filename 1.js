const now = () => {
  return 30
}

const later = () => {
  result = result * 2
  console.log('результ: ', result)
}

var result = now()

setTimeout(later, 1000)\
setTimeout(later2, 5000)
setTimeout(later3, 1000)
setTimeout(later4, 100000)
ajax() 
///


// EvenLoop - массив, первый пришел первый вышел

const eventLoop = []
let event

// цикл работает безконечно
while (true) {
  
   const flag = () => {
    // блок выполения
  }

  // обрабатываем тик
  if (eventLoop.length > 0) {
    
    // получить следующее событие в EvenLoop
    event = eventLoop.shift()

   
    // проверяет флаг выполнения
    if( flag) {
       // выполняем полученое событие
      try {
        event()
      }
      catch (error) {
        reportError(error)
      }
    }
    

  }

}
