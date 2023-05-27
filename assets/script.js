/*dashbord section*/
$("#linkHome").click(function () {
  $("#home").css("display", "block");
  $("#customer-section").css("display", "none");
  $("#item-section").css("display", "none");
  $("#placeorder-section").css("display", "none");
});

$("#linkCustomer").click(function () {
  $("#home").css("display", "none");
  $("#customer-section").css("display", "block");
  $("#item-section").css("display", "none");
  $("#placeorder-section").css("display", "none");
});

$("#linkItem").click(function () {
  $("#home").css("display", "none");
  $("#customer-section").css("display", "none");
  $("#item-section").css("display", "block");
  $("#placeorder-section").css("display", "none");
});

$("#linkplace").click(function () {
  $("#home").css("display", "none");
  $("#customer-section").css("display", "none");
  $("#item-section").css("display", "none");
  $("#placeorder-section").css("display", "block");
});

