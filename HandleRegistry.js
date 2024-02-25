class HandlerRegistry {
    constructor() {
      this.handlers = new Map();
    }
  
    registerHandler(handlerName, handler) {
      this.handlers.set(handlerName, handler);
    }
  
    getHandler(handlerName) {
      return this.handlers.get(handlerName);
    }
  }