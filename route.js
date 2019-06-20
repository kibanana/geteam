const express = require('express');
const path = require('path');
const router = express.Router(); // 라우터 분리

router.get('/', (req, res) => {
    console.log('index page');
    res.sendFile(path.join(__dirname, 'index.php'));
});

router.get('/signup', (req, res) => {
    console.log('signup page');
    res.sendFile(path.join(__dirname, 'signup.php'));
});

router.get('/signin', (req, res) => {
    console.log('signin page');
    res.sendFile(path.join(__dirname, 'signin.php'));
});

router.get('/study/list', (req, res) => {
    console.log('study_list page');
    res.sendFile(path.join(__dirname, 'study_list.php?kind=',req.query.kind,'&big=',req.query.big));
});

router.get('/study/view', (req, res) => {
    console.log('study_view page');
    res.sendFile(path.join(__dirname, 'study_view.php?num=',req.query.num,'&page=',page,'&kind=',req.query.kind,'&big=',req.query.big));
});

router.get('/contest/list', (req, res) => {
    console.log('contest_list page');
    res.sendFile(path.join(__dirname, 'contest_list.php?kind=',req.query.kind,'&big=',req.query.big));
});

router.get('/contest/view', (req, res) => {
    console.log('contest_view page');
    res.sendFile(path.join(__dirname, 'contest_view.php?',));
});


router.get('/note/send', (req, res) => {
    console.log('note_send page');
    res.sendFile(path.join(__dirname, 'note_send.php'));
});

router.get('/note/recv', (req, res) => {
    console.log('note_recv page');
    res.sendFile(path.join(__dirname, 'note_recv.php'));
});

router.get('/mypage', (req, res) => {
    console.log('mypage page');
    res.sendFile(path.join(__dirname, 'mypage.php'));
});
module.exports = router; // 모듈로 만드는 부분