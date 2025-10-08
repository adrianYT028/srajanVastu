$filePath = "src/pages/ProductsPage.jsx"
$content = Get-Content $filePath -Raw
$content = $content -replace "priceRange: '₹[^']+'"," priceRange: 'Contact for Best Offer'"
$content | Set-Content $filePath -NoNewline
Write-Host "Prices replaced successfully!"
