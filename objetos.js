class Calebe{
    constructor (twitch) {
        this.twitch = twitch; // variável de interface
        //ações
    }

    exibirTwitch () {
        //ações
        window.open(this.twitch);
    }

    metodo2 () {
        //ações
    }
}

var novoCalebe = new Calebe ("https://www.twitch.tv/symfuhny");

novoCalebe.exibirTwitch();