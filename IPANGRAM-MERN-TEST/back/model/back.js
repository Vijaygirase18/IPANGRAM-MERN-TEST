const express = require('express');
const app = express();
const PORT = 4000;

// Assume you have a MongoDB connection set up
const Employee = require('./models/Employee');

app.use(express.json());

// Endpoint for filtering and sorting employees
app.get('/employees', async (req, res) => {
  try {
    const { location, name, order } = req.query;

    let query = {};
    if (location) {
      query.location = location;
    }
    if (name) {
      query.name = name;
    }

    let sortQuery = {};
    if (order === 'asc') {
      sortQuery.name = 1;
    } else if (order === 'desc') {
      sortQuery.name = -1;
    }

    const employees = await Employee.find(query).sort(sortQuery);
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
