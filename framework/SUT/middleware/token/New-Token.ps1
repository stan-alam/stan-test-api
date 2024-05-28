

function New-Token {
	<#
    .NOTES
        
    .SYNOPSIS
        Generates a Token via Powershell
    .DESCRIPTION
        Generates token
    .PARAMETER authToken
        Required: [string] Send Basic Auth token.
    .
    .EXAMPLE
        Invoke-Token -authToken $basicAuth
    #>
    [CmdletBinding()]
    Param(
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$basicAuth
)
    $DummyAuthTokenJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    $jwt = ConvertTo-Json($DummyAuthTokenJWT);

    Write-Host($jwt)

}