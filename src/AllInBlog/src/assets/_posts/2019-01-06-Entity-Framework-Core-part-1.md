---
tags: entity-framework
---

Note:  
*il est a noter ici qu'on ne parlera des fonctionnalités d'entity framework, uniquement dans son usage d'accès à une base de données SQL Server*

#### Prérequis
Installer le package NuGet :  [Microsoft.EntityFrameworkCore.SqlServer](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/)

## Premier accès aux données

#### Le model
``` csharp
   public class Account
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
````

#### Le context Entity Framework
``` csharp
 public class MyContext : DbContext
    {
        private readonly string _connectionstring;

        public DbSet<Account> Accounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionstring);
        }

        public MyContext(string connectionstring)
        {
            _connectionstring = connectionstring;
        }
    }
````

#### Le code appelant
``` csharp
class Program
    {
        public static string connectionString = "Server=localhost;Database=local;Integrated Security=true";

        static void Main(string[] args)
        {

            using (var ctx = new MyContext(connectionString))
            {
                Account[] accounts = ctx.Accounts.ToArray();
            }

        }
    }
````

## Résultat de EF Core

Voici le SQL généré pour une appel full-table
``` sql
SELECT [a].[Id], [a].[FirstName], [a].[LastName]
FROM [Accounts] AS [a]
````