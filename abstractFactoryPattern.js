const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Abstract factory interface
class DataFactory {
  createData(userId) {}
}

// Concrete factory for lesson completion rates
class LessonCompletionRatesFactory extends DataFactory {
  createData(userId) {
    return {
      userId: userId,
      completionRates: {
        lesson1: 80,
        lesson2: 50,
      },
    };
  }
}

// Concrete factory for error logs
class ErrorLogsFactory extends DataFactory {
  createData(userId) {
    return [
      { userId: userId, error: 'Page not found' },
      { userId: userId, error: 'Server error' },
    ];
  }
}

// Concrete factory for user paths
class UserPathsFactory extends DataFactory {
  createData(userId) {
    return ['/page1', '/page2', '/page3'];
  }
}

// Concrete factory for demographic data
class DemographicDataFactory extends DataFactory {
  createData(userId) {
    return {
      userId: userId,
      age: 25,
      gender: 'male',
    };
  }
}

// Client class using the abstract factory
class ActivityProvider {
  constructor() {
    this.dataFactories = {
      lessonCompletionRates: new LessonCompletionRatesFactory(),
      errorLogs: new ErrorLogsFactory(),
      userPaths: new UserPathsFactory(),
      demographicData: new DemographicDataFactory(),
    };
  }

  getData(factoryName, userId) {
    // Get the factory based on the provided name
    const factory = this.dataFactories[factoryName];

    if (factory) {
      // Use the factory to create data
      return factory.createData(userId);
    } else {
      throw new Error('Unsupported factory: ' + factoryName);
    }
  }
}

// Example of using the ActivityProvider
const activityProvider = new ActivityProvider();

// Get lesson completion rates for a user
const lessonCompletionRatesData = activityProvider.getData(
  'lessonCompletionRates',
  'user123'
);
console.log('Lesson Completion Rates:', lessonCompletionRatesData);

// Get user paths for another user
const userPathsData = activityProvider.getData('userPaths', 'user456');
console.log('User Paths:', userPathsData);

module.exports = app;