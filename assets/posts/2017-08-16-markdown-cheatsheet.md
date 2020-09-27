# How To Markdown

\* Afin de forcer un saut à ligne il faut mettre deux espaces en fin de ligne
> lorem ipsum dolor sit amet,··  
consectetur adipiscing eli...

|Texte|Markdown|
|-----------------|-----------------|
|**Texte en gras**|\*\*Texte en gras**|  
|*Texte en italic*|\*Texte en italic*|  
|Caractère spécial|Caract\&egrave;re sp\&eacute;cial|
|[Link to google](http://www.google.com)|\[Link\]\(http://www.google.com\)|  
|<h1>Titre 1</h1> |# Title 1|
|<h2>Titre 2</h2>|## Title 2|
|<h3>Titre 3</h3>|### Title 3 |
|<h4>Titre 4</h4>|####  Title 4|
|<h5>Titre 5</h4>|#####  Title 5|
|<h6>Titre 6</h6>|######  Title 6|

#### Citation
>\>ligne1  
ligne2  

>ligne 1  
ligne 2  
 

#### Separateur

>\*******
**************
### Listes
#### Liste non ordonnée

> \* item  
··* sub item 1  <= deux espaces en début de ligne  
··* sub item 2  
\* item

* item
  * sub item 1 
  * sub item 2
* item
* item

#### Liste ordonnée

> 1\. item··  <= le saut de ligne est forcé par les deux espaces  
1.1. sub item 1··   
1.2. sub item 2··  
2. item  
3. item

1. item  
1.1. sub item 1   
1.2. sub item 2
2. item
3. item


**************
#### Image

\!\[logoname](http://url.com "altValue")  

<img src="http://mikemclin.net/mmwp/wp-content/uploads/2013/03/markdown-syntax-language.png" height="100px" />

![Le logo d'active](http://mikemclin.net/mmwp/wp-content/uploads/2013/03/markdown-syntax-language.png "markdown")

#### Tableau

|Header with long title|Header with long title|Header with long title|
|----------------------|:--------------------:|---------------------:|  
|col 1                 |col 2                | col 3                |

#### code
C#
```` csharp
if(x == 12)
    {
    System.Console.WriteLine("Hello World");
    }
else
{
System.exit(0);
}
````
Html
```` html
<a href="world">hello</a>
````