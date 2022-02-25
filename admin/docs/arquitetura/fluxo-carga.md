---
sidebar_position: 2
---

# Fluxo de Carga

A carga foi arquitetada para funcionar em 2 (duas) etapas.

1. Num primeiro momento apenas as informações de Organização são enviadas. Organização nesse caso são todas as entidades do Organograma que possuem CNPJ.
2. Num segundo momento para cada Organização (CNPJ) são enviadas as informações de Unidades administrativas, Lista de Ocupações (cargos), Papéis (Pessoas com seus cargos e lotação) e Grupos.

## Cargas em paralelo

É importante garantir que cargas na mesma organização não aconteçam em paralelo. Por esse motivo existe um bloqueio na API para que seja impossível iniciar cargas do tipo 1 (Organizações) enquanto existir outra carga do tipo 1 na mesma Raiz de Carga. Também é impossível iniciar cargas do tipo 2 em qualquer das organizações filhas enquanto existir uma carga do Tipo 1 em aberto. Do mesmo modo é impossível iniciar cargas do tipo 1 enquanto existerem cargas do tipo 2 em qualquer uma das organizações filhas.

Cargas do tipo 2 em organizações filhas diferentes são possíveis e não tem nenhuma trava para serem criadas em paralelo.