// Handles forwarding insights to the Teacher for review and action
class TeacherHandler implements Handler {
    private teacher: Teacher;
  
    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }
  
    handle(insight: Insight): void {
      this.teacher.receiveInsight(insight);
    }
  }
  