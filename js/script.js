

var app = new Vue(
    {
        el: '#root',
        data: {
            activeContact: 0,
            inputMessage: '',
            userFilter: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods: {
            // funzione che compone l'src in base al numero dell'array
            nameImage(index) {
                let image='img/avatar';
                let type = '.jpg';
                image += this.contacts[index].avatar + type;
                return image;
            },
            // funzione per rendere attivo un contatto tramite il click
            setActiveContact(index) {
                this.activeContact= index;
            },
            // funzione che inserisce il messaggio dentro l'array messages
            pushNewMessage() {
                const newMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.inputMessage,
                    status: 'sent'
                };

                this.contacts[this.activeContact].messages.push(newMessage);
                // cancella il testo scritto dall'utente nell'input
                this.inputMessage= '';

                // risposta al messaggio inviato con ok
                setTimeout(() =>{
                    const newReplyMessage= {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'recived'
                    };

                    this.contacts[this.activeContact].messages.push(newReplyMessage);
                },1000);
            },
            filterUser() {
                // trasformo il nome in casratteri minuscoli
                const userNameLowerCase= this.userFilter.toLowerCase();

                this.contacts.forEach((contact) =>{
                    const contactLowerCase= contact.name.toLowerCase();
                    console.log(contactLowerCase);

                    if( contactLowerCase.includes(userNameLowerCase) ) {
                        contact.visible= true;
                    }else {
                        contact.visible= false;
                    }
                });
            }
        }    
    }
);