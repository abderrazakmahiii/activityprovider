class Main {
  constructor() {
    // Create an instance of MediatorFactory
    const mediatorFactory = new MediatorFactory();

    // Create instances of TeacherMediator and StudentMediator
    const teacher = new TeacherMediator(mediatorFactory);
    const student = new StudentMediator(mediatorFactory);

    // Connect the instances to an AwarenessMediator created by MediatorFactory
    mediatorFactory.createAwarenessMediator().connectTeacher(teacher).connectStudent(student);

    // Submit progress through the StudentMediator
    student.submitProgress({ topic: 'Mathematics', progress: 80 });
  }
}

new Main();
