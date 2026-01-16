# PowerShell script to add second phone number throughout the codebase

$files = @(
    "src\pages\VideosPage.jsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Updating $file..." -ForegroundColor Yellow
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Add second phone number in all CTAs
        $content = $content -replace 'Contact: \+91-9650786531 \|', 'Contact: +91-9650786531 / +91-9810681928 |'
        $content = $content -replace 'संपर्क: \+91-9650786531 \|', 'संपर्क: +91-9650786531 / +91-9810681928 |'
        
        Set-Content $file -Value $content -Encoding UTF8 -NoNewline
        Write-Host "✓ Updated $file" -ForegroundColor Green
    } else {
        Write-Host "✗ File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`nAll files updated successfully!" -ForegroundColor Green
