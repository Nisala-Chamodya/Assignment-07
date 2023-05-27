var item = "ITEM";
//------------add new object into the localStorage---------------------------

$('#btn-item-add').on('click', () => {

    if (checkText()) {
        let arr = getLocalSData();

        if (isExistsById(arr)) {
            alert("Item code all ready exists !");
            return;
        }
        arr.push(initObj());
        localStorage.setItem(item, JSON.stringify(arr));
        loadData();
        disableBtn();
        clearData();
    }
});
//-----------------update data in localStorage-------------------------------

$('#btn-item-update').on('click', () => {
    if (checkText()) {
        let item_arr = getLocalSData();

        let index = item_arr.findIndex(value => value.itemCode === $('#itemcode').val());

        item_arr[index] = initObj();

        localStorage.setItem(item, JSON.stringify(item_arr));
        loadData();
        disableBtn();
        clearData();
       // arrIndex = -1;
    }


});
//----------------------delete data in localStorage------------------------------

$('#btn-remove-item').on('click', () => {

    if (checkText()) {
        let item_arr = getLocalSData();

        let index = item_arr.findIndex(value => value.item_arr === $('#itemCode').val());

        item_arr.splice(index, 1);
        localStorage.setItem(item, JSON.stringify(item_arr));
        loadData();
        disableBtn();
        clearData();
       // arrIndex = -1;
    }
});
//---------------add table row click event listener-------------------------

loadData();

$('table tbody').on('click', 'tr', (event) => {
    $('#itemcode').val($(event.target).closest('tr').find('td').eq(0).text());
    $('#itemname').val($(event.target).closest('tr').find('td').eq(1).text());
    $('#price').val($(event.target).closest('tr').find('td').eq(2).text());
    $('#qty').val($(event.target).closest('tr').find('td').eq(3).text());

    document.getElementById('btn-item-add').disabled = true;
    document.getElementById('itemcode').disabled = true;
    document.getElementById('btn-item-update').disabled = false;
    document.getElementById('btn-remove-item').disabled = false;
});

//-------------------load table data-------------------------------

function loadData() {

    let per_data = localStorage.getItem(item);

       $('table tbody tr td').remove();

    let item_data_arr = JSON.parse(per_data);

    console.log("IIIIIIIIIIIIII: ", item_data_arr);
    console.log("per_data: ", per_data);

    if(per_data){
        item_data_arr.map((value, index) => {
            var row = "<tr>" +
                "<td>" + value.itemCode+ "</td>" +
                "<td>" + value.itemName+ "</td>" +
                "<td>" + value.price + "</td>" +
                "<td>" + value.itemQTY + "</td>" +
                "</tr>";

            console.log('LLLLLL: ', $('#itemtbl'))

            $('#itemtbl').append(row);
        });
    }

}

//--------------create obj using textField data----------------------------

function initObj() {
    return {
        itemCode: $('#itemcode').val(),
        itemName: $('#itemname').val(),
          price : $('#price').val(),
        itemQTY: $('#qty').val()

    }
}
//--------check item code all ready exists --------------------------

function isExistsById(arr) {
    let flag = false;
    arr.filter((event) => {
        if (event.itemCode === $('#itemcode').val()) {
            flag = true;
        }
    });
    return flag;
}

//----------------get localStorage array-------------------------------

function getLocalSData() {

    let pre_data = localStorage.getItem(item);
    let data_array = [];
    if (pre_data) {
        data_array = JSON.parse(pre_data);
    }
    return data_array;
}

//--------------check text is valid ----------------------------------------
function checkText() {
    if ($('#itemcode').val() === "") {
        alert("Item code is empty or invalid !");
        $('#itemcode').focus();
        $('#itemcode').css({
            borderBottom: "2px solid red"
        });
        return false;
    } else if ($('#itemname').val() === "") {
        alert("Item Name is invalid or empty !");
        $('#itemname').focus();
        $('#itemname').css({borderBottom: "2px solid red"});
        return false;
    } else if ($('#price').val() === "") {
        alert("Unit price is invalid or empty  !");
        $('#price').focus();
        $('#price').css({borderBottom: "2px solid red"});
        return false;
    } else if ($('#qty').val() === "") {
        alert("Qty is invalid or empty  !");
        $('#qty').focus();
        $('#qty').css({borderBottom: "2px solid red"});
        return false;
    }
    return true;
}
$('#itemcode').on('keypress', () => {
    $('#itemcode').css({borderBottom: "1px solid #ced4da"});
});
$('#itemname').on('keypress', () => {
    $('#itemname').css({borderBottom: "1px solid #ced4da"});
});
$('#price').on('keypress', () => {
    $('#price').css({borderBottom: "1px solid #ced4da"});
});
$('#qty').on('keypress', () => {
    $('#qty').css({borderBottom: "1px solid #ced4da"});
});

$('#itemForm').on('mouseover', () => {
    if ($('#itemcode').val() !== "" && $('#itemname').val() !== "" && $('#price').val() !== "" && $('#qty').val() !== "" ) {
        document.getElementById('btn-item-add').disabled = false;
        return;
    }
    document.getElementById('btn-item-add').disabled = true;
});
//-----------------------clear function-----------------------------------

function clearData() {
    $('#itemcode').val("");
    $('#itemname').val("");
    $('#price').val("");
    $('#qty').val("");
    document.getElementById('itemcode').disabled = false;
    document.getElementById('btn-item-add').disabled = false;
}

function disableBtn() {
    document.getElementById('btn-item-add').disabled = true;
    document.getElementById('btn-item-update').disabled = true;
    document.getElementById('btn-remove-item').disabled = true;
}

disableBtn();