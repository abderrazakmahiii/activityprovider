// Handles forwarding insights to the Learning Assistant for additional support
class LearningAssistantHandler implements Handler {
    private learningAssistant: LearningAssistant;
  
    constructor(learningAssistant: LearningAssistant) {
      this.learningAssistant = learningAssistant;
    }
  
    handle(insight: Insight): void {
      this.learningAssistant.receiveInsight(insight);
    }
  }
  