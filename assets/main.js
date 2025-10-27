console.log('funzia');


/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/




const url = 'https://flynn.boolean.careers/exercises/api/random/mail'
const listEmail = document.getElementById('mail')
const emails = []

function randomMail(num) {
    for (let i = 0; i < num; i++) {
        fetch(url)
            .then(Response => Response.json())
            .then(dataReceived => {
                let email = dataReceived.response;
                emails.push(email);
                let li = document.createElement('li');
                li.textContent = email
                listEmail.appendChild(li)

            })
    }
}

randomMail(10);