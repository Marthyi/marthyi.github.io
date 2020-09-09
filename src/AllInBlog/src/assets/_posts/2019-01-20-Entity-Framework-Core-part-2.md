## Migrations de la base de données

### Set-up
- Le package [Microsoft.EntityFrameworkCore.Design](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Design/) est requis pour permettre le fonctionnement de la CLI EF Core.

### Rappel
- Nous voulions un constructeur demandant la connection string afin d'avoir un code configurable.

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

Afin de transmettre la connection string au context, il est nécessaire de lui définir sa source **by code** et non en ligne de commande (comme sous EF 6).





``` csharp
 public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<MyContext>
    {
        public MyContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            string connectionString = configuration.GetConnectionString(nameof(MyContext));

            return new MyContext(connectionString);
        }
    }
````
### Pourquoi tout ce code?

Ici, le choix est fait de mettre un environnement dans la librairie EF afin d'avoir ce projet indépendant et autonome.

*Je ne veux pas driver ma montée de version depuis une application web. Dans un système 'distribué', je ne trouve pas pertinent de choisir une application web, plutôt qu'un autre (micro-)service pour décider de la montée de version. Ici c'est le développeur ou la CI qui drive la montée de version.*

#### Création d'une migration EF

- La cli crée le code C# de montée de version.

``` bat 
dotnet ef migrations add InitDb
````

#### Execution d'une migration

- La commande crée la base et/ou met à jour la base de données

``` bat 
dotnet ef database update
````





----

**Sources:**

[MSDN - migrations avec EF Core](https://docs.microsoft.com/fr-fr/ef/core/managing-schemas/migrations/)  

[MSDN - dotnet cli pour EF Core](https://docs.microsoft.com/en-us/ef/core/miscellaneous/cli/dotnet)

