// Represents the data structure for storing course information
class CourseData {
  constructor(courseId: string, title: string, description: string, modules: Module[]) {
    this.courseId = courseId;
    this.title = title;
    this.description = description;
    this.modules = modules;
  }
}

class Module {
  constructor(moduleId: string, title: string, content: string) {
    this.moduleId = moduleId;
    this.title = title;
    this.content = content;
  }
}
