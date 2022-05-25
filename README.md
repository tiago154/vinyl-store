# Projeto de estudo async microservice - Vinyl Store

A ideia do projeto é simular varios microserviços se comunicando para processar itens de uma compra.

`Buy-ms` é início de tudo, onde fica responsável por registrar uma ordem de serviço e de forma async adicionar os itens em uma fila.

`Stock-ms` fica responsável por checar o estoque de produtos e atualizar o estoque

`Payment` aprova o pagamento do pedido

`Order` atualiza o status do pedido

**O projeto é apenas para exemplicar o funcionamento, então existe código repetidos e fakes para simular o processo**

## Como rodar?

```shell
docker-compose up
```

## Testando

Acesse http://localhost:3000/api/admin/queues para visualizar o dashboard com as filas

Faça um get em http://localhost:3000/api/purchases para gerar um novo pedido

É possivel visualizar as orders de serviço pelo endpoint http://localhost:3003/api/orders ou http://localhost:3003/api/orders/:orderId

