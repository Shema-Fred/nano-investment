$(function () {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      const TID = "template_w4m9dd5";
      const SID = "service_2xxp7ho";

      const params = {
        from_name: name,
        from_email: email,
        message,
      };
      $this = $("#submit-btn");
      $this.prop("disabled", true);
      $this.addClass("load");
      emailjs
        .send(SID, TID, params)
        .then(function () {
          alert("Email sent successfully");
          $("#contactForm").trigger("reset");
          $this.prop("disabled", false);
          $this.removeClass("load");
        })
        .catch(function (error) {
          console.log(error);
          alert("Failed to send Email.");
          $this.prop("disabled", false);
          $this.removeClass("load");
        });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
