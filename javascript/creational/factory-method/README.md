# Factory Method Pattern

O **Factory Method Pattern** é um padrão de design criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados. Isso permite que uma classe adie a instanciação para suas subclasses, promovendo a flexibilidade na criação de objetos.

## Implementação

Neste diretório está contida implementação executação deste Pattern em JavaScript.

## Objetivo do Factory Method Pattern

O objetivo principal do Factory Method Pattern é definir uma interface para criar um objeto, mas permitir que as subclasses alterem o tipo de objetos que serão criados. Isso permite que uma classe delegue a responsabilidade de instanciar seus objetos para suas subclasses, proporcionando flexibilidade na criação de objetos.

## Implementação do Factory Method Pattern

A implementação típica do Factory Method Pattern envolve os seguintes elementos:

1. **Interface Product**: Define a interface dos objetos a serem criados.

2. **ConcreteProduct**: Implementa a interface Product e representa os objetos concretos a serem criados.

3. **Creator (Classe Base)**: Define um método Factory Method, que declara a interface para criar um objeto Product. Essa classe pode conter implementações padrão ou código compartilhado.

4. **ConcreteCreator**: Implementa o Factory Method para criar instâncias específicas de ConcreteProduct.

## Vantagens do Factory Method Pattern

- Promove a flexibilidade na criação de objetos, permitindo que subclasses alterem o tipo de objetos a serem criados.
- Evita a dependência direta entre a classe cliente e as classes concretas, seguindo o princípio da inversão de dependência.

## Quando Usar o Factory Method Pattern

O Factory Method Pattern é apropriado quando:

- Uma classe não pode antecipar a classe de objetos que ela precisa criar.
- Uma classe quer que suas subclasses especifiquem os objetos que criarão.
- Uma classe quer delegar a responsabilidade de criar objetos para suas subclasses.

## Contribuições

Contribuições são bem-vindas! Se você deseja adicionar informações adicionais, exemplos em outras linguagens de programação ou melhorar o conteúdo, sinta-se à vontade para criar um pull request.

## Licença

Este repositório é disponibilizado sob a licença MIT.
