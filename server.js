const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample JSON data for each tracked type
const sampleData = {
  pageTimeData: {
    userId1: { page1: 500, page2: 300 },
    userId2: { page1: 200, page2: 100 },
  },
  userProgressData: {
    userId1: 80,
    userId2: 50,
  },
  loginFrequency: 10,
  lessonCompletionRates: {
    userId1: { lesson1: 80, lesson2: 50 },
    userId2: { lesson1: 90, lesson2: 60 },
  },
  userFeedback: [
    { userId: 'user1', feedback: 'Great experience!' },
    { userId: 'user2', feedback: 'Needs improvement.' },
  ],
  errorLogs: [
    { userId: 'user1', error: 'Page not found' },
    { userId: 'user2', error: 'Server error' },
  ],
  userPaths: {
    userId1: ['/page1', '/page2', '/page3'],
    userId2: ['/page1', '/page2'],
  },
  demographicData: {
    userId1: { age: 25, gender: 'male' },
    userId2: { age: 30, gender: 'female' },
  },
  performanceMetrics: { metric1: 50, metric2: 75 },
};

// Endpoint for getting aggregated performance data
app.get('/', (req, res) => {
  const homepage = `
    <html>
      <body>
        <h1>Welcome to the Activity Provider</h1>
        <ul>
          <li><a href="/page-time-data">Page Time Data</a></li>
          <li><a href="/user-progress-data">User Progress Data</a></li>
          <li><a href="/login-frequency">Login Frequency</a></li>
          <li><a href="/lesson-completion-rates">Lesson Completion Rates</a></li>
          <li><a href="/user-feedback">User Feedback</a></li>
          <li><a href="/error-logs">Error Logs</a></li>
          <li><a href="/user-paths">User Paths</a></li>
          <li><a href="/demographic-data">Demographic Data</a></li>
          <li><a href="/performance-metrics">Performance Metrics</a></li>
        </ul>
      </body>
    </html>
  `;
  res.send(homepage);
});

// Endpoint for each tracked type
app.get('/page-time-data', (req, res) => {
  res.json(sampleData.pageTimeData);
});

app.get('/user-progress-data', (req, res) => {
  res.json(sampleData.userProgressData);
});

app.get('/login-frequency', (req, res) => {
  res.json({ loginFrequency: sampleData.loginFrequency });
});

app.get('/lesson-completion-rates', (req, res) => {
  res.json(sampleData.lessonCompletionRates);
});

app.get('/user-feedback', (req, res) => {
  res.json(sampleData.userFeedback);
});

app.get('/error-logs', (req, res) => {
  res.json(sampleData.errorLogs);
});

app.get('/user-paths', (req, res) => {
  res.json(sampleData.userPaths);
});

app.get('/demographic-data', (req, res) => {
  res.json(sampleData.demographicData);
});

app.get('/performance-metrics', (req, res) => {
  res.json(sampleData.performanceMetrics);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
