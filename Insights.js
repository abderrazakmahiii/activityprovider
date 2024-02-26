// Represents a data structure for storing insights generated by the AwarenessAgent
class Insight {
  // Constructor to initialize the Insight object with relevant information
  constructor(studentId, courseId, insightType, details) {
      // Store the provided parameters as properties of the Insight object
      this.studentId = studentId;
      this.courseId = courseId;
      this.insightType = insightType;
      this.details = details;
  }
}

// Access properties of the created Insight
console.log('Student ID:', exampleInsight.studentId);
console.log('Course ID:', exampleInsight.courseId);
console.log('Insight Type:', exampleInsight.insightType);
console.log('Details:', exampleInsight.details);
