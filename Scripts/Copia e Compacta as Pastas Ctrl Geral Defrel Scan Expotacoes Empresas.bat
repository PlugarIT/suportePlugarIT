@Echo off
chcp 65001
Cls
Echo.
Echo.
Set/p Unidade=Digite a unidade ou letra do mapeamento onde o sistema esta instalado : 
%Unidade%
Cls
CD\
Cls
%Unidade%
Cd\
Echo.
Echo.
Set/p Pasta=Digite o nome da pasta em que o sistema esta instalado : 
Cls
CD\
Cls
Cd %Pasta%
Echo.
Echo Renomeando a pasta Exportações
Echo.
move Exportações Exportacoes
 if not exist Copia (
goto Apagar
) 
Cd copia
Del *.* /s /q
Del *.rar /s /q
Cd..
Rd Copia
:Apagar
Echo Aguarde.............
Del *.LCK /s
Cls
Del *.old /s
Cls
Del *.001 /s
Cls
Del *.002 /s
Cls
Del *.003 /s
Cls
Del *.004 /s
Cls
Del *.005 /s
Cls
Del *.123 /s
Cls
Md Copia
@Path "C:\Program Files\WinRAR"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Ctrl.rar" "%Unidade%\%Pasta%\Ctrl\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Defrel.rar" "%Unidade%\%Pasta%\Defrel\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Docs.rar" "%Unidade%\%Pasta%\Docs\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Geral.rar" "%Unidade%\%Pasta%\Geral\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Gescmail.rar" "%Unidade%\%Pasta%\Gescmail\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Exportacoes.rar" "%Unidade%\%Pasta%\Exportacoes\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Empresas.rar" "%Unidade%\%Pasta%\Empresas\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\Scan.rar" "%Unidade%\%Pasta%\Scan\*.*"
@rar a -d -r -ag-DDMM-HHMM "%Unidade%\%Pasta%\Copia\XSD.rar" "%Unidade%\%Pasta%\XSD\*.*"
Move Exportacoes Exportações
Cls
Echo.
Echo.
Echo Final da cópia
Echo.
Echo.
Echo.
pause




