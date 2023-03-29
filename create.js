function val() {
    var cat =
        document.forms.f1.fname.value;
    var ts =
        document.forms.f1.task.value;
    var wh =
        document.forms.f1.where.value;
        var regName = /\d+$/g;
        if (cat == "" || regName.test(cat)) {
            window.alert("Please enter category properly.");
            cat.focus();
            return false;
        }

        if (ts == "") {
            window.alert("Please enter your task name.");
            ts.focus();
            return false;
        }
         
        if (wh == "" || !regName.test(wh)) {
            window.alert("Please enter a valid venue.");
            wh.focus();
            return false;
        }
        return true;
    }