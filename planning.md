# Planejamento de construção do programa

* Trabalhar com branches diferentes
  - Brach Main p/ trabalhos construção base e Merge.
  - Branch Back p/ trabalhos exclusivos com JavaScript
  - Branch Front p/ trabalhos com CSS e HTML
>>
* Estilizar a base visual e acrescentar os elementos
* Trabalhar toda parte lógica

Digitando git branch sabemos quais branches temos no nosso repositório:

~~~bash
gitbranch
~~~

Para criar uma nova branch é bem simples: 

~~~bash
git branch <nome da branch> /* então seria:*/
--------------------------->
git branch development
--------------------------->
gitbranchdev
~~~

Assim, criamos uma branch chamada development e podemos ver a seguir:

~~~bash
branchdevelopment
~~~

O * informa em que branch estamos. Observe que não estamos na development, mas para irmos é bem simples:

~~~
git checkout development
~~~

Assim sabemos onde onde estamos.

~~~bash
gitcheckoutdev
--------------------------->
git status
--------------------------->
gitstatusbranchdev
~~~

Sabemos que estamos na branch e nesse caso não há nada para ser committed.

Agora vamos commit arquivos na branch apenas. Portanto, criei o arquivo a seguir no repositório:

~~~bash
productnewfile
~~~

E vou dizer ao git que esse arquivo vai para branch. Considerando que estou na branch de development, basta:

~~~bash
git add <nome file>

gitaddbranch
~~~

E agora vamos realizar o commit:

~~~bash
git commit –m ‘adicionando arquivo na branch’
~~~

Verificando alteração na branch.

Para verificar se o arquivo realmente foi para branch, vamos ver o log da branch:
~~~bash
git log

gitlogbranch
~~~
Observe as alterações feitas na branch. Para conferir que a master não sabe disso, vamos ver o log da master:

~~~bash
git checkout master

git log

gitlogmaster
~~~

Veja que a master nem sabe o que aconteceu na branch.