// Add self links to headings
$('h2[id],h3[id],h4[id],h5[id],h6[id]').append(function() {
  return '<a class="heading-link" href="#' + this.id + '">#</a>';
});

// Enable Popovers
$('[data-toggle="popover"]').popover();
$('[data-popover]').popover();

// Enable Tooltips
$('[data-toggle="tooltip"]').tooltip();
$('[data-tooltip]').tooltip();

// Enable (show) Toasts
$('.toast:not(#toasts-demo)').toast('show');

// function: Enable custom file browser
function enableCustomFileBrowser(id) {
  $('#' + id).on('change', function(event) {
    $('[for="' + id + '"]').text($(this).prop('files')[0].name);
  });
}

// Enable custom file browser (Forms)
['validatedCustomFile',
 'custom-file',
 'custom-file-en',
 'custom-file-ja',
 'custom-file-es'].forEach(function(id) { enableCustomFileBrowser(id); });

// Enable custom file browser(Input groups)
[1, 2, 3, 4].forEach(function(n) {
  enableCustomFileBrowser('inputGroupFile' + n);
});

// Dropdown: Active/disabled states demo
$('#active-disabled-example').delegate('a', 'click', function(event) {
  var item = $(this);
  event.preventDefault();                   // prevent default link behaviors
  if (item.hasClass('disabled')) return;    // implement disabled behaviors
  // update the active item
  $('#active-disabled-example a').removeClass('active');
  item.addClass('active');
  $('#active-indicator').text(item.text());
});

// Forms: Validation
$('.needs-validation').on('submit', function(event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  $(this).addClass('was-validated');
});

// Modal: Varying modal content
$('#examplemodal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var recipient = button.data('whatever');
  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
});

// Toasts: Live demo
var $toastsDemo = $('#toasts-demo');
$toastsDemo.toast('hide'); // create a toast instance with initially hidden
$('#toasts-demo-start').on('click', function() {
  var delay = $($('#toasts-demo-delay')[0].selectedOptions[0]).attr('value');
  var animation = $('#toasts-demo-animation')[0].checked;
  // None of .data(), .attr('data-*'), and .toast(config) works here.
  // (Bootstrap JS code is possively wrong...)
  // After an Toast instance is created, it only uses ._config property.
  var config = $toastsDemo.data('bs.toast')._config;
  config.autohide = delay > 0;
  if (delay > 0) config.delay = delay;
  config.animation = animation;
  $toastsDemo.toast('show');
});
