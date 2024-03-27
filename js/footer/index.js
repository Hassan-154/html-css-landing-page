function openLinkInNewTab(event) {
  var url = event.target.dataset.url;
  window.open(url, "_blank");
}
var elements = document.querySelectorAll('.openLink');
elements.forEach(function(element) {
  element.addEventListener('click', openLinkInNewTab);
});
