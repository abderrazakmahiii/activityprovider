// Implements the AwarenessMediator class, which serves as the central hub for communication between teachers, students, and the Learning Platform
class AwarenessMediator {
  constructor() {}

  connectTeacher(teacher) {}

  connectStudent(student) {}

  notifyTeacherAboutProgress(progressData) {
    for (const teacher of this.teachers) {
      teacher.receiveNotification('submitProgress', progressData);
    }
  }

  provideInsightsToTeacher(insights) {
    for (const teacher of this.teachers) {
      teacher.receiveNotification('provideInsights', insights);
    }
  }
}

export default AwarenessMediator;
