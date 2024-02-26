// Represents a registry for handlers
class HandlerRegistry {
  // Constructor to initialize the handlers map
  constructor() {
      this.handlers = new Map();
  }

  // Method to register a handler with a given name
  registerHandler(handlerName, handler) {
      // Add the handler to the handlers map using the specified name
      this.handlers.set(handlerName, handler);
  }

  // Method to get a handler by its name
  getHandler(handlerName) {
      // Retrieve the handler from the handlers map based on the name
      return this.handlers.get(handlerName);
  }
}

// Register a handler with the name "myHandler"
handlerRegistry.registerHandler('myHandler', someHandlerInstance);

// Get the handler named "myHandler" from the registry
const retrievedHandler = handlerRegistry.getHandler('myHandler');
