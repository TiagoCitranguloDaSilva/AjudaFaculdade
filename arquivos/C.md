
# Este arquivo foi feito para ajudar a lembrar os conceitos principais da linguagem C e poderá sofrer alterações sem aviso prévio


Este tópico deve ser ignorado, pois ele é uma metodologia que uso pra ensinar quem está comigo
# Exercicio C

    Faça um codigo q receba um número, se o numero for 1, diga "a", se for 2, diga "b" e se não for nenhum desses, diga "c"





# Código base 

    #include <stdio.h>

    int main(){

        // Código aki

        return 0;
    }

# variaveis

    Tipos : Inteiro, Booleano, Char, String, Float e Double

    Inteiro -> Números sem virgula

    Booleano -> Verdadeiro ou Falso

    Char -> Só recebe 1 caractere
    
    String -> Vários chars

    Float -> Numero com virgula -> Normalmente colocamos um f no final da variável Ex: float a = 15.2f

    Double -> Numero com virgula

# Definição de variaveis

    Formas de criar variáveis:

    tipo nome;

    tipo nome = valor;

# Mostrar na tela

    printf("") -> Ele mostra mensagens no console

    Ex: printf("Mensagem");

    Detalhe: Nós evitamos usar caracteres especiais já q o C n tem suporte nativo pra isso

    Detalhe: Ao printar uma mensagem, ele não quebra linha automaticamente, caso queira quebrar linha vc terá q colocar um "\n". Ex: printf("\n");

## concatenação

    Concatenação é o ato de juntar 2 coisas

    printf("Mensagem %(primeira letra do tipo da variavel)", variavel);

    Ex:  printf("Eu tenho %i anos", idade);

# Pegando valores do usuário

    usamos o scanf("")

    scanf("%(primeira letra do tipo da variavel)", &variavel);

    Ex: scanf("%i", &idade);

# If

    Usamos o if pra que o projeto faça uma certa porção de código caso uma expressão seja verdadeira


    Sintaxe: 

    if(expressao){

        // Código

    }

    Há também o else, que é a porção de código que será rodado caso a expressão seja falsa

    Sintaxe:

    if(expressao){

        // Código se verdadeiro

    } else {

        // Código se falso

    }

    Existe também o if com várias verificações
    

    Sintaxe:

    if(expressao1){

        // Código se expressão 1 for verdadeira

    } else if(expressao2) {

        // Código se expressão 2 for verdadeira

    } else {
          
        // Código se nenhuma das expressões for verdadeira

    } 

    Obs: Esse tipo de if poder ter quantos "else if" você quiser


    Lembre-se: Sempre que for fazer uma verificação de igualdade vc usará 2 iguais "=="
