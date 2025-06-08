import { expect } from 'chai';
import Pessoa from '../src/Pessoa.js';

describe('Pessoa Class', () => {
    let pessoa;

    beforeEach(() => {
        pessoa = new Pessoa('João', 30);
    });


    it('deve inicializar com a idade correta', () => {
        expect(pessoa.getIdade()).to.equal(30);
    });
    it('deve retornar true para ehMaiorDeIdade quando idade for 18 ou mais', () => {
        expect(pessoa.ehMaiorDeIdade()).to.be.true;
    }
    );
    it('deve retornar false para ehMaiorDeIdade quando idade for menor que 18', () => {
        pessoa = new Pessoa('Maria', 17);
        expect(pessoa.ehMaiorDeIdade()).to.be.false;
    }
    );

    it('deve lançar erro se idade não for um número inteiro', () => {
        pessoa.idade = 30.5;
        const verificarIdade = () => pessoa.ehMaiorDeIdade();
        expect(verificarIdade).to.throw('Idade deve ser um número inteiro');
       // expect(() => pessoa.ehMaiorDeIdade()).to.throw('Idade deve ser um número inteiro');
    });

    it('deve lançar erro se idade for menor que zero', () => {
        pessoa.idade = -1;
        const verificarIdade = () => pessoa.ehMaiorDeIdade();
        expect(verificarIdade).to.throw('Idade não pode ser negativa');
        //expect(() => pessoa.ehMaiorDeIdade()).to.throw('Idade deve ser um número inteiro não negativo');
    });

    it('deve lançar erro se idade for vazia', () => {
        pessoa.idade = null;
        expect(() => pessoa.ehMaiorDeIdade()).to.throw('Idade não pode ser nula ou indefinida');
    });

    it('deve retornar true para ehMaiorDeIdade quando idade for inteiro e 18 ou mais', () => {
        pessoa.idade = 18;
        expect(pessoa.ehMaiorDeIdade()).to.be.true;
    });

    it('deve retornar false para ehMaiorDeIdade quando idade for inteiro e menor que 18', () =>{
        pessoa.idade = 17;
        expect(pessoa.ehMaiorDeIdade()).to.be.false;
    });
});