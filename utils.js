var utils = {
    getFileFieldAsString:function(target){
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
                    $(document).trigger('inputLoaded', resultString.trim());
                
                };

                fileReader.readAsText(file);

            }

    } , 

    
    parser:function(oper){

        var base = oper.trim();
        var preProcess = base.split('\n');

        var clean = _.map(preProcess,function(e){ return e.trim()});
       
        // TODO Reorganize this so it uses good variable names.
        preProcess = clean;

        var registerStartIndex = _.indexOf(preProcess,'REGISTERS');

        var memoryStartIndex = _.indexOf(preProcess,'MEMORY');

        var codeStartIndex = _.indexOf(preProcess,'CODE');
        var registers = preProcess.slice(registerStartIndex+1,memoryStartIndex);


        var memory = preProcess.slice(memoryStartIndex+1,codeStartIndex);

        var code = preProcess.slice(codeStartIndex+1);

        var r = {}
        var m = {}
        var ins = {}

        _.each(registers, function(elem){
               var reg =  elem.split(" ");
               var regNum = reg[0].replace('R','');
               var regVal = reg[1];
               r[regNum] = regVal;
        });



        _.each(memory, function(elem){
               var mem  =  elem.split(" ");
               m[mem[0]] = mem[1];
        });

       var iCount  = 0;
       var iList   = 0;
       var labelMap = {};


        _.each(code, function(line){
            
            //Check For Branch Target
            
            if (_.indexOf(line,':') !== -1){
                var dissect = line.split(':');
                var sanitized = _.map(dissect,function(e){ return e.trim()});
                
                var lable = sanitized[0];
                
                labelMap[label] = iCount;
                line = sanitized[1];
                  
            }
              
            var decode = line.split(" ");
            
            var inst = decode[0].trim();
            
            var srcd = decode[1].trim().split(',');


            

            //Check For Immediate
            
          // if(_.indexof(line,
           


            // Increment Instruction Count
            iCount++;
        });



        var parsed = {"registers":r,"memory":m,"code":code};



    return parsed;

        
    


    },


    getInstruction: function(line){
        return function(){
            
            var decode = line.split(" ");
            var inst = decode[0].trim(); 
            var srcd = decode[1].trim().split(',');

            switch(inst){
                case "BNEZ":
                    return new Instruction("R","BNEZ",srcd[0], srcd[2],null,true);
                    
                    break;
                case "DADD":

                    return new Instruction("R","BNEZ",srcd[0], srcd[2],null,true);
                    break;
                case "LD":
                    break;
                case "SW":
                    break;
                case "SUB":
                    break;
            


            }
        };
    }


}
