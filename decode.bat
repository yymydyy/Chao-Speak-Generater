@echo off
set /p in=<./in.txt
base16 -d "%in%">./out.txt