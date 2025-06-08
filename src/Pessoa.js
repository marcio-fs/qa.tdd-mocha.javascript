class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getIdade() {
        return this.idade;
    }

    ehMaiorDeIdade() {
    // 1º Verifica se é null/undefined (tipo inválido)
    if (this.idade === null || this.idade === undefined) {
        throw new Error('Idade não pode ser nula ou indefinida');
    }

    // 2º Verifica se é inteiro
    if (!Number.isInteger(this.idade)) {
        throw new Error('Idade deve ser um número inteiro');
    }

    // 3º Verifica se é não-negativo
    if (this.idade < 0) {
        throw new Error('Idade não pode ser negativa');
    }
        return this.idade >= 18;
    }
}

export default Pessoa;