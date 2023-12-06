const fs = require('fs');
const readline = require('readline');

void (async () => {
    const rl = readline.createInterface({
      input: fs.createReadStream('input.txt'),
      crlfDelay: Infinity,
    });
    
    var total = 0;
    rl.on('line', (line) => {
        var firstNumber = null;
        var lastNumber = null;
        for(var i=0; i< line.length;i++){
            if(!isNaN(line.charAt(i))){
                if(firstNumber == null){
                    firstNumber = line.charAt(i);
                }
                lastNumber = line.charAt(i);
            }
        }
        total += parseInt(firstNumber+lastNumber);
    });
    console.log(total);
    await new Promise((res) => rl.once('close', res));
  })();