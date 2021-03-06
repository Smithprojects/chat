import { io } from "socket.io-client"
import { scrollBlockInBottom } from './utils.js'

let checkAnotherMesssage = false

// // const username = prompt('What is your name?')
 const username = 'Smith'
// // appendMessage('You joined')

function check() {
  let cheks = false
  return {
    cheks: cheks,
    func: function(){
      return cheks=!cheks
    }
  }
}

// let check2 = check()
// console.log(check2.cheks)
// console.log(check2.func())
// console.log(check2.func())
// if (check2.cheks) {
//   console.log(check2.func())
// }
// console.log(check2.func())


function blockDubleMessage(message, form ='2') {
  return `
    <div class="card-a__text card-a__text_form-${form}">
      <div class="card-a__text-position">${message}</div>
    </div>
  `
}

function youBlockMessage(message, username = 'You name', image = '/2.7fdf3601.png') {
  return `
  <div class="messages__card-a card-a">
    <div class="card-a__text card-a__text_form-2">
      <div class="card-a__text-position">${message}</div>
    </div>
    <div class="card-a__autor">
      <div class="card-a__avatar">
        <img class="card-a__img" src="${image}" alt="">
      </div>
      <div class="card-a__name">
        <p class="card-a__name-text">${username}</p>
      </div>
    </div>
  </div>
  `
}

function buddyBlockMessage(message, username = 'Buddy name', image = '/1.018fb9b1.png') {
  return `
  <div class="messages__card-a card-a card-a_f-start">
    <div class="card-a__text card-a__text_form-1">
      <div class="card-a__text-position">${message}</div>
    </div>
    <div class="card-a__autor">
      <div class="card-a__avatar">
        <img class="card-a__img" src="${image}" alt="">
      </div>
      <div class="card-a__name">
        <p class="card-a__name-text">${username}</p>
      </div>
    </div>
  </div>
  `
}

function pushMessage(socket, $allChatMessages, event) {
  event.preventDefault()
  const $messageInput = document.getElementById('message')
  
  const dataMessage = {
    message: $messageInput.value,
    checkAnotherMesssage: checkAnotherMesssage
  }

  if (!dataMessage.message) {
    alert('you did not enter anything')
    return
  }
  
  socket.emit('send-chat-message', dataMessage)
  $messageInput.value = ''

  if (!checkAnotherMesssage) {
    $allChatMessages.insertAdjacentHTML('beforeend', youBlockMessage(dataMessage.message, username))
    
    checkAnotherMesssage = true
  } else {
    $allChatMessages.lastElementChild.lastElementChild.insertAdjacentHTML('beforeBegin', blockDubleMessage(dataMessage.message))
  }
  scrollBlockInBottom()
}

export function connectUserForChat(host, username) {
  
  const socket = io(host)
  const $form = document.getElementById('messForm')
  console.log('form', $form)
  const $allChatMessages = document.querySelector('.messages__wrap')

  $form.addEventListener('submit', pushMessage.bind($form, socket, $allChatMessages))
  
  // if (!!username) {
  //   return username = prompt('What is your name?')
  // }
  
  // const username = prompt('What is your name?')
  // const username = 'Smith'
  // appendMessage('You joined')
  socket.emit('new-user', username)

  socket.on('chat-message', data => {
  
    checkAnotherMesssage = false
    console.log('data', data);
  
    if (!data.checkAnotherMesssage) {
      $allChatMessages.insertAdjacentHTML('beforeend', buddyBlockMessage(data.message, data.username))
    } else {
      $allChatMessages.lastElementChild.lastElementChild.insertAdjacentHTML('beforeBegin', blockDubleMessage(data.message,'1'))
    }
    scrollBlockInBottom()
  })

  socket.on('user-connected', username => {
    // console.log(data);
    // appendMessage(`${username} connected`)
  })

  socket.on('user-disconnect', username => {
    // appendMessage(`${username} disconnect`)
  })


}

// connectUserForChat('http://localhost:3000', 'Poule')