'use strict';

const express = require('express'),
      app     = express(),
      PORT    = process.env.PORT || 3000
      ;

app.get('/test', (req,res) => {
  res.json({sucess: true});
});

app.listen(PORT, () =>{
  console.log(`Server listening on port ${PORT}`);
});

