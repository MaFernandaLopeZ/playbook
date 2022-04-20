const pull = {
    tittle: "Blog",
    branchName: "Enviando ideas claves",
    dateCreated: "17/04/2022",
    status: "Wait",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return ` ${this.tittle}`
    },
    getTitleAndAuthor: function(){
        return `Title: ${this.tittle}. Author: ${this.author}`
      }
   }
   
   console.log("Status:" + pull.getStatus())
   console.log(pull.getTitleAndAuthor())
   