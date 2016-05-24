'use strict';

const express = require('express'),
      app     = express(),
      PORT    = process.env.PORT || 3000
      ;

var counter = 1;

app.get('/api/test', (req,res) => {
  res.json({counter: counter});
});

app.listen(PORT, () =>{
  console.log(`Server listening on port ${PORT}`);
});

