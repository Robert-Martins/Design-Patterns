# Padrões Criacionais

Os Padrões Criacionais são um grupo de padrões de design de software que se concentram na criação de objetos de forma eficiente e flexível. Eles fornecem soluções para problemas comuns relacionados à criação de objetos, permitindo que o código seja mais reutilizável, escalável e fácil de manter. Os padrões criacionais são amplamente utilizados em projetos de software para gerenciar a criação de objetos e garantir que o processo de criação seja desacoplado do código que os utiliza.

## Objetivos dos Padrões Criacionais

Os padrões criacionais têm os seguintes objetivos:

1. **Desacoplamento**: Os padrões criacionais promovem o desacoplamento entre o código que cria objetos e o código que os utiliza, tornando o sistema mais flexível e fácil de modificar.

2. **Reutilização**: Eles facilitam a reutilização de código, uma vez que a lógica de criação de objetos é encapsulada nos padrões.

3. **Encapsulamento**: Os detalhes de como os objetos são criados são encapsulados, tornando a implementação específica do padrão invisível para o restante do código.

4. **Configuração flexível**: Eles permitem configurar o processo de criação de objetos de várias maneiras, adaptando-se às necessidades específicas do sistema.

## Padrões Criacionais Comuns

Alguns dos padrões criacionais mais comuns incluem:

- **Factory Method**: Define uma interface para criar objetos, mas permite que as subclasses escolham a classe concreta a ser instanciada.
- **Abstract Factory**: Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
- **Singleton**: Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global para essa instância.
- **Builder**: Separa a construção de um objeto complexo de sua representação, permitindo a criação de diferentes variantes do objeto.
- **Prototype**: Permite a criação de novos objetos copiando um objeto existente, conhecido como protótipo.
- **Object Pool**: Gerencia um conjunto de objetos pré-criados e reutilizáveis, evitando a criação e destruição excessiva de objetos.

## Quando Usar Padrões Criacionais

Você deve considerar o uso de padrões criacionais quando:

- A criação de objetos em seu sistema é complexa, e você deseja encapsular essa complexidade.
- Você quer garantir que seu sistema seja flexível e possa se adaptar a mudanças na criação de objetos.
- Você deseja evitar o acoplamento direto entre o código que cria objetos e o código que os utiliza.
- Você precisa controlar a quantidade de instâncias de uma classe em execução, como no caso do Singleton.
