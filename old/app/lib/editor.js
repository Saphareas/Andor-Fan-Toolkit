function formatText(callback) {
  let textarea = document.querySelector("#text > textarea");
  if (typeof textarea.selectionStart == "number" && typeof textarea.selectionEnd == "number") {
      let selStart = textarea.selectionStart;
      let selEnd   = textarea.selectionEnd;

      let selText = textarea.value.slice(selStart, selEnd);
      let before  = textarea.value.slice(0, selStart);
      let after   = textarea.value.slice(selEnd);

      let text = before + callback(selText) + after;
      textarea.value = text;
  }
  renderPreview(textarea);
}

function printBold(selection) {
  if (selection === "") {
    return "**bold**"
  }
  else if (selection.length > 0) {
    return "**" + selection + "**"
  }
}

function printItalic(selection) {
  if (selection === "") {
    return "_italic_"
  }
  else if (selection.length > 0) {
    return "_" + selection + "_"
  }
}

function printList(selection) {
  if (selection === "") {
    return "- list item"
  }
  else if (selection.length > 0) {
    return "- " + selection + "\n\n"
  }
}
