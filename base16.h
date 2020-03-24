#ifndef _BASE16_H
#define _BASE16_H

#include <stdlib.h>
#include <stdio.h>

unsigned char* base_encode(unsigned char* str);
unsigned char* base_decode(unsigned char* code);

#endif // !_BASE16_H