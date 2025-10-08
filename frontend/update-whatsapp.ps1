$files = @(
    "src/pages/ProductsPage.jsx",
    "src/pages/VideosPage.jsx",
    "src/pages/ContactPage.jsx",
    "src/pages/CartPage.jsx",
    "src/components/Footer.jsx",
    "src/pages/TermsAndConditionsPage.jsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content -replace '919810681928', '919650786531'
        $content = $content -replace '\+91-9810681928', '+91-9650786531'
        $content = $content -replace '\+91 9810681928', '+91 9650786531'
        $content | Set-Content $file -NoNewline
        Write-Host "Updated: $file"
    }
}
Write-Host "All WhatsApp numbers updated successfully!"
