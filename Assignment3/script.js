let openedtab=[];
    let startProcess=false;
    let k=0;
    function NewTab() {
        for(let i=0;i<5;i++){
            openedtab.push(window.open(
              "https://www.w3school.com", "_blank"));
        }
        startProcess=true;
        closeURL();
    }
    function closeURL(){
        let interval=setInterval(()=>{
            if(k>=5 || startProcess==false){
                clearInterval(interval);
                openedtab=[];
                k=0;
                return;
            }
            openedtab[k].close();
            k++;
        },2000)
    } 
    function stop(){
        startProcess=false
    }  