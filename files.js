const fs = require("fs");

// writing file

fs.writeFile("./docs/file1.txt", "hello everyone", (err) => {
  console.log("file wirtten");

  if (err) {
    console.log(">>>>err of write", err);
  }
});

//reading file

fs.readFile("./docs/file1.txt", (err, data) => {
  if (data) {
    console.log("data>>", data.toString());
  }
  if (err) {
    console.log(">>>>err", err.toString());
  }
});

//Folder / directory

if (fs.existsSync("./src")) {
  fs.rmdir("./src", (err) => {
    if (err) {
      console.log("errr", err);
    }
    console.log("folder deleted");
  });
} else {
  fs.mkdir("./src", (err) => {
    if (err) {
      console.log("errr", err);
    }
    console.log("folder created");
    fs.writeFile("./src/file1.txt", "hello everyone", (err) => {
      console.log("file wirtten");

      if (err) {
        console.log(">>>>err of write", err);
      }
    });
  });
}
