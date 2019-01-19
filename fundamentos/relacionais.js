console.log(3 > 2)
console.log(3 == 2)
console.log(3 < 2)
console.log('01)','1' == 1) //compara somente os valores e não o tipo
console.log('02)','1' === 1) // Uma comparação estrita, ele compara até o tipo.


/**
 * Ambos vão dar false pois ele compara endeço de memoria dos objetos.
 */
const d1 = new Date (0)
const d2 = new Date (0)
console.log(d1 == d2) 
console.log(d1 === d2)

/**
 * Agora se compararmos as variaveis dentro do objeto, elas serão iguais
 */
console.log(d1.getTime() == d2.getTime())
console.log(d1.getTime() === d2.getTime())
