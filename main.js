class Main {
  constructor() {
    const mediatorFactory = new MediatorFactory();

    const teacher = new TeacherMediator(mediatorFactory);
    const student = new StudentMediator(mediatorFactory);

    mediatorFactory.createAwarenessMediator().connectTeacher(teacher).connectStudent(student);

    student.submitProgress({ topic: 'Mathematics', progress: 80 });
  }
}

new Main();
