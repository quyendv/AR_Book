const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const s3Service = require('./uploadS3Service');

const multer = require('multer');
const upload = multer();

app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//get all
app.get('/get', async (req, res) => {
  const listObjects = await s3Service.getAllS3();

  res.status(200).json(listObjects);
});

// upload single file
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  // Do something with the file
  await s3Service.upload(file);

  res.status(200).json('File uploaded successfully !');
});

// delete with file name (:id)
app.delete('/delete/:id', (req, res) => {
  s3Service.removeS3(req.params.id);

  res.status(200).json('File delete successfully !');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
