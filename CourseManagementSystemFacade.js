// Handles interactions with the Course Management System
class CourseManagementSystemFacade {
    private courseManagementSystem: CourseManagementSystem;
  
    constructor(courseManagementSystem: CourseManagementSystem) {
      this.courseManagementSystem = courseManagementSystem;
    }
  
    manageStudentEnrollments(studentId: string, courseId: string): Promise<void> {
      this.courseManagementSystem.manageStudentEnrollments(studentId, courseId);
    }
  
    updateCourseData(courseId: string, courseData: CourseData): Promise<void> {
      this.courseManagementSystem.updateCourseData(courseId, courseData);
    }
  }
  