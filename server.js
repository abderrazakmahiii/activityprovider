const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Endpoint for handling parameters
app.post('/parameters', async (req, res) => {
  // Parse the parameter data from the request body
  const newParameters = req.body;

  // Store the parameters in a separate object
  const parameters = { ...sampleData, ...newParameters };

  // Use the parameters to update the data in the routes
  app.get('/page-time-data', async (req, res) => {
    res.json(parameters.pageTimeData);
  });

  app.get('/user-progress-data', async (req, res) => {
    res.json(parameters.userProgressData);
  });

  // ... and so on for all endpoints

  res.json({ message: 'Parameters updated' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});