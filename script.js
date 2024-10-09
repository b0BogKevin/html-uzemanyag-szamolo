$(function () {

    let benzines =
        [
            {
                value: '7.6',
                text: '1000 cm3-ig'
            },
            {
                value: '8.6',
                text: '1001-1500 cm3'
            },
            {
                value: '9.5',
                text: '1501-2000 cm3'
            },
            {
                value: '11.4',
                text: '2001-3000 cm3'
            },
            {
                value: '13.3',
                text: '3001 cm3 felett'
            }
        ]

    let dizeles =
        [
            {
                value: '5.7',
                text: '1500 cm3-ig'
            },
            {
                value: '6.7',
                text: '1501-2000 cm3'
            },
            {
                value: '7.6',
                text: '2001-3000 cm3'
            },
            {
                value: '9.5',
                text: '3001 cm3 felett'
            }
        ]
    let filled = [false, false, false, false, false, false, false, false]

    $("form").submit(function (e) {
        e.preventDefault
    })

    let uzemanyag;
    $("[name=eroforras]").change(function () {
        uzemanyag = $(this).val()
        filled[0] = true
        $("#ccselect").html("<option value='-1'></option>")

        if (uzemanyag == "dizel") {
            getUzemanyag(dizeles)
        }
        else {
            getUzemanyag(benzines)
        }
    })
    $("[name=amort]").change(function () {
        filled[1] = true

    })
    $("#ftl").change(function () {
        filled[2] = true

    })
    $("#ccselect").change(function () {
        filled[3] = !($("#ccselect").val() == "-1")
    })
    let plateregex = /[A-Za-z]{3,4}-[0-9]{3}/gm
    $("#plate").change(function () {
        filled[4] = plateregex.test($("#plate").val())
    })
    $("#make").change(function () {
        filled[5] = $("#make").val() !=""
    })
    $("#where").change(function () {
        filled[6] = $("#where").val() !=""
    })
    $("#dis").change(function () {
        filled[7] = $("#dis").val() !=""
    })

    $("input, select").change(function () {
        $("[type=submit]").attr("disabled", filled.includes(false))
        
    })


    function getUzemanyag(t) {
        t.forEach((o) => {
            $("#ccselect").append("<option value ='" + o.value + "'>" + o.text + "</option>")
        })
    }
})