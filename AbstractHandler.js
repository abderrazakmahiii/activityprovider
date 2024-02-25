class AbstractHandler {
    constructor(successor = null) {
      this.successor = successor;
    }
  
    setSuccessor(successor) {
      this.successor = successor;
    }
  
    handle(insight) {
      if (this.successor) {
        this.successor.handle(insight);
      }
    }
  }