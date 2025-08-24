
### Este arquivo foi feito para ajudar a lembrar os conceitos principais da linguagem Python e poderá sofrer alterações sem aviso prévio e contém erros de português visto que foi escrito com pressa!


<!-- 
Este tópico deve ser ignorado, pois ele é uma metodologia que uso pra ensinar quem está comigo
### Exercicio python
Faça um código que peça pro usuario digitar um numero até ele digitar 5, quando ele digitar 5, sai 
-->


# Variaveis

As variaveis de python ja são criadas com o tipo certo, chamamos isso de "tipagem automatica", então essa parte é apenas para conhecimento dos tipos de variáveis que existem

Tipos : Inteiro, Booleano, String e Float

- Inteiro -> Números sem virgula

- Booleano -> Verdadeiro ou Falso

- String -> Vários chars

- Float -> Numero com virgula


# Definição de variaveis

Formas de criar variáveis:

```Python
nome = valor
```

# Mostrar na tela

No geral, o python não faz distinção entres aspas simples ('') e aspas duplas (""), então fica a seu critério

`print("")` -> Ele mostra mensagens no console

Ex: 
```Python
print("Mensagem")
```


# Concatenação

Concatenação é o ato de juntar 2 coisas

No python existe 3 formas de fazer isso:

## Usando ,

Sintaxe:
```Python
print("Mensagem", variavel)
```

Ex: 
```Python
print("Olá, eu me chamo", nome)
```

Resultado: 
```
Olá, eu me chamo Joãozinho
```

Detalhe: Quando você faz a concatenação dessa forma, o python na hora de mostrar a mensagem automaticamente adiciona um espaço entre o texto e a variavel 

## Usando +

Sintaxe:
```Python
print("Mensagem" + variavel)
```

Ex: 
```Python
print("Olá, eu me chamo" + nome)
```

Resultado: 
```
Olá, eu me chamoJoãozinho
```

Detalhe: Quando você faz a concatenação dessa forma, o python na hora de mostrar a mensagem automaticamente **NÃO** adiciona um espaço entre o texto e a variavel 

## Usando o print formatado (Recomendado)

Está é a forma mais recomendada de concatenar valores

Sintaxe: 
```Python
print(f"texto {variavel}")
```

Ex: 
```Python
print(f"Olá, eu me chamo {nome}")
```

Resultado: 
```
Olá, eu me chamo Joãozinho
```

Outro exemplo: 
```Python
print(f"Olá {nome1}, eu me chamo {nome2} e tenho {idade} anos de idade")
```

Resultado: 
```
Olá Joãozinho, eu me chamo Mariazinha e tenho 8 anos de idade
```


# Pegando valores do usuário

Usamos o `input()` para pegar valores via terminal

Sintaxe: 
```Python
variavel = input("mensagemASerMostradaParaPedirOValor")
```

Ex: 
```Python
nome = input("Digite seu nome: ")
```

Detalhe: O `input()` devolve a resposta do usuario como uma string, então caso precise mudar o tipo da resposta você vai precisar usar as funções de conversão de tipo

# Conversão de tipos

Usadas para converter um tipo de valor para outro tipo

- str(valor)
- int(valor)
- float(valor)
- bool(valor)

Ex: 
```Python
idade = int(input("Digite sua idade: "))
```

# Comentário

Vc pode comentar parte do codigo para que o programador que ler possa entender sua lógica

Vc usa "#" para comentários de uma linha
```Python
# Isso é um comentário
```
ou
Você usa:
```Python
"""
    Comentario
"""
```
Para comentarios de varias linhas
Obs: são 3 aspas simples ('') ou 3 aspas duplas ("")

Detalhe: O computador irá ignorar comentários na hora de rodar o código

# Blocos em python

O python não usa chaves({}) da mesma forma que outras linguagens, quando você quer rodar um bloco de código você colocará ":" no final da definição do bloco e o código que você quer que rode terá OBRIGATORIAMENTE que ter 1 tabulação pra direita

Ex:
```Python
if idade < 5:
    # Código
```

Obs: Observe que a palavra "Código" esta 1 tabulação pra direita em relação ao "if"

# If

Detalhe: Você precisa seguir a lógica dos blocos em python
Usamos o `if` pra que o projeto faça uma certa porção de código caso uma expressão seja verdadeira

Sintaxe: 
```Python
if expressao:
    # Código
```

Há também o `else`, que é a porção de código que será rodado caso a expressão seja falsa

Sintaxe:
```Python
if expressao:
    # Código se verdadeiro
else:
    # Código se falso
```

Existe também o `if` com várias verificações


Sintaxe:

```Python
if expressao1:
    # Código se expressão 1 for verdadeira
elif expressao2:
    # Código se expressão 2 for verdadeira
else:
    # Código se nenhuma das expressões for verdadeira
```


Obs: Esse tipo de `if` poder ter quantos `elif` você quiser

Obs: Caso você conheça outras linguagens de programação, você pode estranhar o termo `elif`, mas é apenas a abreviação de `else if`

Lembre-se: Sempre que for fazer uma verificação de igualdade você usará 2 iguais "=="

# Laços de repetição
No python existem 2 tipos: `for` e `while`

## For
O `for` será usado quando você sabe quantas vezes o codigo vai rodar

### Como ele funciona

O `for` irá contar de um valor até outro, de 0 a 10 por exemplo. Na hora que for criar, você terá que dizer em que valor ele deve começar a contagem e em que valor ele deve parar


### Sintaxe

Sintaxe:
```Python
for variavel in range(valorInicio, valorFinal):
    # Código
```

Detalhe importante: O `for` não vai literalmente até o valor que você mandou, ele para no número anterior, então caso você mande ele contar de 0 a 10, ele não irá até o 10, ele vai parar no 9

Caso precise, você pode controlar de quanto em quanto o `for` conta ou até fazer ele contar de forma decrescente

Sintaxe:
```Python
for variavel in range(valorInicio, valorFinal, passo):
    # Código
```

Obs: Lembrando que o valor do "passo" é opcional, você só vai usar caso queira mudar a forma que ele conta

## While
O `while` irá rodar enquanto uma expressão for verdadeira. Nós o usamos quando não sabemos quantas vezes o código vai rodar

Sintaxe:
```Python
while expressao:
    # Código
```

Obs: O `while` faz a verificação da expressão antes de rodar o código que está dentro dele e caso a expressão seja verdadeira, ele roda o código que está dentro dele


