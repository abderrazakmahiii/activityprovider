class AwarenessMediator {
  constructor() {}

  connectTeacher(teacher) {
    this.teachers = [teacher];
  }

  connectStudent(student) {
    this.students = [];
  }

  notifyAwareness(event, data) {
    for (const teacher of this.teachers) {
      teacher.receiveNotification(event, data);
    }
  }
}

export default AwarenessMediator;
