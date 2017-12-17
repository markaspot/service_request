(function ($, Drupal, drupalSettings) {
  Drupal.service_request =  Drupal.service_request || {};
  Drupal.behaviors.service_request = {
    attach: function(context, settings) {
      $paragraphForm = $('div[id^=edit-field-status-notes-] .field--name-field-status-term select').last();
      $nodeForm = $('.node-service-request-edit-form input');

      $nodeForm.on('change', function() {
        value =$('input[name=field_status]:checked', 'form').val();

        $paragraphForm.val(value);
      });

      $paragraphForm.on('change', function(){
        value = $paragraphForm.val();
        console.log($('.node-service-request-edit-form input[name=field_status]'));
        $('.node-service-request-edit-form input[name=field_status][value="' + value + '"]').prop('checked', true);

      });
    }
  };

})(jQuery, Drupal, drupalSettings);
