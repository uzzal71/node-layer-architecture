class categoryViewModel {
    constructor(category) {
        this.id = category.id;
        this.parent_id = category.parent_id;
        this.name = category.name;
        this.slug = category.slug;
        this.index = category.index;
        this.createdAt = category.createdAt;
    }
}

export default categoryViewModel;
