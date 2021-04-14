const socket = io('http://localhost:3000')
const $form = document.getElementById('messForm')
const $messageInput = document.getElementById('message')
const $displayAllMessages = document.getElementById('all_mess')
const $allChatMessages = document.querySelector('.messages__wrap')
let mess = false


// const username = prompt('What is your name?')
const username = 'Smith'
// appendMessage('You joined')
socket.emit('new-user', username)

socket.on('chat-message', data => {
 
  mess = false
  console.log('data', data);
 

  if (!data.mess) {
      
    $allChatMessages.insertAdjacentHTML('beforeend', buddyBlockMessage(data.message, data.username))
      
  } else {
        
    $allChatMessages.lastElementChild.insertAdjacentHTML('afterbegin', blockDubleMessage(data.message,'1'))
   
  }
})

socket.on('user-connected', username => {
  // console.log(data);
  // appendMessage(`${username} connected`)
})

socket.on('user-disconnect', username => {
  // appendMessage(`${username} disconnect`)
})

$form.addEventListener('submit', e => {
  e.preventDefault()
  const dataMessage = {
    message: $messageInput.value,
    mess: mess
  }
  // console.log(dataMessage.message)
  // appendMessage(`You: ${message}`)

  
  if (!mess) {
    
    $allChatMessages.insertAdjacentHTML('beforeend', youBlockMessage(dataMessage.message, username))

    socket.emit('send-chat-message', dataMessage)
    $messageInput.value = ''
    
    mess = true
  } else {
     
    $allChatMessages.lastElementChild.insertAdjacentHTML('afterbegin', blockDubleMessage(dataMessage.message))
    
    socket.emit('send-chat-message', dataMessage)
    $messageInput.value = ''
  }
})

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