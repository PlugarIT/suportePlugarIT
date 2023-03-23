@echo off
cd\
set /p unidade=Digite a unidade: 
cls 
%unidade%
set /p pasta=Digita a pasta que possui arquivos lck: 
cd %Pasta%
del *.lck /s 
Echo. "Arquivos Lck deletado com sucesso!"
Pause