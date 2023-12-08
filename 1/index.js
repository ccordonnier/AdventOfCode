const { log } = require('console');
const fs = require('fs');
const { exit } = require('process');
const readline = require('readline');

void (async () => {
    const rl = readline.createInterface({
      input: fs.createReadStream('input.txt'),
      crlfDelay: Infinity,
    });
    
    var total = 0;
    rl.on('line', (line) => {
        /*old version*/
        /*
        var firstNumber = null;
        var lastNumber = null;
        
        for(var i=0; i< line.length;i++){
            if(!isNaN(line.charAt(i))){
                if(firstNumber == null){
                    firstNumber = line.charAt(i);
                }
                lastNumber = line.charAt(i);
            }
            total += parseInt(firstNumber+lastNumber);
        }*/
        
        
        /*new version*/
        let arrayNumbers = line.split("").map(value => parseInt(value,10)).filter(a=>a);
        total += parseInt(""+arrayNumbers[0]+arrayNumbers[arrayNumbers.length-1]);
    });
    console.log(total);
    await new Promise((res) => rl.once('close', res));
  })();