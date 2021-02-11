const generateMarkdown = (data) => {
  return `
<a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${
    data.name
  }" title="${data.name}" width="160" height="160"></a>

# ${data.title.toUpperCase()}

![License: ${
    data.lic ? data.lic : "None"
  }](https://img.shields.io/badge/License-${
    data.lic ? data.lic : "None"
  }-brightorange)

_Repo by ${data.name}_

__${data.desc}__

---

__Installation:__
${data.inst}

__Usage:__
${data.use}

__Contributors:__
${data.con}

__Tests:__
${data.test}

__Questions:__
${data.qs}
`;
};

module.exports = generateMarkdown;
