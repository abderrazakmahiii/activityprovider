// Handles forwarding insights to the Teacher for review and action
class TeacherHandler {
  constructor(teacher) {
      this.teacher = teacher;
  }

  handle(insight) {
      this.teacher.receiveInsight(insight);
  }
}

// Export the class
module.exports = TeacherHandler;
