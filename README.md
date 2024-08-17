# JWT - Implementação e Explicação

Este projeto é uma implementação manual de JSON Web Tokens (JWT) em TypeScript, que serve como uma explicação prática de como JWTs funcionam. O projeto inclui a criação de tokens assinados e a verificação de sua validade.

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Como Funciona](#como-funciona)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Uso](#uso)

## Introdução

JSON Web Tokens (JWT) são um padrão aberto (RFC 7519) que define uma maneira compacta e segura de transmitir informações entre as partes como um objeto JSON. Este projeto recria o processo de geração e verificação de JWTs para mostrar como eles funcionam internamente.

## Instalação

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/seuusuario/projeto-jwt.git
cd projeto-jwt
npm install
```

## Uso
Para gerar e verificar um token JWT, você pode executar o seguinte comando:

```bash
npx ts-node src/index.ts
```

O resultado no console mostrará o payload decodificado se o token for válido, ou lançará um erro caso contrário.
