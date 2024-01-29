const n = 5;
for(let i=1; i<=n ; i++){
    for(j = 1; j <= n ; j++){
        if(i == 1 || i == 5 || i+j == n ){
            process.stdout.write("*");
        }
        else {
            process.stdout.write(" ");
        }
        
    }
    console.log();
}
