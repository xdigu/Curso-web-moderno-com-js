function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 2000)
}

new Pessoa