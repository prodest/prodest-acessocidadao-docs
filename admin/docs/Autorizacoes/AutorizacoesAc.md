---
sidebar_position: 1
---

# Autorizações no Acesso Cidadão

O esquema de autorizações do Acesso Cidadão envolve a criação de perfis e recursos e suas atribuições aos variados tipos de funções que 
os agentes públicos podem desempenhar em um sistema.  

O Acesso Cidadão permite apenas a especificação de um recursos e sua posterior atribuição a um perfil. O funcionamento desse recurso é 
atribuição do sistema em si é feito pelo desenvolvedor, durante a escrita do código.  
No Acesso Cidadão esse conjunto **```Recurso + Perfil```** poderá ser gerenciado de maneira mais dinâmica, sendo possível víncular agentes 
públicos à funções específicas do sistema, bem como o gerenciamento dessas funções e das prerrogativas de cada agente público (ou um 
grupo de agentes) em diferentes conjuntos de responsabilidades.

## Recursos e Perfis

***Recurso*** é a funcionalidade a ser desempenhada pelo sistema. Como essa funcionalidade deve de 
fato "funcionar" é escrita pelo desenvolvedor do sistema. No Acesso Cidadão cria-se uma referência para essa funcionalidade, que posteriormente 
será atribuída a um **Perfil**.  
É esse par que, em um próximo passo, será vinculada a uma entidade conhecida como **Permissão**.  

***Perfil*** é a abstração de quem pode ter a prerrogatiza de usar o **Recurso**. Só depois de um recurso 
ser atribuído a um perfil é que de fato pode-se conceder uma **Permissão** dentro de um sistema.

### Criação de Recursos e Perfis

1 - Após encontrar seu sistema no Acesso Cidadão Admin clique em **Autorização**, escolha a aba ***Recursos*** e clique em adicionar.
!["Criando Recursos"](/_images/01_recursos.png)  

!["Botão adicionar"](/_images/02_recursos.png)


2 - Dê um nome para o recursos. Use como referência a funcionalidade do sistema. Clique em Salvar.
!["Nome do recurso"](/_images/03_recursos.png)


3 - O recurso será exibido na tela. 
!["Recurso criado"](/_images/04_recursos.png)  

Clique na aba **Perfis**, e em seguida clique em Adicionar.
!["Adicionar Perfil"](/_images/05_recursos.png)


4 - Atribua um nome ao Perfil e adicione uma descrição e em seguida clique em adicionar.
!["Novo Perfil"](/_images/06_recursos.png)


5 - O novo perfil será exibido. Clique no ícone de quebra-cabeças para vincular um recursos.
!["Vincular recurso ao perfil"](/_images/07_recursos.png)  

Selecione o recurso que deseja vincular e clique em salvar.
!["Selecionar recurso"](/_images/08_recursos.png)  

A tela com a lista de perfis será exibida novamente. Ao passar o cursor sobre o ícone de quebra-cabeças o recurso deste perfil será exibido.
!["Recurso atribuído"](/_images/09_recursos.png)
