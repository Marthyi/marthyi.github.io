Set-Location -Path '.\AllInBlog\src\assets\api\'

$posts = Get-Content -encoding utf8 'posts.json' | ConvertFrom-Json
$posts = [System.Collections.ArrayList]($posts)
#$date = Get-Date -Format 'yyyy-MM-dd'

$properties = @{
    title = "$(Get-Date -Format 'yyyy-MM-dd')-new-article"
    image = 'c_sharp.png'    
    }

$article = New-Object psobject -Property $properties; 


$posts.Add($article)
$posts | ConvertTo-Json | Out-File  -encoding utf8 'posts.json'

New-Item -Path '..\posts' -Name "$($properties.title).md" -ItemType "file"