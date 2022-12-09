[string]$sourceDirectory  = "AllInBlog\dist\AllInBlog\*"
[string]$destinationDirectory = ".."
Copy-item -Force -Recurse $sourceDirectory -Destination $destinationDirectory