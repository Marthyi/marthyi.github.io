Voici un exemple d'environnement de build
![Image configuration de solution](https://github.com/Marthyi/marthyi.github.io/raw/master/images/build_button.png)

Ces différents environnement permettent de déployer ou bien de débugger du code tout en étant dans des environnement différents.

Dans le cadre d'une application Web, voici à quoi le web.config associé:
![Image web.config](https://github.com/Marthyi/marthyi.github.io/raw/master/images/web_config.png)

# 1 Transformation Xml

En bas de votre csproj, décommentez la Target BeforeBuild comme ceci:

```xml
<Target Name="BeforeBuild">
    <TransformXml Source="Web.config" Transform="Web.$(ApplicationEnvironment).config" Destination="Web.config" />
  </Target>
```

# 2 Définir l'environnement associé à chaque build
Pour chaque configuration de solution ajoutez une variable nommée à votre goût (ici ApplicationEnvironment)
```xml
  <PropertyGroup Condition="'$(Configuration)|$(Platform)' == 'Dev-Debug|AnyCPU'">
    <DebugSymbols>true</DebugSymbols>
    <OutputPath>bin\</OutputPath>
    <DefineConstants>DEBUG;TRACE</DefineConstants>
    <DebugType>full</DebugType>
    <PlatformTarget>AnyCPU</PlatformTarget>
    <ErrorReport>prompt</ErrorReport>
    <CodeAnalysisRuleSet>MinimumRecommendedRules.ruleset</CodeAnalysisRuleSet>
    <ApplicationEnvironment>Dev</ApplicationEnvironment>
  </PropertyGroup>
```

# 3 Afficher en sous-fichier
Afin d'afficher en sous-fichier de web.config les différentes configurations d'environnements

```xml
 <ItemGroup>
    <Content Include="Web.config" />
    <None Include="Web.Dev.config">
      <DependentUpon>Web.config</DependentUpon>
    </None>
    <None Include="Web.Prod.config">
      <DependentUpon>Web.config</DependentUpon>
    </None>
  </ItemGroup>
```
