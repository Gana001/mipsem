// Simulator will go here
//

function Instruction(type,operation,dest,source1,source2){
    this.IType = type;
    this.IOperation = operation;
    this.IDestReg = dest;
    this.ISourceReg1 = source1;
    this.ISourceReg2 = source2;
    this.IsBranchJumpTarget  = false;

}



function MipSim(){
    this.R = {};
    this.Mem = {}

    this.pc = 0;

    for(var i=0; i < 32; i++){
        this.R[i] = 0;
    }

    for(var i=0; i < 128; i++){
        this.Mem[i] = 0;
    }

    this.R[1] = 1; 





}   

MipSim.prototype._putReg = function(regNum, value){
    if(regNum == 0){
        // Do Nothing
    }else if (regNum < 32){
       this.R[regNum] = value; 
    }else{
        throw 'Bad Register';
    };

}

MipSim.prototype._getReg = function(regNum){
    if (regNum == 0){
        return 0;
    }else if(regNum < 32){

        return R[regNum];
    }else{
        throw 'Bad Register';
    };

}


MipSim.prototype._putMem = function (memLoc,value){
    if (memLoc % 4 == 0 && memLoc > -1){
        var realLoc = memLoc / 4;

        this.Mem[realLoc] = value;

    }else{

        throw 'Bad Memory Location';
    }

}

MipSim.prototype._getMem = function (memLoc){
    if (memLoc % 4 == 0 && memLoc > -1){
        var realLoc = memLoc / 4;

        return this.Mem[realLoc];

    }else{

        throw 'Bad Memory Location';
    }

}

MipSim.prototype.loadProgram = function(program){




}


MipSim.prototype.doSimulation = function(callback){




}






