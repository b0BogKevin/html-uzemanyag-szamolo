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
    let filled = [false, true, true, true, true, true, true, true]

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

    $("input, select").change(function () {
        if (!filled.includes(false)) {
            $("[type=submit]").attr("disabled", false)
        }
    })

    function getUzemanyag(t) {
        t.forEach((o) => {
            $("#ccselect").append("<option value ='" + o.value + "'>" + o.text + "</option>")
        })
    }
})