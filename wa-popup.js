/* Whatsapp Chat Widget by www.sundaku.com */
$(document).on("click", "#send-it", function () {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://wa.me/+6285886232051",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=" + e + f;
    window.open(g, "_blank");
  }
});

// Menampilkan pop-up
$(document).on("click", ".sundakushow-chat", function () {
  $("#whatsapp-chat").addClass("show").removeClass("hide");
});

// Menutup pop-up ketika klik di luar area pop-up
$(document).on("click", function (e) {
  var chatBox = $("#whatsapp-chat");
  // Jika klik di luar elemen #whatsapp-chat dan elemen yang diklik bukan tombol untuk membuka chat
  if (
    !chatBox.is(e.target) &&
    chatBox.has(e.target).length === 0 &&
    !$(e.target).closest(".sundakushow-chat").length
  ) {
    chatBox.addClass("hide").removeClass("show");
  }
});

// Menutup pop-up ketika tombol close diklik
$(document).on("click", ".close-chat", function () {
  $("#whatsapp-chat").addClass("hide").removeClass("show");
});
