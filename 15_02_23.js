programa { funcao inicio() {

cadeia forma, escrita
inteiro lado, altura, base, area,perimetro

faca{

	escreva("Qual forma voce deseja, triangulo ou quadrado?")
	leia(forma)} enquanto(forma != "triangulo" e forma != "quadrado")

	se(forma == "triangulo")
{

escreva("digite o valor da base:")
leia(base)

escreva("digite o valor da altura:")
leia(altura)

area = (base * altura/2)
perimetro = (base * 3)

escreva("\nA area do triangulo é:", area)
escreva("\nO perimetro do triangulo é:", perimetro)
}

se(forma == "quadrado"){

escreva("\ndigite o valor do lado:") leia(lado)

area = lado * lado perimetro = lado * 4

escreva("\nA area do quadrado é:", area) escreva("\nO perimetro do triangulo é:", perimetro)

} } }
