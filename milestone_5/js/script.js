const {createApp} = Vue;

createApp ({
    data(){
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    id: 0,
                    lastAccess: '07/11/2022 15:30',
                    visible: true,
                    search: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Yes!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    id: 1,
                    lastAccess: '07/11/2022 15:00',
                    visible: false,
                    search: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    id: 2,
                    lastAccess: '07/11/2022 17:00',
                    visible: false,
                    search: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    id: 3,
                    lastAccess: '06/11/2022 20:00',
                    visible: false,
                    search: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    id: 4,
                    lastAccess: '06/11/2022 19:46',
                    visible: false,
                    search: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    id: 5,
                    lastAccess: '06/11/2022 18:00',
                    visible: false,
                    search: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    id: 6,
                    lastAccess: '06/11/2022 15:30',
                    visible: false,
                    search: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    id: 7,
                    lastAccess: '06/11/2022 14:22',
                    visible: false,
                    search: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                },
            ],
            counter: 0,
            newMessageUser: '',
            now: new Date(),
            searchInChat: '',
            msgDelete: {
                index: null,
                show: false,
            },
        }
    },
    methods: {
        callChat(index){
            this.contacts[this.counter].visible = false;
            this.counter = index;
            this.contacts[index].visible = true; 
        },
        sendMsg(){
            const newMessage = {
                date: this.now.getHours() + ':' + this.now.getMinutes().toString().replace(/^(\d)$/, '0$1'),
                message: this.newMessageUser,
                stauts: 'sent'
            }
            this.contacts[this.counter].messages.push(newMessage);
            this.newMessageUser=  '';
            setTimeout(this.autoReply, 1500);
        },
        autoReply(){
            const messageReplyBot = {
                date:  this.now.getHours() + ':' + this.now.getMinutes().toString().replace(/^(\d)$/, '0$1'),
                message: 'ok',
                status: 'received'
            }
            this.contacts[this.counter].messages.push(messageReplyBot);
        },
        searchTheLetters(){
            if(this.searchInChat.length > 0){
                const newWord =  this.searchInChat[0].toUpperCase() + this.searchInChat.toLowerCase().substring(1, this.searchInChat.length) ;
            
                this.contacts.forEach(contact => {
                contact.search = contact.name.includes(newWord);
            })
            }else {
                this.contacts.forEach(contact => contact.search = true);
            }       
        },
        deleteMessage(i){
            this.contacts[this.counter].messages.splice(i, 1);
            this.msgDelete.show = false;
        },
        showOption(i){
            if(i === this.msgDelete.index && this.msgDelete.show){
                this.msgDelete.index = null;
                this.msgDelete.show = false;
            } else {
                this.msgDelete.index = i;
                this.msgDelete.show = true;
            }
        }
    },
    mounted(){
        console.log('Montata');
    }
}).mount('#app')