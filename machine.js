import chalk from 'chalk';

import os from 'node:os'


function monitor(){
    


const oldcpus =os.cpus();
// console.log('oldcpus',oldcpus);
setTimeout(()=>{

const newcpus=os.cpus();


const usage=newcpus.map((cpu, i)=>{
    return{
        core: i,
        usage:calculatecpus(oldcpus[i], newcpus[i]) + '%',
    };
});
console.clear();
console.log(chalk.bgMagenta('============System Stats============='));
console.table(usage);
const usedmemory=(os.totalmem() - os.freemem()) / (1024*1024*1024);

console.log('Memory used:${usedmemory.toFixed(2)}GB / ${os.totalmem()/(1024*1024*1024).toFixed(2)} GB');

},1000)

}
function calculatecpus (oldcpus, newcpus){
    const oldtotal = Object.values(oldcpus.times).reduce((a, b)=>a + b);
    const newtotal = Object.values(newcpus.times).reduce((a, b)=>a + b);

    const idle=newcpus.times.idle - oldcpus.times.idle;
    const total=newtotal - oldtotal;
    const used= total-idle;
    return ((100*used)/total).toFixed(1);

}
setInterval(monitor, 1000);

