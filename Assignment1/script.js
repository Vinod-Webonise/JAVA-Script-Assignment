function arrayInput() {
    var size = prompt("enter size of array");
    var array = new Array(size);
    for (var i = 0; i < size; i++) {
        var element = prompt('enter element');
        array[i] = element;
    }

    for (var i = 0; i < size; i++) {
        for (var j = i; j < size; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    
    var count=0;
    for (var i = 0; i < size; i++) {
        
        for (var j = i + 1; j < size; j++) {
            if (array[i] == array[j]) {
                count++;
                break;
            }
        }

        
    }
    var newArray=new Array(size-count);
    var index=0;
    for(var i=0;i<size;i++){
        var rank=0;
        for(var j=i+1;j<size;j++){
            if(array[i]==array[j]){
                rank++;
            }
        }
        if(rank==0){
            newArray[index++]=array[i];
        }
    }
    for(var i=0;i<newArray.length;i++){
        var count2=0;
        for(var j=0;j<size;j++){
            if(newArray[i]==array[j]){
                count2++;
            }
        }
        document.write(newArray[i]+":"+count2+"<br>");
    }

}