---
sidebar_position: 3
---

# Gerando tokens de forma manual

## Parâmetros requeridos na solicitação de um token no Acesso Cidadão  

:::info Info

Toda comunicação com Acesso Cidadão deve ser realizada com o protocolo HTTPS

:::

A utilização da autorização de sistemas no Acesso Cidadão depende dos seguintes passos:

### 1\. Requisição POST

Para obter o token de acesso de sistema, o cliente deve fazer uma requisição POST para o endereço 
[https://acessocidadao.es.gov.br/is/connect/token](https://acessocidadao.es.gov.br/is/connect/token) passando as seguintes informações:

#### Parâmetros do Header para requisição POST:

|**Variável**|**Descrição**|
|------------|-----------|
|Content-Type|Tipo do conteúdo da requisição que está sendo enviada. Nesse caso estamos enviando como um formulário application/x-www-form-urlencoded.|
|Authorization|Informação codificada em Base64, no seguinte formato: **CLIENT_ID:CLIENT_SECRET** (utilizar [codificador para Base64](https://www.base64decode.org) para gerar codificação). A palavra Basic deve está antes da informação. Exemplo: O resultado da codificação em Base64 do texto CLIENT_ID:CLIENT_SECRET é Q0xJRU5UX0lEOkNMSUVOVF9TRUNSRVQ= [Referência](https://tools.ietf.org/html/rfc7617#page-4)|

```jsx title="Exemplo de header"
    Content-Type: application/x-www-form-urlencoded
    Authorization: Basic Q0xJRU5UX0lEOkNMSUVOVF9TRUNSRVQ=
```

#### Parâmetros que devem ser colocados no Body da requisição POST para **https://acessocidadao.es.gov.br/is/connect/token**

|**Variável**|**Descrição**|
|------------|-----------|
|grant_type|Especifica para o provedor o tipo de autorização. Neste caso será 'client_credentials'|
|scope|Especifica os recursos que o serviço consumidor quer obter. Um ou mais escopos inseridos para a aplicação cadastrada.



```jsx title="Exemplo da chamada HTTP"
    POST /is/connect/token HTTP/1.1
    Host: acessicidadao.es.gov.br
    Authorization: Basic Q0xJRU5UX0lEOkNMSUVOVF9TRUNSRVQ=
    Content-type: application/x-www-form-urlencoded
    
    grant_type=client_credentials&scope=scopes-selecionados
```

```jsx title="Exemplo da chamada cURL"
    curl --location --request POST 'https://acessocidadao.es.gov.br/is/connect/token' \
    --header 'Authorization: Basic Q0xJRU5UX0lEOkNMSUVOVF9TRUNSRVQ='
    --header 'Content-type: application/x-www-form-urlencoded'
    --data-urlencode 'grant_type=client_credentials'
    --data-urlencode 'scope=scopes-selecionados'
```

```jsx title="O serviço retornará, em caso de sucesso, as informações abaixo no formato JSON"
    {
        "access_token": "(Token de acesso a recursos protegidos do autenticador.)",
        "token_type": "(O tipo do token gerado. Padrão: Bearer)",
        "expires_in": "(Tempo de vida do token em segundos.)"
    }
```

:::info Info

Os tokens gerados são do padrão **JWT** (*Json Web Token*) e possum validade de **01 (uma) hora**. Após esse período será necessário gerar um novo token. Para saber mais sobre JWT [clique aqui](https://pt.wikipedia.org/wiki/JSON_Web_Token) e consulte a [documentação oficial](https://jwt.io/introduction), em Inglês.

:::

### 2\. Resposta = Access Token 

De posse do token do json anterior, a aplicação consumidora está habilitada a fazer chamada aos endpoints protegidos que solicitam Access Token do Acesso Cidadão.

:::caution Importante
    
Além da necessidade de um Token de Acesso a maioria dos serviços que podem ser consumidos tem regras específicas que 
    devem ser consultadas na documentação de cada serviço. Em geral, pelo menos alguns scopes de sistema são exigidos
    por serviço sendo consumido.

:::

