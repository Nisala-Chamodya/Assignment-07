import { Customer } from "../Modals/Customer.js";
$(document).ready(() => {
  loadICustData();
});
/* export class customerController{
  constructor(){
    $('#btnadd').click(this.saveCustomer.bind(this));
     $('#btnupdate').click(this.updateCustomer.bind(this));
      $('#btnDelete').click(this.deleteCustomer.bind(this));
  }
  saveCustomer(){
    console.log("save Customer");
  }
 updateCustomer(){
  console.log("Update Customer");
 }
  deleteCustomer(){
    console.log("delete Customer");
  }
}  */

/*How Apply regex in to web */
/* const regexNo=/^\d+$/;
if(!regexNo.test(customer_id)){
  console.log("Invalid Customer Id");
}
 */
//dan meyawa use karanna pulwannn😊
var customer = "CUSTOMER";

//------------add new object into the localStorage---------------------------

$("#btn-addcust").on("click", () => {
  if (checkText()) {
    let arr = getLocalSData();

    if (isExistsById(arr)) {
      alert("Customer ID all ready exists !");
      return;
    }
    arr.push(initObj());
    localStorage.setItem(customer, JSON.stringify(arr));
    loadICustData();
    disableBtn();
    clearData();
  }
});

//--------check customer_id all ready exists --------------------------

function isExistsById(arr) {
  let flag = false;
  arr.filter((event) => {
    if (event.customerId === $("#custID").val()) {
      flag = true;
    }
  });
  return flag;
}

//----------------get localStorage array-------------------------------

function getLocalSData() {
  let pre_data = localStorage.getItem(customer);
  let data_array = [];
  if (pre_data) {
    data_array = JSON.parse(pre_data);
  }
  return data_array;
}

//--------------create obj using textField data----------------------------

function initObj() {
  return {
    customerId: $("#custID").val(),
    customerName: $("#custname").val(),
    customerAddress: $("#custAddress").val(),
    customerSalary: $("#Salary").val(),
    customerGender: $("#inputGender").val(),
    customerAge: $("#inputAge").val(),
  };
}

//-------------------load table data-------------------------------

function loadICustData() {
  let per_data = localStorage.getItem(customer);

  $("table tbody tr td").remove();
  $("#custTable").empty();

  let customer_data_arr = JSON.parse(per_data);

  if (per_data) {
    customer_data_arr.map((value) => {
      let cRow =
        "<tr>" +
        "<td>" +
        value.customerId +
        "</td>" +
        "<td>" +
        value.customerName +
        "</td>" +
        "<td>" +
        value.customerAddress +
        "</td>" +
        "<td>" +
        value.customerSalary +
        "</td>" +
        "<td>" +
        value.customerGender +
        "</td>" +
        "<td>" +
        value.customerAge +
        "</td>" +
        "</tr>";

      $("#custTable").append(cRow);
    });
  }
}

//---------------add table row click event listener-------------------------

$("#custTable").on("click", "tr", (event) => {
  $("#custID").val($(event.target).closest("tr").find("td").eq(0).text());
  $("#custname").val($(event.target).closest("tr").find("td").eq(1).text());
  $("#custAddress").val($(event.target).closest("tr").find("td").eq(2).text());
  $("#Salary").val($(event.target).closest("tr").find("td").eq(3).text());
  $("#inputGender").val($(event.target).closest("tr").find("td").eq(3).text());
  $("#inputAge").val($(event.target).closest("tr").find("td").eq(3).text());

  document.getElementById("btn-addcust").disabled = true;
  document.getElementById("custID").disabled = true;
  document.getElementById("btn-update").disabled = false;
  document.getElementById("btn-removeCust").disabled = false;
});

//-----------------update data in localStorage-------------------------------

$("#btn-update").on("click", () => {
  if (checkText()) {
    let cus_arr = getLocalSData();

    let index = cus_arr.findIndex(
      (value) => value.customerId === $("#custID").val()
    );

    cus_arr[index] = initObj();
    localStorage.setItem(customer, JSON.stringify(cus_arr));
    loadICustData();
    disableBtn();
    clearData();
    //arrIndex = -1;
  }
});

//----------------------delete data in localStorage------------------------------

$("#btn-removeCust").on("click", () => {
  if (checkText()) {
    let cus_arr = getLocalSData();

    let index = cus_arr.findIndex(
      (value) => value.customerId === $("#custID").val()
    );

    cus_arr.splice(index, 1);
    localStorage.setItem(customer, JSON.stringify(cus_arr));
    loadICustData();
    disableBtn();
    clearData();
    cus_arr = -1;
  }
});

function checkText() {
  if ($("#custID").val() === "") {
    alert("Customer id is empty or invalid !");
    $("#custID").focus();
    $("#custID").css({
      borderBottom: "2px solid red",
    });
    return false;
  } else if ($("#custname").val() === "") {
    alert("Name is invalid or empty !");
    $("#custname").focus();
    $("#custname").css({ borderBottom: "2px solid red" });
    return false;
  } else if ($("#custAddress").val() === "") {
    alert("Address is invalid or empty  !");
    $("#custAddress").focus();
    $("#custAddress").css({ borderBottom: "2px solid red" });
    return false;
  } else if ($("#Salary").val() === "") {
    alert("Salary is invalid or empty  !");
    $("#Salary").focus();
    $("#Salary").css({ borderBottom: "2px solid red" });
    return false;
  } else if ($("#inputGender").val() === "") {
    alert("Gender is invalid or empty  !");
    $("#inputGender").focus();
    $("#inputGender").css({ borderBottom: "2px solid red" });
    return false;
  } else if ($("#inputAge").val() === "") {
    alert("Age is invalid or empty  !");
    $("#inputAge").focus();
    $("#inputAge").css({ borderBottom: "2px solid red" });
    return false;
  }
  return true;
}

$("#custID").on("keypress", () => {
  $("#custID").css({ borderBottom: "1px solid #ced4da" });
});
$("#custname").on("keypress", () => {
  $("#custname").css({ borderBottom: "1px solid #ced4da" });
});
$("#custAddress").on("keypress", () => {
  $("#custAddress").css({ borderBottom: "1px solid #ced4da" });
});
$("#inputSalary").on("keypress", () => {
  $("#inputSalary").css({ borderBottom: "1px solid #ced4da" });
});
$("#inputGender").on("keypress", () => {
  $("#inputSalary").css({ borderBottom: "1px solid #ced4da" });
});

$("#inputAge").on("keypress", () => {
  $("#inputSalary").css({ borderBottom: "1px solid #ced4da" });
});

$("#custForm").on("mouseover", () => {
  if (
    $("#custID").val() !== "" &&
    $("#custname").val() !== "" &&
    $("#custAddress").val() !== "" &&
    $("#inputSalary").val() !== "" &&
    $("#inputGender").val() !== "" &&
    $("#inputAge").val() !== ""
  ) {
    document.getElementById("btn-addcust").disabled = false;
    return;
  }
  document.getElementById("btn-addcust").disabled = true;
});

//-----------------------clear function-----------------------------------

function clearData() {
  $("#custID").val("");
  $("#custname").val("");
  $("#custAddress").val("");
  $("#Salary").val("");
  $("#inputGender").val("");
  $("#inputAge").val("");
  document.getElementById("custID").disabled = false;
  document.getElementById("btn-addcust").disabled = false;
}

function disableBtn() {
  document.getElementById("btn-addcust").disabled = true;
  document.getElementById("btn-update").disabled = true;
  document.getElementById("btn-removeCust").disabled = true;
}

disableBtn();
