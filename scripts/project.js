class Project {

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.readme = readme; 
        this.gitHubLink = gitHubLink;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getGitHubLink() {
        return this.gitHubLink;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    static fromJson(json) {
        return new Project(json.name, json.description);
    }
}