---
sidebar_position: 4
---

# Código exemplo

## C#

Configuração:

```cshsrp title="Program.cs"
using IdentityModel.Client;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAccessTokenManagement(options =>
        {
            options.Client.Clients.Add("cargaRh", new ClientCredentialsTokenRequest
            {
                Address = "https://acessocidadao.es.gov.br/is/connect/token",
                ClientId = "ClientIdFornecido",
                ClientSecret = "SecretFornecido",
                Scope = "api-cargarh-base api-cargarh-cargaorganizacao api-cargarh-cargaunidades" 
            });
        });

builder.Services.AddClientAccessTokenHttpClient("client", 
    configureClient: client =>
    {
        client.BaseAddress = new Uri("https://api.cargarh.es.gov.br/");
    }, 
    tokenClientName: "cargaRh");

```

Uso:

```cshsrp title="Service.cs"

public class Service : IService
{
    private readonly HttpClient client;

    public Service(IHttpClientFactory factory)
    {
        client = factory.CreateClient("client");
    }

    public async Task<string> PingAsync()
    {
       var response = await _client.GetStringAsync("ping");
       return response;
    }
}

```
