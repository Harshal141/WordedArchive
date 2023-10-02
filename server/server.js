const path = require('path');
const express = require('express');
const app = express();
const port = 5000;
const multer = require('multer');

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
      res.set('x-timestamp', Date.now());
  },
};

app.use(express.static(path.join(__dirname, '../client/build'), options));

// Create a variable to hold the custom filename
let customFilename = '';

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Use the customFilename variable as the filename
    cb(null, customFilename+file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

// render the index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Set up a route for file uploads
app.post('/upload', (req, res) => {
  // Set the customFilename based on your POST request variable
  customFilename = Date.now() + '-' + 'req.body.myVar' + '-';

  // Use the upload middleware to handle the file upload
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'File uploaded successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
