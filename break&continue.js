
for(i=1; i<=20; i++){
    if (i == 10){
        break;
    }
    document.write(" "+ i );
}
document.write("<br/>")

for(i=1; i<=20; i++){
    if (i %2== 0){
        continue;
    }
    document.write(" "+ i);
}

