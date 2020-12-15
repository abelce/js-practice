interface Super {
    name: string;
    // age?: number;
    [index: string]: string;
}


function demo(obj: Super) {

}

let ro: ReadonlyArray<number> = [1, 2, 3];


interface ClockInterface {
    currentDate: Date;
    setDate(data: Date);
}

class MyClock implements ClockInterface {
    currentDate = new Date();
    setDate(data: Date) {

    }
}


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function(start: number){}
    counter.interval = 12;
    counter.reset = function() {
        this.interval = 0;
    }   
    return counter;
}

let counter = getCounter();