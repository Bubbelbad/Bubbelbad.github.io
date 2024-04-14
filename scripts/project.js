class Project {

    constructor(name, month, description, tagList, projectLink, imageList) {
        this.name = name;
        this.month = month;
        this.description = description;
        this.tagList = tagList;
        this.projectLink = projectLink;
        this.imageList = imageList; 
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

    getLilNavImages() {
        let string = "";
        for (let i = 0; i < this.imageList.length; i++) {
            string += `<a href="#image-${i}"><img src="${this.imageList[i]}" class="lil-nav-image" /></a>`;
        }
        return string;
    }

    getGalleryImages() {
        let string = "";
        for (let i = 0; i < this.imageList.length; i++) {
            if (i == this.imageList.length - 1) {
                return string += `<img src="${this.imageList[i]}" class="gallery-image" id="image-${i}" />`;
            }
            else string += `<img src="${this.imageList[i]}" class="gallery-image" id="image-${i}" />`;
        }
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