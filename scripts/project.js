class Project {

    constructor(name, month, description, tagList, projectLink) {
        this.name = name;
        this.month = month;
        this.description = description;
        this.tagList = tagList;
        this.projectLink = projectLink;
    }

    getName() {
        return this.name;
    }

    getMonth() {
        return this.month;
    }   

    getDescription() {
        return this.description;
    }

    getTagList() {
        let string = "";
        for (let i = 0; i < this.tagList.length; i++) {
            if (i == this.tagList.length - 1) {
                return string + this.tagList[i];
            }
            else string += this.tagList[i] + ", ";
        }
    }

    getProjectLink() {
        return this.projectLink;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setTagList(tagList) {
        this.tagList = tagList;
    }

    static fromJson(json) {
        return new Project(json.name, json.description);
    }
}