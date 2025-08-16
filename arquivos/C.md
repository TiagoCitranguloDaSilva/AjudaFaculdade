
# Este arquivo foi feito para ajudar a lembrar os conceitos principais da linguagem C e poderá sofrer alterações sem aviso prévio


Este tópico deve ser ignorado, pois ele é uma metodologia que uso pra ensinar quem está comigo
# Exercicio C

    Faça um código que peça pro usuario digitar um numero até ele digitar 5, quando ele digitar 5, sai

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

# Comentário

    Vc pode comentar parte dó codigo para q o programador q ler possa entender sua lógica
    Vc usa "//" para comentários de uma linha
    ou
    Vc usa:
    /* 
        Comentario
    */
    Para comentarios de varias linhas

    Detalhe: O computador irá ignorar comentários na hora de rodar o código

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

# Switch

    Existe uma alternativa de verificação de igualdade, chama-se switch

    O Switch APENAS VERIFICA IGUALDADES

    Sintaxe:

    switch(variavel){
        case valorQueVoceQuerVerificar:
            // código;
            break;
        case valorQueVoceQuerVerificar:
            // código;
            break;
        case valorQueVoceQuerVerificar:
            // código;
            break;
        default:
            // codigo caso nenhum dos cases tenha funcionado, é tipo um "else"
        
    }


# Laços de repetição
    Existem 3 tipos: For, while e o Do While

    ## For
        O for será usado quando vc sabe quantas vezes o codigo vai rodar

        Obs: Se seu For for contar de forma crescente, você usará "++", se for decrescente, usará "--"

            Inicio                                 Quando parar   Passo
        for(int contador = valorPorOndeVaiComecar; expressao;     contador++){
            printf("%n", contador);
        }
    
    
    ## While
        O while será usado enquanto uma expressão for verdadeira

        while(expressao){
            // Codigo
        }


    ## Do while

    Sintaxe:
    do{

    }while(expressao);

