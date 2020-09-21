// 1
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }

async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
    
}
umPorSegundo();

// 2
import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//     console.log(response.data);
//     })
//     .catch(err => {
//     console.log('Usuário não existe');
//     })
// }

async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch(err){
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// 3
// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//         .then(response => {
//         console.log(response.data);
//         })
//         .catch(err => {
//         console.log('Repositório não existe');
//         })
//     }
// }

class Github {
    static async getRepositories(repo) {
        try{
            const response2 = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response2.data);
        }catch(err){
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/unform');
Github.getRepositories('rocketseat/dslkvmskv');

// 4
// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${usuario}`)
//     .then(response => {
//     console.log(response.data);
//     })
//     .catch(err => {
//     console.log('Usuário não existe');
//     });
// }

const buscaUsuario = async usuario => {
    try{
        const response3 = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response3.data);
    }catch(err){
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');