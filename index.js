import {Chat} from './chat/chat'
import './chat/styles.scss'

const chat = new Chat('#test', {
    namechat: 'Friends chat',
    themechat:'neon',
    username: 'Petrooo',
    avatar: '',
    toaskname: false,
    host: 'http://localhost:3000'

})

window.c = chat







