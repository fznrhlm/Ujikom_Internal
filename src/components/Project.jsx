export default class Project {
  id = "";
  strCategory = "";
  strCategoryThumb = "";
  strCategoryDescription = "";
  price = ""

  constructor(initilizer) {
    this.id = initilizer.id;
    this.strCategory = initilizer.strCategory;
    this.strCategoryThumb = initilizer.strCategoryThumb;
    this.strCategoryDescription= initilizer.strCategoryDescription;
    this.price = initilizer.price
  }
}
