import api from "../../../../services/api";

export const closeAllBottomSheet = ( setBottomSheetsVisible ) => {
    setBottomSheetsVisible({
      option: false,
      price: false,
      comment: false,
      traffic: false,
    });
}