// Represents the data structure for storing course information
class CourseData {
  constructor(courseId, title, description, modules) {
    this.courseId = courseId;
    this.title = title;
    this.description = description;
    this.modules = modules;
  }
}

// Represents the data structure for a module
class Module {
  constructor(moduleId, title, content) {
    this.moduleId = moduleId;
    this.title = title;
    this.content = content;
  }
}
