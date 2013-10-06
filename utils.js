var utils = {

    getFileFieldAsString:function(target, nextfunc){
            var file  = target[0].files[0];
            var fileReader = new FileReader();
            var resultString;
            
            if(file == null){
                throw 'File Cannot Be Null';
            }else if (file.type !== "text/plain"){
                throw 'File must be plain text';
            }else if (file.size < 1){
                throw 'File size myst be greater than 0';
            }else{
                fileReader.onloadend = function(){                
                    resultString = fileReader.result;
                    nextfunc(resultString.trim());                   
                };

                fileReader.readAsText(file);

            }

    } , 

    
    parser:function(oper){

        var base = oper.trim();
        var preProcess = base.split('\n');

        var clean = _.map(preProcess,function(e){ return e.trim()});
        preProcess = clean;
       console.log(preProcess); 
        var registerStartIndex = _.indexOf(preProcess,'REGISTERS');

        var memoryStartIndex = _.indexOf(preProcess,'MEMORY');

        var codeStartIndex = _.indexOf(preProcess,'CODE');
        console.log(codeStartIndex);
        var registers = preProcess.slice(registerStartIndex+1,memoryStartIndex);


        var memory = preProcess.slice(memoryStartIndex+1,codeStartIndex);

        var code = preProcess.slice(codeStartIndex+1);

        console.log(registers);
        console.log(memory);
        console.log(code);

        



    } 



}
