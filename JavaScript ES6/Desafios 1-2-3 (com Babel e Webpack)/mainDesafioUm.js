// 
// Exercício 1
// 
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }

}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(Adm1.isAdmin()) // true
console.log(User1.isAdmin()) // false

// 
// Exercício 2
// 
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const myMap = usuarios.map(usuario => {
    return usuario.idade;
})
console.log(myMap)

const myFilter = usuarios.filter(usuario => {
    return usuario.idade > 18;
})
console.log(myFilter)

const myFind = usuarios.find(usuario => {
    return usuario.empresa == 'Google';
})
console.log(myFind);

const myDoubleOperation = usuarios.map(usuario => {
    usuario.idade = usuario.idade * 2;
    return usuario;
}).filter(usuario => {
    return usuario.idade < 50;
})
console.log(myDoubleOperation);

// // 
// // Exercício 3
// //

// // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(item => {
//  return item + 10;
// });

// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = (usuario) => {
//  return usuario.idade;
// }
// mostraIdade(usuario);

// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// // 3.4
// const promise = function() {
//  return new Promise((resolve, reject) => {
//  return resolve();
//  })
// }

// 
// Exercício 4
//

// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
// };

// const {nome, endereco:{cidade, estado}} = empresa;

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// function mostraInfo({nome, idade}) {
//  return `${nome} tem ${idade} anos.`;
// }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// 
// Exercício 5
//

const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//     }
// };

// const usuario2 = {...usuario, nome:'Gabriel'};
// console.log(usuario2);

// const usuario3 = {...usuario, cidade:'Lontras'};
// console.log(usuario3);

// 
// Exercício 6
//

// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);

// 
// Exercício 7
//

const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};

console.log(usuario);