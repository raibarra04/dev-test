// Interface Challenge
interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    upgradeRam(inc:number): number;
}

let myPC: Computer = {
    id: 1,
    brand: 'Dell',
    ram: 2,
    upgradeRam(inc){
        return this.ram + inc;
    }
}

const newRam = myPC.upgradeRam(10);

console.log(newRam)