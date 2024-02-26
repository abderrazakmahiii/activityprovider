// Definition of the AwarenessAgentFacade class
class AwarenessAgentFacade {
  // Constructor that takes an instance of AwarenessAgent as a parameter
  constructor(awarenessAgent) {
    // Initialize the awarenessAgent property with the provided instance
    this.awarenessAgent = awarenessAgent;
  }

  // Method to share a course using the AwarenessAgent
  shareCourse(courseId) {
    // Call the shareCourse method of the awarenessAgent
    this.awarenessAgent.shareCourse(courseId);
  }

  // Method to track student progress using the AwarenessAgent
  trackStudentProgress(studentId, courseId) {
    // Call the trackStudentProgress method of the awarenessAgent
    this.awarenessAgent.trackStudentProgress(studentId, courseId);
  }

  // Method to generate insights using the AwarenessAgent
  generateInsights() {
    // Call the generateInsights method of the awarenessAgent and return the result
    return this.awarenessAgent.generateInsights();
  }
}
