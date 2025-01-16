# Galeria de Desenhos com Canvas

Este projeto é uma galeria interativa de desenhos feita com HTML5 `<canvas>` e JavaScript, seguindo princípios de programação orientada a objetos e boas práticas de desenvolvimento, como o uso do padrão **SOLID**.

## 📋 Funcionalidades

- Exibição de uma galeria de miniaturas de desenhos.
- Visualização ampliada de desenhos ao clicar na miniatura.
- Sistema extensível para adicionar novos desenhos facilmente.
- Desenhos gerados dinamicamente usando classes específicas para cada tipo.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura básica e uso do elemento `<canvas>`.
- **CSS3**: Estilização da galeria e do layout.
- **JavaScript**: Lógica de criação e exibição de desenhos.
- **Padrão SOLID**: Organização modular e extensível.

## 📂 Estrutura do Projeto

```
.
├── index.html        # Página principal
├── styles.css        # Estilização (opcional, inline no exemplo)
├── scripts.js        # Código principal em JavaScript
└── README.md         # Documentação do projeto
```

### Principais Arquivos:

- **index.html**: Estrutura da página e inclusão dos elementos de `<canvas>`.
- **scripts.js**: Contém a lógica de criação de desenhos e a implementação do sistema de galeria.

## 🚀 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sua-repositorio.git
   ```

2. Abra o arquivo `index.html` no seu navegador:
   - Clique duas vezes no arquivo ou use uma extensão de servidor local, como o Live Server no VSCode.

3. Interaja com a galeria:
   - Clique nas miniaturas para ver os desenhos ampliados no canvas principal.

## ➕ Adicionando Novos Desenhos

Para adicionar novos desenhos, siga os passos abaixo:

1. **Crie uma nova classe de desenho**:
   - Herde da classe `Drawing` e implemente o método `draw`.
   ```javascript
   class NovoDesenho extends Drawing {
       draw(context, width, height) {
           // Lógica do desenho aqui
       }
   }
   ```

2. **Registre o desenho**:
   - Adicione o desenho ao registro:
   ```javascript
   registerDrawing('nomeDoDesenho', NovoDesenho);
   ```

3. **Adicione à galeria**:
   - Use `addToGallery` para incluir o desenho:
   ```javascript
   addToGallery('nomeDoDesenho');
   ```

## ✨ Exemplos de Desenhos Disponíveis

- **Bandeira**: Um design com triângulos amarelos e círculo azul.
- **Sol**: Um fundo azul claro com um sol amarelo e raios laranja.
- **Creeper**: Uma recriação da cabeça do Creeper do Minecraft.

## 📚 Referências

- [Documentação do Canvas API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Padrões SOLID em JavaScript](https://javascript.plainenglish.io/solid-principles-in-javascript-67b4bdae91b3)

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

💻 Desenvolvido por [Felype](https://github.com/FelypeDantas).
```

### Explicação:
- **Clareza:** O README inclui informações claras sobre como usar e expandir o projeto.
- **Seções organizadas:** Divididas em funcionalidades, tecnologias, estrutura e instruções de uso.
- **Extensibilidade:** Explica como adicionar novos desenhos de maneira simples.
- **Referências:** Links úteis para o Canvas API e conceitos relacionados. 

Se precisar de algo mais personalizado ou outra seção no README, é só pedir!
