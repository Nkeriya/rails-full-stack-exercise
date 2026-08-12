import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="applicants"
export default class extends Controller {
  static targets = ["selectField", "commentDiv", "commentBody"];
  static values = {
    original: String,
  };
  connect() {
    this.showCommentField();
  }

  showCommentField() {
    if (this.originalValue == this.selectFieldTarget.value) {
      this.commentDivTarget.hidden = true;
      this.commentBodyTarget.required = false;
    } else {
      this.commentDivTarget.hidden = false;
      this.commentBodyTarget.required = true;
    }
  }
}
