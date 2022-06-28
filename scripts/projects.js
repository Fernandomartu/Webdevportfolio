function Project(title, image, description, projectID, imgID, projectTitleID, projectDescriptionID) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.appendData = function(){
        let project = document.getElementById(projectID);
        let projectTitle = document.getElementById(projectTitleID);
        let projectDescription = document.getElementById(projectDescriptionID);
        let img = document.getElementById(imgID);
        img.src = this.image;
        projectDescription.textContent = description;
        projectTitle.textContent = title;
        console.log(img);
    }
    this.appendData();
  }

  let projectOne = new Project("Title Test", "images/6.webp", "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.", "project-one", "project-one-image", "project-one-title", "project-one-description");

  