(function () {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        alert(`Selected text: ${selectedText}`);
    } else {
        alert('No text selected.');
    }
})();
