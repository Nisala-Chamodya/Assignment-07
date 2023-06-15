import { Item } from "../models/Item.js";
import { getAllDB, saveItemDB, updateItemDB, deleteItemDB } from "../db/DB.js";

export class ItemController {
  constructor() {
    $("#itmSaveBtn").on("click", () => {
      this.handleValidation("Save");
    });
    $("#itmUpdateBtn").on("click", () => {
      this.handleValidation("Update");
    });
    $("#itmDeleteBtn").on("click", () => {
      this.handleValidation("Delete");
    });
    this.handleLoadItem();
    this.handleTableClickEvent();
  }

  handleValidation(Function) {
    !/^(I)-([0-9]{2,})$/.test($("#itmCode").val())
      ? alert("Invalid Item code")
      : !$("#itmDes").val()
      ? alert("Description is empty !")
      : !/\d+$/.test($("#unitPrice").val())
      ? alert("Invalid unit price or empty !")
      : !/^\d+$/.test($("#itmQty").val())
      ? alert("Invalid qty or empty !")
      : Function === "Save"
      ? this.handleSaveItem()
      : Function === "Update"
      ? this.handleUpdateItem()
      : this.handleDeleteItem();
  }

  handleSaveItem() {
    if (this.handleExistingItem()) {
      alert("Item code all ready exists !");
      return;
    }
    saveItemDB(
      new Item(
        $("#itmCode").val(),
        $("#itmDes").val(),
        $("#unitPrice").val(),
        $("#itmQty").val()
      )
    );

    this.handleLoadItem();
  }

  handleUpdateItem() {
    updateItemDB(
      new Item(
        $("#itmCode").val(),
        $("#itmDes").val(),
        $("#unitPrice").val(),
        $("#itmQty").val()
      )
    );

    this.handleLoadItem();
  }

  handleDeleteItem() {
    deleteItemDB(
      new Item(
        $("#itmCode").val(),
        $("#itmDes").val(),
        $("#unitPrice").val(),
        $("#itmQty").val()
      )
    );

    this.handleLoadItem();
  }

  handleLoadItem() {
    $("#itemTbl tbody tr td").remove();

    getAllDB("ITEM").map((value) => {
      var row =
        "<tr>" +
        "<td>" +
        value._itemCode +
        "</td>" +
        "<td>" +
        value._description +
        "</td>" +
        "<td>" +
        value._unitPrice +
        "</td>" +
        "<td>" +
        value._qtyOnHand +
        "</td>" +
        "</tr>";

      $("#itemTbl tbody").append(row);
    });

    // disableBtn();
    document.getElementById("itmSaveBtn").disabled = false;
    document.getElementById("itmUpdateBtn").disabled = true;
    document.getElementById("itmDeleteBtn").disabled = true;

    //clearData();
    $("#itmCode").val("");
    $("#itmDes").val("");
    $("#unitPrice").val("");
    $("#itmQty").val("");
    document.getElementById("itmCode").disabled = false;
  }

  handleExistingItem() {
    let flag = false;
    getAllDB("ITEM").filter((event) => {
      if (event._itemCode === $("#itmCode").val()) {
        flag = true;
      }
    });
    return flag;
  }

  handleTableClickEvent() {
    $("#itemTbl ").on("click", "tr", (event) => {
      $("#itmCode").val($(event.target).closest("tr").find("td").eq(0).text());
      $("#itmDes").val($(event.target).closest("tr").find("td").eq(1).text());
      $("#unitPrice").val(
        $(event.target).closest("tr").find("td").eq(2).text()
      );
      $("#itmQty").val($(event.target).closest("tr").find("td").eq(3).text());

      document.getElementById("itmSaveBtn").disabled = true;
      document.getElementById("itmCode").disabled = true;
      document.getElementById("itmUpdateBtn").disabled = false;
      document.getElementById("itmDeleteBtn").disabled = false;
    });
  }
}
new ItemController();
