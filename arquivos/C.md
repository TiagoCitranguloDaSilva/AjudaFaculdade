### Este arquivo foi feito para ajudar a lembrar os conceitos principais da linguagem C e poderá sofrer alterações sem aviso prévio e contém erros de português visto que foi escrito com pressa!


<!-- 
Este tópico deve ser ignorado, pois ele é uma metodologia que uso pra ensinar quem está comigo
# Exercicio C
Faça um código que peça pro usuario digitar um numero até ele digitar 5, quando ele digitar 5, sai 
-->

# Código base do C

Todo codigo C **tem** que ter esse código

```C
#include <stdio.h>

int main(){

    // Código

    return 0;
}
```

# Variaveis

Tipos : Inteiro, Booleano, Char, String, Float e Double

- Inteiro -> Números sem virgula

- Booleano -> Verdadeiro ou Falso

- Char -> Só recebe 1 caractere

- String -> Vários chars

- Float -> Numero com virgula -> Normalmente colocamos um f no final da variável. Ex: `float a = 15.2f`

- Double -> Numero com virgula


# Definição de variaveis

Formas de criar variáveis:

```tipo nome;```

```tipo nome = valor;```

Ex:
```C
int idade = 20;
```

# Mostrar na tela

`printf("")` -> Ele mostra mensagens no console

Ex: 
```C
printf("Mensagem");
```

Detalhe: Nós evitamos usar caracteres especiais já que o C não tem suporte nativo pra isso

Detalhe: Ao printar uma mensagem, ele não quebra linha automaticamente, caso queira quebrar linha você terá que colocar um "\n".

Ex: 
```C
printf("Mensagem\n");
```

# Concatenação

Concatenação é o ato de juntar 2 coisas

Sintaxe:
```C
printf("Mensagem %(primeira letra do tipo da variavel)", variavel);
```

Ex:  
```C
printf("Eu tenho %i anos", idade);
```

# Pegando valores do usuário

Usamos o `scanf("")`

Sintaxe:
```C
scanf("%(primeira letra do tipo da variavel)", &variavel);
```

Ex: 
```C
scanf("%i", &idade);
```

# Comentário

Vc pode comentar parte do codigo para que o programador que ler possa entender sua lógica
Vc usa "//" para comentários de uma linha
```C
// Isso é um comentário
```
Ou
Você usa:
```C
/* 
Comentário
*/
```
Para comentarios de varias linhas

Detalhe: O computador irá ignorar comentários na hora de rodar o código


# If

Usamos o `if` pra que o projeto faça uma certa porção de código caso uma expressão seja verdadeira


Sintaxe: 
```C
if(expressao){

    // Código

}
```

Há também o `else`, que é a porção de código que será rodado caso a expressão seja falsa

Sintaxe:

```C
if(expressao){

    // Código se verdadeiro

} else {

    // Código se falso

}
```

Existe também o `if` com várias verificações


Sintaxe:

```C
if(expressao1){

    // Código se expressão 1 for verdadeira

} else if(expressao2) {

    // Código se expressão 2 for verdadeira

} else {

    // Código se nenhuma das expressões for verdadeira

} 

```

Obs: Esse tipo de `if` poder ter quantos `else if` você quiser


Lembre-se: Sempre que for fazer uma verificação de igualdade você usará 2 iguais "=="

# Switch

Existe uma alternativa de verificação de igualdade, chama-se `switch`

**O** `switch` **APENAS VERIFICA IGUALDADES**

Sintaxe:

```C
switch(variavel){
    case valorQueVoceQuerVerificar:
        // Código;
        break;
    case valorQueVoceQuerVerificar:
        // Código;
        break;
    case valorQueVoceQuerVerificar:
        // Código;
        break;
    default:
        // Código caso nenhum dos cases tenha funcionado, é tipo um "else"

}
```


# Laços de repetição
Existem 3 tipos: `for`, `while` e o `do while`

## For
O `for` será usado quando você sabe quantas vezes o codigo vai rodar

Obs: Se seu `for` for contar de forma crescente, você usará "++", se for decrescente, usará "--"

```C
//  Inicio                                 Quando parar   Passo
for(int contador = valorPorOndeVaiComecar; expressao;     contador++){
    printf("%n", contador);
}
```
Ex:
```C
for(int contador = 0; c < 10; c++){
    printf("O contador esta em %i", c);
}
```


## While
O `while` irá rodar enquanto uma expressão for verdadeira. Nós o usamos quando não sabemos quantas vezes o código vai rodar

Sintaxe:
```C
while(expressao){
    // Código
}
```

Ex:
```C
while(numero != 10){
    printf("O numero nao eh 10, digite denovo: ");
    // ...
}
```

Detalhe: O `while` faz a verificação da expressão antes de rodar o código que está dentro dele

Importante: Cuidado que caso você erre a lógica e faça um loop infinito, você pode acabar travando o computador


## Do while
Exatamente igual ao `while`, a única diferença é que o `do while` faz a verificação da expressão depois de rodar o código de dentro, então ele sempre vai executar o código dentro dele pelo menos 1 vez

Sintaxe:
```C
do{
    // Código
}while(expressao);
```

Ex:
```C
do{
    printf("O numero nao eh 10, digite denovo: ");
    // ...
}while(numero != 10);
```

Importante: Cuidado que caso você erre a lógica e faça um loop infinito, você pode acabar travando o computador

# Array
Arrays são variaveis que podem guardar varios valores do mesmo tipo

## Como declarar
Sintaxe:
```C
tipo nomeArray[tamanhoArray];
```
Ou
```C
tipo nomeArray[] = {valor1, valor2, valor3 e etc};
```

Ex:
```C
int nomeArray[] = {7, 12};
```

Como acessar os itens de uma array
Sintaxe:
```C
nomeArray[posicaoDoValorDentroDaArray];
```

Ex:
```C
frutas[2];
```

## Como mudar os valores

Sintaxe:
```C
nomeArray[posicaoDoValorDentroDaArray] = valorNovo;
```

Ex:
```C
numeros[3] = 5;
```


