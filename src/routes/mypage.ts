import express from 'express';
import path from 'path';
import fetch from 'node-fetch';

const router = express.Router();
export default router;

router.get('/', (req, res) => {
  console.log('mypage page');

  res.setHeader('Content-Type', 'text/html');
  res.render(path.join(__dirname, '..', 'views', 'mypage.ejs'));
});
