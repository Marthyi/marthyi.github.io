---
tags: dotnet
---


## C# 7.1
Date de sortie: 2017
#### Fonctionnalités
- prochainement dans un article dédié

**************************************************
## C# 7
Date de sortie: 2016

#### Fonctionnalités
- prochainement dans un article dédié

**************************************************
## C# 6
Date de sortie: 2015

#### Fonctionnalités
- Property en lecture seule
```csharp
public string Data {get;}
````
- Initialiseurs de property
```csharp
public string Firstname {get;set;} = "Hello";
````
- Membres de fonction expression-bodied
```csharp
public string Fullname  => $"{Firstname} {Lastname}"; // propert expression-bodied
public string SayHello(string name) => "Hello {name}!"; // method expression-bodied
````
- using static
```csharp
using static System.Console; // Console is static class

WriteLine("Hello World");
````
- Opérateur null
```csharp
var person =null;
Console.WriteLine(person?.name ?? "no-name");
Console.WriteLine(person?.name?.ToString());
````
**************************************************
## C# 5
Date de sortie: 2012
#### Fonctionnalités
* nouveaux mots clés *async/await* 


```csharp
public void MaMethodeAvecInfo(string message,  
        [System.Runtime.CompilerServices.CallerMemberName] string memberName = "",  
        [System.Runtime.CompilerServices.CallerFilePath] string sourceFilePath = "",  
        [System.Runtime.CompilerServices.CallerLineNumber] int sourceLineNumber = 0)  
{  
    System.Diagnostics.Trace.WriteLine("message: " + message);  
    System.Diagnostics.Trace.WriteLine("Nom de la méthode name: " + memberName + " = MaMethodeAvecInfo");  
    System.Diagnostics.Trace.WriteLine("Chemin du fichier" + sourceFilePath + " = C:\...\file.cs");  
    System.Diagnostics.Trace.WriteLine("Numéro de ligne: " + sourceLineNumber + " = ");  
}  
````
**************************************************
## C# 4
Date de sortie: 2010
#### Fonctionnalités
* nouveau mot clé *dynamic* 
* arguments nommés sur les méthodes
```csharp
// méthode
PrintOrderDetails(int orderNum,string productName,string sellerName);
// méthode avec arguments nommés
PrintOrderDetails(orderNum: 31, productName: "Red Mug", sellerName: "Gift Shop");
````
**/!\ A partir de C#7.2, l'ordre des arguments sera vérifié**
**************************************************
## C# 3
- Date de sortie: 2003
#### Fonctionnalités
* nouveau mot clé *var* 
* introduction de [LINQ](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/concepts/linq/index)

## C# 2
Date de sortie: 2005
**************************************************
## C# 1
Date de sortie: 2002

Références de l'article:
[docs.microsoft - whats new in C# ](https://docs.microsoft.com/fr-fr/dotnet/csharp/whats-new/)
