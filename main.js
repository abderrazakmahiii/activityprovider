class Main {
  constructor() {
    const mediatorFactory = new MediatorFactory();

    const teacher = new TeacherMediator(mediatorFactory);
    const student = new StudentMediator(mediatorFactory);
  }
}

new Main();