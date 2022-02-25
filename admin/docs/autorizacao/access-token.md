---
sidebar_position: 2
---

# Tokens de Acesso

Para usar as APIs do Estado é necessário gerar um token de acesso OAuth2 para autenticar as solicitações da API. Não há suporte para autenticação básica. No entanto, gerar um token pela primeira vez pode ser um pouco confuso, portanto, criamos esta documentação com exemplos do passo a passo de como gerar um token manualmente.

Se você está desenvolvendo um sistema, deve criar a funcionalidade que gera um token em seu aplicativo para automatizar o processo.

:::caution Importante

Como o Oauth2 é um padrão bastante adotado, principalmente o fluxo Client Credentials, normalmente existem bibliotecas oficiais em qualquer linguagem de programação para tratar da geração e renovação de tokens de forma automatizada. Em geral sempre recomendamos que sejam usadas essas bibliotecas oficiais já que a geração e renovação de tokens não é uma tarefa trivial.

:::

O Acesso Cidadão funciona como nosso serviço de autenticação: recebe as informações do cliente, devolve um token de acesso com o qual é possível consumir os recursos protegidos.

## OAuth2

OAuth 2.0 é um protocolo de autorização de padrão aberto que permite a terceiros (aplicações) acesso limitado às informações de um usuário ou sistema. Nós podemos obter desse modo acesso às informações ou funcionalidades de um determinado sistema através de um client ID e client secret (chaves de autenticação do OAuth).

Há diferentes fluxos OAuth 2.0, que demandam formas distintas de obtenção de um token de acesso. No acesso às APIs do estado estamos interessados principalmente no fluxo chamado de *"Client Credentials"*. 

O Client Credentials **NÃO** gera refresh_token. Portanto, não é possível atualizar um access token depois de sua expiração.

:::danger Importante

O token **NÃO** deve ser gerado para cada requisição. Os tokens costumam ter validade de uma hora e devem ser reaproveitados em todas as requisições durante essa janela de validade. Excesso de requisições de tokens dentro de uma janela muito pequenas de tempo podem fazer com o seu cliente seja bloqueado de forma automática.

:::

## JWT

Os tokens gerados pelo Acesso Cidadão são sempre do tipo JWT.

"JSON Web Token (JWT) é um padrão aberto (RFC 7519) que define uma forma compacta e auto-suficiente para a transmissão segura de informações entre as partes na forma de um objeto JSON. Essa informação pode ser verificada se é confiável porque é assinada digitalmente. JWTs podem ser assinados usando tanto um segredo (com o algoritmo HMAC) ou um par de chaves pública/privada usando RSA." (https://jwt.io/)
