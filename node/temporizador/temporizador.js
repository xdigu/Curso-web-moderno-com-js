const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob(('*/5 * 19 * * 1'), function(){
    console.log ('Executando tarefa 1!', new Date().getSeconds())
})

// setInterval
// setImmediate
setTimeout(function(){
    tarefa1.cancel()
    console.log('Parando a tarefa1!')
}, 10001)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 19
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log ('Executando tarefa 2!', new Date().getSeconds())
})