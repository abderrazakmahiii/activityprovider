// Represents a handler for forwarding insights to the Learning Assistant for additional support
class LearningAssistantHandler {
  // Constructor that takes an instance of LearningAssistant as a parameter
  constructor(learningAssistant) {
      // Initialize the learningAssistant property with the provided instance
      this.learningAssistant = learningAssistant;
  }

  // Method to handle an insight by forwarding it to the Learning Assistant
  handle(insight) {
      // Call the receiveInsight method of the learningAssistant
      this.learningAssistant.receiveInsight(insight);
  }
}

// Export the class
module.exports = LearningAssistantHandler;
