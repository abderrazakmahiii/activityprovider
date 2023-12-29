class MediatorFactory {
  constructor() {}

  createTeacherMediator = () => {
    return new TeacherMediator(this);
  };

  createStudentMediator = () => {
    return new StudentMediator(this);
  };

  createAwarenessMediator = () => {
    return new AwarenessMediator();
  };
}

export default MediatorFactory;
