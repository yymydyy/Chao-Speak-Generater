@echo off
set /p in=<./in.txt
base16 -e %in%>./out.txt
::echo %in%
::pause
::base16 -d &^e