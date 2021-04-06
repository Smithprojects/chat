const socket = io('http://localhost:3000')
const $form = document.getElementById('messForm')
const $messageInput = document.getElementById('message')
const $displayAllMessages = document.getElementById('all_mess')

// const username = prompt('What is your name?')
const username = 'Smith'
// appendMessage('You joined')
socket.emit('new-user', username)

socket.on('chat-message', data => {
    console.log(data);
    // appendMessage(`${data.username}: ${data.message}`)
    $messagesWrap.insertAdjacentHTML('beforeend', buddyBlockMessage(data.message, data.username))
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
    const message = $messageInput.value
    // appendMessage(`You: ${message}`)

    $messagesWrap.insertAdjacentHTML('beforeend', youBlockMessage(message, username))

    socket.emit('send-chat-message', message)
    $messageInput.value = ''
})

// function appendMessage(message) {
//     const messageElement = document.createElement('div')
//     messageElement.innerText = message
//     $displayAllMessages.append(messageElement)
// }

const $messagesWrap = document.querySelector('.messages__wrap')
console.log($messagesWrap)
// $messagesWrap.insertAdjacentHTML('beforeend', youBlockMessage('test', username))

function youBlockMessage(message, username = 'You name', image = '/2.7fdf3601.png') {
    return `
    <div class="messages__card-a card-a">
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

function buddyBlockMessage(message, username = 'Buddy name', image = '/1.018fb9b1.png') {
    return `
    <div class="messages__card-a card-a">
        <div class="card-a__autor">
            <div class="card-a__avatar">
                <img class="card-a__img" src="${image}" alt="">
            </div>
            <div class="card-a__name">
                <p class="card-a__name-text">${username}</p>
            </div>
        </div>
        <div class="card-a__text card-a__text_form-2">
            <div class="card-a__text-position">${message}</div>
        </div>
        

    </div>
    `
}