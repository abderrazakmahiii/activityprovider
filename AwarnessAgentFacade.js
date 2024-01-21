// Handles interactions with the AwarenessAgent
class AwarenessAgentFacade {
    private awarenessAgent: AwarenessAgent;
  
    constructor(awarenessAgent: AwarenessAgent) {
      this.awarenessAgent = awarenessAgent;
    }
  
    shareCourse(courseId: string): Promise<void> {
      this.awarenessAgent.shareCourse(courseId);
    }
  
    trackStudentProgress(studentId: string, courseId: string): Promise<void> {
      this.awarenessAgent.trackStudentProgress(studentId, courseId);
    }
  
    generateInsights(): Promise<Insight[]> {
      return this.awarenessAgent.generateInsights();
    }
  }
  