// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  switch (data) {
    case 'MIT':
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    case 'APACHE 2.0':
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    default:
    return""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data) {
    case 'MIT':
    return "https://opensource.org/licenses/MIT"

    case 'APACHE 2.0':
    return "https://opensource.org/licenses/Apache-2.0"
    default:
    return""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch (data) {
    case 'MIT':
    return "The license used for this project is the MIT license."

    case 'APACHE 2.0':
    return "The license used in this project is the apache 2.0 license"
    default:
    return"No license selected for this project"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Title
${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Email
${data.email}

## Email
${data.email}

## UserName
${data.userName}

## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
