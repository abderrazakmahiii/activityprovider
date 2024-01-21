// Handles interactions with the Teacher
class TeacherFacade {
    private teacher: Teacher;
  
    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }
  
    receiveInsights(teacherId: string, insights: Insight[]): Promise<void> {
      this.teacher.receiveInsights(teacherId, insights);
    }
  }
  