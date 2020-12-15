class EventEmitter {
    private events = {};

    private newEvent(eventName: string) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
    }
    
    public addEventListener(eventName: string, handler: Function ) {
        if (this.events[eventName]) this.newEvent(eventName);
        this.events[eventName].push(handler);
    }

    public removeEventListener(eventName: string, handler: Function ) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter( (fn: Function) => fn !== handler );
        }
    }

    public dispatch(eventName: string, params: any ) {
        if (this.events[eventName]) {
            this.events[eventName].map((fn: Function) => fn(params));
        }
    }
}