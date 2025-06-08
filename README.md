# Automação de Testes QA com TDD: Mocha + JavaScript

[![Mocha](https://img.shields.io/badge/Mocha-9%2B-8D6748?style=for-the-badge&logo=mocha&logoColor=white)](https://mochajs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-6%2B-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 📄 Descrição
Projeto que implementa a classe `Pessoa` em JavaScript, com testes unitários utilizando Mocha para validar suas funcionalidades.

## 📂 Estrutura do Projeto
```
qa.tdd-mocha.javascript
├── src
│   └── Pessoa.js
├── test
│   └── Pessoa.test.js
├── package.json
├── .mocharc.json
└── README.md
```
## ⚙️ Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/marcio-fs/qa.tdd-mocha.javascript.git
   cd qa.tdd-mocha.javascript
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## ▶️ Execução dos Testes
Execute os testes com o comando:
```bash
npm test
```

### Test-Driven Development (TDD) - Princípios Fundamentais

### 1️⃣ Duas Regras Principais do TDD
1. **Não escreva código de produção sem ter um teste falhando primeiro**  
   - O teste deve falhar inicialmente (Red Phase)
   - Garante que o teste seja válido e detecte a ausência de funcionalidade

2. **Elimine duplicação**  
   - Refatore o código após fazer o teste passar (Green Phase)
   - Mantém o código limpo e eficiente

### 2️⃣ Ordem Correta do Ciclo TDD (Baseado nas Regras)
1. 🔴 **Escreva um teste falhando** (para a funcionalidade desejada)
2. 🟢 **Faça o teste passar** (implemente o mínimo necessário)
3. 🔵 **Refatore o código** (melhore a estrutura sem quebrar testes)
4. 🔁 **Repita** o ciclo para cada nova funcionalidade

### 3️⃣ Três Leis do TDD (Robert C. Martin)
1. **Não escreva código de produção sem antes ter um teste unitário falhando**  
   *(First Law: You may not write production code until you have written a failing unit test)*

2. **Não escreva mais de um teste unitário do que o necessário para falhar**  
   *(Second Law: You may not write more of a unit test than is sufficient to fail)*

3. **Não escreva mais código de produção do que o necessário para passar no teste atual**  
   *(Third Law: You may not write more production code than is sufficient to pass the one failing unit test)*

### Diagrama do Fluxo TDD
```mermaid
graph TD
    A[Escrever Teste] --> B{Teste Falha?}
    B -- Sim --> C[Implementar Código]
    C --> D{Teste Passa?}
    D -- Sim --> E[Refatorar]
    E --> A
    D -- Não --> C

---

**Nota:** Este projeto é apenas para fins de avaliação técnica.