// Handles interactions with the Student
class StudentFacade {
    private student: Student;
  
    constructor(student: Student) {
      this.student = student;
    }
  
    accessCourseContent(courseId: string): Promise<void> {
      this.student.accessCourseContent(courseId);
    }
  
    provideFeedback(studentId: string, courseId: string, feedback: string): Promise<void> {
      this.student.provideFeedback(studentId, courseId, feedback);
    }
  }
  