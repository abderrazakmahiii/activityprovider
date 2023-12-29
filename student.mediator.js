class StudentMediator {
  constructor(mediatorFactory) {
    this.mediatorFactory = mediatorFactory;
  }

  connectTeacher() {}

  submitProgress(progressData) {
    this.mediatorFactory.createAwarenessMediator().notifyAwareness(
      'submitProgress',
      progressData
    );
  }
}

export default StudentMediator;
