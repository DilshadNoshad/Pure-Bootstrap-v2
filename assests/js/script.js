// boostrap 4 tooltip
// $(document).ready(function () {
//   $('[data-bs-toggle="tooltip"]').Tooltip();
// });

// boostrap 5 tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
