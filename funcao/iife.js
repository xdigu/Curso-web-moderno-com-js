// IIFE --> Immediately Invoked Function Expression

/**
 * Cria a função e roda ela sem mesmo dar um nome a ela.
 * Utilizada quando precisa declarar algo fora do escopo
 * global (ou fora do window no browser)
 */

(function(){
    console.log('ola')
    console.log('hello')
})()