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
    let ertekek = {}
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
        let element = $(this)
        ertekek[element.attr("name")] = element.val()
        console.table(ertekek)

        switch (element.attr("name")) {
            case "eroforras":
                filled[0] = true
                break;
            case "amort":
                filled[1] = true
                break;
            case "ftl":
                filled[2] = $("#ftl").val() > 0
                break;
            case "cc":
                filled[3] = !($("#ccselect").val() == "-1")
                break;
            case "plate":
                let plateregex = /([A-Za-z]{3}-[0-9]{3})|([a-zA-Z]{2}-[a-zA-Z]{2}-[0-9]{3})/gm
                filled[4] = plateregex.test($("#plate").val())
                break
            case "make":
                filled[5] = $("#make").val() != ""
                break;
            case "where":
                filled[6] = /[a-zA-Z]{1,50}-[a-zA-Z]{1,50}/gm.test($("#where").val()) && !(/[\d]/gm.test($("#where").val()))
                break;
            case "dis":
                filled[7] = $("#dis").val() > 0
                break;
            default:
                break;
        }
        $("[type=submit]").attr("disabled", filled.includes(false))

        console.log(filled);

    })
    $("[type=submit]").click(function () {
        szamitas(ertekek)
    })


})
function getUzemanyag(t) {
    t.forEach((o) => {
        $("#ccselect").append("<option value ='" + o.value + "'>" + o.text + "</option>")
    })
}

function szamitas(ertekek) {
    for (const key in ertekek) {
        if (Object.prototype.hasOwnProperty.call(ertekek, key)) {
            const element = ertekek[key];
            let fogy = 0;
            if (key == "eroforras") {
                switch (element) {

                    case "lpg":
                        fogy = ertekek["cc"] * 1.2
                        break;
                    case "elektromos": fogy = 3; break;

                    default: fogy = ertekek["cc"]; break;
                }
            }
            let koltseg = fogy * ertekek["dis"] / 100 * ertekek["ftl"] + ertekek[dis] * ertekek["amort"]
            $(".koltseg").html(koltseg)
        }
    }
}