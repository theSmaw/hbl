const jsonfile = require('jsonfile');

module.exports = (filePath, res) => {
  console.log(`Sending JSON response at file path ${filePath}`);

  jsonfile.readFile(filePath, (err, obj) => {
    if(err) {
      console.log(`Cannot read file at filePath ${filePath}`);

      res.sendStatus(404);
    }  else {
      res.send(obj);
    }
  });
};
