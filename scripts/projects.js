function Project(title, image, description, technologies, projectID, imgID) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.technologies = technologies;
    this.appendData = function(){
        let project = document.getElementById(projectID);
        let img = document.getElementById(imgID);
        img.src = this.image;
        console.log(img);
    }
    this.appendData();
  }

  let projectOne = new Project("Title Test", "images/6.webp", "testing a short description", "html, css, javascript", "project-one", "project-one-image");

  