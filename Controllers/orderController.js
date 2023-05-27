
var order = "ORDER"
var item = "ITEM";
var customer = "CUSTOMER";
var item_arr = [];
var customer_arr = [];
var cus;
var itm;
var order_item_arr = [];
var index;
//load data to cmb box
$(document).ready(() => {
    customer_arr = getLocalSData(customer);
    item_arr = getLocalSData(item);
    customer_arr.map((value) => {
        var opt = "<option>" + value.customerId + "</option>"
        $('#customerCMB').append(opt);
    });
    item_arr.map((value) => {
        var opt = "<option>" + value.itemCode + "</option>"
        $('#itemCMB').append(opt);
    });

});

//--get local data ---
function getLocalSData(key) {

    let pre_data = localStorage.getItem(key);
    let data_array = [];
    if (pre_data) {
        data_array = JSON.parse(pre_data);
    }
    return data_array;
}

//--------load customer Details to the Combo Box
$('#customerCMB').on('change', (event) => {
    customer_arr.map((value) => {
        if (value.customerId === event.target.value) {
            cus = value;
            $('#customerNameOrder').text(value.customerName);
            $('#customerAddressOrder').text(value.customerAddress);

            //
          //  $('#customerCMB').css({borderBottom: "1px solid #ced4da"});
        }
    });
});
//-----------LOAD ITEM DETAILS TO FIELDS --------------------
$('#itemCMB').on('change', (event) => {
    item_arr.map((value) => {
        if (value.itemCode === event.target.value) {
            itm = value;
            $('#itemnameplaceorder').text(value.itemName);
            $('#itempriceplaceorder').text(value.price);
            $('#itemqtyplaceorder').text(value.itemQTY);

           // $('#itemCMB').css({borderBottom: "1px solid #ced4da"});
        }
    });
});