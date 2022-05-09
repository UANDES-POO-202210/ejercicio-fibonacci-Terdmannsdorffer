const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
    let x = 0, y = 1, z = data;
    
    for(let i = 2; i <= data; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    console.log(z);
});

const fibonacci = n => {
    let x = 0, y = 1, z = n;
    
    for(let i = 2; i <= n; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    
    return z;
  };

  