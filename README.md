> ⚠️ Este projeto possui código separado em duas branches: `master` (backend) e `frontend` (frontend). Esta branch `main` é usada apenas para exibir este README.

# Sistema de Autenticação com JWT (Java + Angular)

Projeto fullstack com autenticação baseada em token JWT. Desenvolvido com **Java (Spring Boot)** no backend e **Angular** no frontend, separados em duas branches.

---

## 🌿 Estrutura do Projeto

- `master`: contém o código do **backend** (Java com Spring Boot)
- `frontend`: contém o código do **frontend** (Angular)
- `main`: branch padrão, atualmente vazia (somente usada como root)

---

## 🚀 Funcionalidades

- Registro de usuário
- Login com geração de token JWT
- Rota protegida acessível apenas com token válido

---

## 🛠️ Tecnologias Utilizadas

**Backend**
- Java 21
- Spring Boot
- Spring Security
- JWT (JSON Web Token)

**Frontend**
- Angular
- TypeScript
- Angular HTTP Client
- Reactive Forms

---

## 📦 Clonando e Executando o Projeto

Clone o repositório:

```bash
git clone https://github.com/404GabrielDev/Spring-Security-Token.git
```
---

Executar o Backend (branch: master )
```bash
git checkout master
cd backend
./mvnw spring-boot:run
```

---

Executar o Frontend (branch: frontend )
```bash
git checkout frontend
cd frontend
npm install
ng serve
```
---


## Teste de Rota Protegida ( via Postman ou Angular )
Após fazer login, o backend retorna um token JWT. Esse token é utilizado automaticamente pelo Angular ao acessar uma rota protegida da aplicação.

✅ Opções de teste:
* Via Frontend Angular
Ao acessar a rota protegida no Angular (ex: /protegida), o token armazenado é enviado automaticamente no header.
Se o token for válido, o backend retorna uma resposta que é exibida no console do navegador.

* Via Postman
Envie uma requisição GET para a rota protegida com o token no header:
```
GET /rota-protegida
Authorization: Bearer cole SEU_TOKEN_AQUI
```



📁 Organização das Branches
master: backend Spring Boot

frontend: frontend Angular

main: branch padrão do GitHub, contém apenas o README.md para apresentação do projeto

---


👨‍💻 ### Desenvolvido por
João Gabriel
Desenvolvedor Full Stack com foco em aplicações modernas usando Java, Angular e tecnologias web.

📬 #### Entre em Contato

* [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/jo%C3%A3o-gabriel-s-0659702b3/)

* [![Gmail](https://img.shields.io/badge/-Gmail-red?logo=gmail&style=flat-square)](mailto:joaogabriell.ssm@gmail.com)



