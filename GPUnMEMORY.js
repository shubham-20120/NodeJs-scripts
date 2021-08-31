// CPU info 
const { spawn } = require('child_process');
const cpu = spawn("wmic", ["cpu", "get", "loadpercentage"]);
cpu.stdout.on('data', function (data) {
    console.log(data.toString().slice(0, 14) + ': ' + Number(data.toString().slice(14)) + "%");
})

// free memory
const memory = spawn("wmic", ["OS", "get", "FreePhysicalMemory"]);
memory.stdout.on('data', function (data) {
    console.log(data.toString());
})

// total memory
const memory1 = spawn("wmic", ["OS", "get", "TotalVisibleMemorySize"]);
memory1.stdout.on('data', function (data) {
    console.log('TotalVisibleMemorySize ' + ' ' + data.toString().slice(0, 46) + data.toString().slice(46,) + data.toString().length);
})