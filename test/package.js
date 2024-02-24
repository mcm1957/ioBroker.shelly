const path = require('path');
const { tests } = require('@mcm4iob/testing');

// Validate the package files
tests.packageFiles(path.join(__dirname, '..'));
