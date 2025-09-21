### Este arquivo foi feito para ajudar a lembrar os conceitos principais da linguagem C e poderá sofrer alterações sem aviso prévio e contém erros de português, pois foi escrito com pressa!

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

# Funções

Funções são blocos de código que podem ser reutilizados. Usamos as funções quando uma porção de código será usada várias vezes ao longo do código.

## Sintaxe

```C

tipo nome(){
    // Código
}
```

Ao criarmos uma função em C, precisamos definir ela também na parte superior do código (antes da main)
```C
#include <stdio.h>

tipo nomeDaFuncao();

int main(){
    // Código
    return 0;
}

tipo nomeDaFuncao(){
    // Código
}
```

Ao criarmos uma função, precisamos chamá-la, para que rode a porção de código
```C
int main(){
    nomeFuncao();
    return 0;
}

```

Ex:
```C
#include <stdio.h>

void mostrar();

int main(){
    mostrar();
    // Resultado: Ola mundo
    return 0;
}

void mostrar(){
    printf("Ola mundo");
}

```

## Tipos das funções

Funções podem retornar valores ao local onde foram chamadas, por isso, quando criamos uma função temos que dizer que tipo de valor ela vai retornar
Caso a função não vá retornar nada, falamos que o tipo dela é `void`

Ex sem retorno:
```C

void funcao1(){
    printf("Ola");
}

```

Ex com retorno:
```C
#include <stdio.h>

int soma();

int main(){
    int valor = soma();
    // O valor de retorna que virá de "soma()" será guardado na variavel "valor"
    printf("%i", valor);
    return 0;
}

int soma(){
    int n1 = 5;
    int n2 = 7;
    int soma = n1 + n2;
    return soma;
}
```


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



## Como pegar valores
Como acessar os itens de uma array
### Sintaxe:
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
numeros[3] = 3;
```

# Ponteiros
Ponteiros são variáveis que ao invés de guardar um valor, eles guardam o "endereço" onde aquele valor está armazenado

## Como criar

### Sintaxe
```C
// É necessário criar uma variável normal primeiro
tipo nomeVariavel = valor;

// Ponteiro:
tipo *nomeDoPonteiro = &nomeVariavel;
```
Obs: O ponteiro tem que ser do mesmo tipo da variável

Explicação: O simbolo `&` retorna o endereço da valor que está na frente dele, então ao fazermos `&nomeVariavel`, ele retornará o endereço da variavel `nomeVariavel`
O simbolo `*` mostra que o que estamos criando é um ponteiro

Ex:
```C

int idade = 18;
int *pIdade = &idade;

```


## Como pegar o valor

Para pegar o valor que um ponteiro está guardando, basta fazer o seguinte:

### Sintaxe
```C
*nomePonteiro;
```

Ex:
```C
int idade = 18;
int *pIdade = &idade;

printf("%i", *pIdade);
// O resultado será '18'
```

## Como alterar o valor

Para alterar o valor que um ponteiro está guardando, basta fazer o seguinte:


### Sintaxe
```C
*nomePonteiro = novoValor;
```

Ex:
```C
int idade = 18;
int *pIdade = &idade;

*pIdade = 19;

printf("%i", *pIdade);
// O resultado será '19'
```

# Struct

Struct é uma estrutura que permite você "agrupar" um conjunto de variaveis que façam sentido juntas. Além de agrupar, você consegue criar vários structs que sigam a mesma "receita" mas que guardem valores diferentes um do outro

Pense no struct como uma receita de bolo.
A receita te permite fazer vários bolos que seguem a mesma lógica, mas que são um pouco diferentes um do outro

## Como criar

O struct permite você guardar quantas variaveis você quiser dentro dele e de tipos diferentes também.

### Sintaxe

```C
struct nomeStruct{
    tipo variavel1;
    tipo variavel2;
    tipo variavel3;
    // Lembrando que podem ser quantas você quiser
};
```
Lembre-se: Estamos criando a "receita"

Ex:
```C
struct Pessoa{
    char nome[100];
    int idade;
    float peso;
};
```

## Como atribuir valores

Para atribuir valores para um Struct, temos que criar a "receita" e depois transformar a "receita" em "bolo"

### Sintaxe

```C
// Criando a "receita"
struct nomeStruct{
    tipo variavel1;
    tipo variavel2;
    tipo variavel3;
};

// Transformando a "receita" em "bolo"
struct nomeStruct nomeDaVariavel1;
struct nomeStruct nomeDaVariavel2;
struct nomeStruct nomeDaVariavel3;
// Com 1 "receita" posso fazer quantos "bolos" eu quiser
```

Ex:
```C
struct Aluno{
    int nota1;
    int nota2;
    int nota3;
    int nota4;
};

struct Aluno aluno1 = {7, 8, 3}; 
struct Aluno aluno2 = {5, 3, 6};
struct Aluno aluno3 = {2, 4, 6}; 
```

Podemos tambem atribuir o valor depois de criado

```C
struct nomeStruct nomeVariavel;

nomeVariavel.nomeDoCampo = valor;
```

Ex:
```C
struct Aluno aluno1;

aluno1.nota1 = 8;
```

## Como alterar valores

Para alterar valores é bem simples

### Sintaxe

```C
nomeVariavel.nomeCampo = novoValor;
```

Ex:
```C
struct Aluno{
    int nota1;
};

struct Aluno aluno = {7};

// Mudando o valor
aluno.nota1 = 2;
```

## Pegar valores

Para pegar os valores de um struct, basta chama-lo e especificar o campo

### Sintaxe

```C
nomeVariavel.campo;
```

Ex:
```C
struct Aluno{
    int nota1;
};

struct Aluno aluno = {5};

printf("%i", aluno.nota1);
// Resultado: 5
```