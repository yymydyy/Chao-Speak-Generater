@echo off
set /p in=<./in.txt
base16 -d %in%>./out.txt
::echo %in%
::pause
::base16 -d &^e