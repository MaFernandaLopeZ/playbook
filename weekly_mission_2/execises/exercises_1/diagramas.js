const repo = {
  name: "LaunchX",
  author: "Fernanda Lopez",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

// ISSUE
const issue = {
  tittle: "Recapitulaciones",
  repositoryNameAssociated: "LaunchX",
  status: "Activate",
  numbersOfComments: 60,
  labels: 50,
  author: "Susana",
  dateCreated: "15/04/2022",
  lastUpdated: "4 days",
  getTitleAndAuthor: function () {
    return `Title: ${this.tittle}. Author: ${this.author}`
  },
  getGeneralInfo: function () {
    return `This issue ${this.name} is associated with repository ${this.repositoryNameAssociated}`
  }
}

console.log("*************************")
console.log("Fecha de creación" + issue.dateCreated)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

// PULL REQUEST
const pull = {
  tittle: "Blog",
  branchName: "Enviando ideas claves",
  dateCreated: "17/04/2022",
  status: "Wait",
  repositoryNameAssociated: "LaunchX",
  getStatus: function () {
    return ` ${this.status}`
  },
  getTitleAndAuthor: function () {
    return `Title: ${this.tittle}. Author: ${issue.author}`
  }
}

console.log("*************************")
console.log("Status:" + pull.getStatus())
console.log(pull.getTitleAndAuthor())
