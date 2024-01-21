// Represents the data structure for storing student progress information
class StudentProgressData {
    constructor(studentId: string, courseId: string, assignments: Assignment[]) {
      this.studentId = studentId;
      this.courseId = courseId;
      this.assignments = assignments;
    }
  
    class Assignment {
      constructor(assignmentId: string, title: string, status: string, submissionDate: Date) {
        this.assignmentId = assignmentId;
        this.title = title;
        this.status = status;
        this.submissionDate = submissionDate;
      }
    }
  }
  