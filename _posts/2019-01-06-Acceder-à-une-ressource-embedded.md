---
tags: dotnet, tips
---

## Cas d'usage
- Lorsque l'on requête une base de données SQL, il peut être plus pratique d'enregistrer ses requêtes dans un fichier SQL que directement dans une string au sein de son code.

Voici une solution pour accéder à ces ressources embedded.

### Implémentation naïve: 

 Le chemin d'une ressource embedded respecte le format suivant:  
 *{AssemblyName}.{folderParent}.{sub-folder}.{...}.{filename}*


``` csharp
public static class EmbeddedRessources
    {
        public static string GetStringRessource(this Assembly assembly, string assemblyPath)
        {
            string path = $"{assembly.GetName().Name}.{assemblyPath}";

            using (var sr = new StreamReader(assembly.GetManifestResourceStream(path)))
            {
                return sr.ReadToEnd();
            }
        }
    }
````

 Pour un million d'accès à une même ressource, ce code à une durée de **2800 ms** depuis ma machine.


#### Implémentation optimisée: 

``` csharp
 public static class EmbeddedResources
    {       
        private static readonly ConcurrentDictionary<Assembly, string> _assemblyNameCache = new ConcurrentDictionary<Assembly, string>();
        private static readonly ConcurrentDictionary<string, string> _resourceCache = new ConcurrentDictionary<string, string>();

        public static string GetStringRessource(this Assembly assembly, string resourcePath)
        {
            string assemblyName = _assemblyNameCache.GetOrAdd(assembly, asm => assembly.GetName().Name);

            string path = $"{assemblyName}.{resourcePath}";

            return _resourceCache.GetOrAdd(path, key =>
             {
                 using (var sr = new StreamReader(assembly.GetManifestResourceStream(path)))
                 {
                     return sr.ReadToEnd();
                 }
             });
        }
    }
````
 Pour un million d'accès à une même ressource, ce code à une durée de **200 ms** depuis ma machine.
