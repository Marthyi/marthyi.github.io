---
tags: dotnet tips
---

![img](/images/appsettings.png)

``` xml 
 <ItemGroup>
    <None Include="appsettings.local.json">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
      <DependentUpon>appsettings.json</DependentUpon>
    </None>
    <None Include="appsettings.dev.json">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
      <DependentUpon>appsettings.json</DependentUpon>
    </None>
    <None Include="appsettings.qa.json">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
      <DependentUpon>appsettings.json</DependentUpon>
    </None>
    <None Include="appsettings.prod.json">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
      <DependentUpon>appsettings.json</DependentUpon>
    </None>
    <None Include="appsettings.json">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </None>
  </ItemGroup>
````





----
