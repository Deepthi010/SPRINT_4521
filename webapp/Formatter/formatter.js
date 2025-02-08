sap.ui.define([], function() {
    "use strict";
    return {
        formatDate: function(sDate) {
            if (!sDate) {
                return "";
            }
            var oDate = new Date(sDate);
            return oDate.toDateString(); // Formats the date to "Tue Feb 04 2025"
        }
    };
});