// Define the AbstractHandler class
class AbstractHandler {
  // Constructor with an optional successor (default is null)
  constructor(successor = null) {
    this.successor = successor;
  }

  // Method to set the successor of the handler
  setSuccessor(successor) {
    this.successor = successor;
  }

  // Method to handle an insight
  handle(insight) {
    // If there is a successor, delegate the handling to the successor
    if (this.successor) {
      this.successor.handle(insight);
    }
    // Note: If there is no successor, the handling ends here.
  }
}

// Export the AbstractHandler class
module.exports = AbstractHandler;
