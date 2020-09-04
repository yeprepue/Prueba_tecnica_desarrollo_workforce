_estado = (function () {
    let url = location.protocol + "//" + location.host + "/2-registro-estados/";
    var registrarEstado = function () {

        var formulario = $("#formEstado").serialize();

        $.ajax({
            url: url + "cestado/registrarEstado",
            type: "post",
            data: formulario,
            cache: false,
            success: function (request, textStatus, jQxhr) {
                var data = JSON.parse(request);
                if (data.status == 200) {
                    alert(data.msj);
                    $("#estado").val("");

                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        });
    };

    return {
        registrarEstado: registrarEstado
    };
})();

$("#btnGuardarEstado")
    .off("click")
    .on("click", function () {
        if ($("#estado").val() == "") {
            $("#divmsj").show();
            setTimeout(() => {
                $("#divmsj").hide();
            }, 3000);
        } else {
            _estado.registrarEstado();
        }
    });



$(document).ready(function () {
});

