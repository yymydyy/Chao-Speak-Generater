#include "base16.h"
#include <string.h>

unsigned char* base_encode(unsigned char* str) {
	unsigned char* base_table = "!@#$%^&*()_+<>?/";
	long len;
	unsigned char* code = NULL;
	int i, j;

	len = strlen(str) * 2;

	code = (unsigned char*)malloc(sizeof(unsigned char)*(len + 1));
	code[len] = '\0';

	for (i = 0, j = 0; i < len - 1; i += 2, j++) {
		code[i] = base_table[str[j] >> 4];
		code[i + 1] = base_table[str[j] & 0xf];
	}

	return code;
}

unsigned char* base_decode(unsigned char* code) {
	unsigned char* base_table = "!@#$%^&*()_+<>?/";
	int table[128] = { 0 };
	long len;
	unsigned char* str = NULL;
	int i, j;

	for(i=0;i<strlen(base_table);i++){
		table[base_table[i]-1]=i;
	}

	len = strlen(code)/2;

	str = (unsigned char*)malloc(sizeof(unsigned char)*(len + 1));
	str[len] = '\0';

	for (i = 0, j = 0; j < len; i += 2, j++) { 
		str[j] = (unsigned char)(table[code[i]-1] << 4 | table[code[i + 1]-1] ); 
	}

	return str;
}