// Handles interactions with the Course Management System
class CourseManagementSystemFacade {
  // Private property to store an instance of CourseManagementSystem
  constructor(courseManagementSystem) {
    // Initialize the courseManagementSystem property with the provided instance
    this.courseManagementSystem = courseManagementSystem;
  }

  // Method to manage student enrollments using the Course Management System
  manageStudentEnrollments(studentId, courseId) {
    // Call the manageStudentEnrollments method of the courseManagementSystem
    this.courseManagementSystem.manageStudentEnrollments(studentId, courseId);
  }

  // Method to update course data using the Course Management System
  updateCourseData(courseId, courseData) {
    // Call the updateCourseData method of the courseManagementSystem
    this.courseManagementSystem.updateCourseData(courseId, courseData);
  }
}
