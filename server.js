const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const authRouter = require(__dirname + '/routes/auth_router');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/engagement_db');

app.use('/api', authRouter);

module.exports = app.listen(PORT, () => console.log('server up on port:' + PORT));
