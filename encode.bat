@echo off
set /p in=<./in.txt
base16 -e "%in%">./out.txt