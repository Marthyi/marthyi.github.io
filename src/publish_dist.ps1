[string]$sourceDirectory  = "AllInBlog\dist\AllInBlog\*"
[string]$destinationDirectory = ".."
Copy-item -Force -Recurse -Verbose $sourceDirectory -Destination $destinationDirectory