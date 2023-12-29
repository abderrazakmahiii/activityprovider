// Implements the StudentMediator class, which handles communication between students and the AwarenessAgent
class StudentMediator {
  constructor(mediatorFactory) {
    this.mediatorFactory = mediatorFactory;
  }

  connectTeacher() {}

  submitProgress(progressData) {
    this.mediatorFactory.createAwarenessMediator().notifyAwareness('submitProgress', progressData);
  }
}

export default StudentMediator;
