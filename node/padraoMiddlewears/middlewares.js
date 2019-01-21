/**
 * Middleware pattern (Chain of responsability)
 */

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}
const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPassos = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPassos(indice + 1))
    }
    execPassos(0)
}

const ctx = {}

exec(ctx, passo1, passo2, passo3)

console.log(ctx)