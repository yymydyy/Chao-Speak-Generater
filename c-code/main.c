#include "base16.h"  
#include <stdio.h> 
#include <string.h>

int main(int argc, char *argv[]) {
	unsigned char* buf = NULL;
	if (strcmp(argv[1], "-e") == 0 || strcmp(argv[1], "-E") == 0) {
		buf = base_encode(argv[2]);
		printf("%s\n", buf);
	}
	else if ((strcmp(argv[1], "-d") == 0 || strcmp(argv[1], "-D") == 0) /* && strlen(argv[2])%2==0 */) {
		buf = base_decode(argv[2]);
		printf("%s\n", buf);
	}
	else {
		printf("Error\n");
	}
	
	free(buf);

	return 0;
}