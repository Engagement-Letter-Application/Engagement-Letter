const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const authRouter = require(__dirname + '/routes/auth_router');

app.use('/api', authRouter);

module.exports = app.listen(PORT, () => console.log('server up on port:' + PORT));
