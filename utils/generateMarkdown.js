// function to generate markdown for README
function generateMarkdown(data) {
    return `
(${data.license})
# ${data.title}

## Description

${data.description}

## Table of Content

  - [Description](#description)
  - [Table of Content](#table-of-content)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#lisence)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contrbuting}

## Tests

${data.tests}

## Questions

If you have any questions please contact:
- http://github.com/${data.github}
- ${data.email}

  
  `;
  }
  
  module.exports = generateMarkdown;
  