const fs = require('fs');
const path = require('path');

export function createFilePathsJSON(directory, outputPath) {
  const directories = {};

  function traverseDirectory(currentPath, basePath = '') {
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        const dirName = path.join(basePath, file);
        directories[dirName] = [];
        traverseDirectory(filePath, dirName);
      } else if (stat.isFile()) {
        const dirName = path.relative(directory, currentPath);
        const fullFilePath = path.join(currentPath, file);
        console.log({ currentPath, dirName, fullFilePath })
        directories[basePath].push(fullFilePath);
      }
    });
  }

  traverseDirectory(directory);

  fs.writeFileSync(outputPath, JSON.stringify(directories, null, 2));

  console.log(`JSON file created at: ${outputPath}`);
}