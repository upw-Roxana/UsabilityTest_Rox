Sortable.create(exL, {
    group: "shared",
    animation: 100
});

Sortable.create(shortCuts, {
    group: "shared",
    animation: 100,
    filter: '.filtered', // 'filtered' class is not draggable
    sort: false
});

Sortable.create(allAvailable, {
    group: "shared",
    animation: 100,
    filter: '.filtered', // 'filtered' class is not draggable
    sort: false
});



function shortCutsSelected() {
    let boop = document.getElementById("shortCutsTab");
    let boop2 = document.getElementById("allTab");
    let shortcuts = document.getElementById("shortCuts");
    let allAvailable = document.getElementById("allAvailable");

    if (!boop.classList.contains("active")) {
        boop.classList.add("active");
    }

    if (boop2.classList.contains("active")) {
        boop2.classList.remove("active");
    }

    if (shortcuts.classList.contains("tempHide")) {
        shortcuts.classList.remove("tempHide");
    }

    if (!allAvailable.classList.contains("tempHide")) {
        allAvailable.classList.add("tempHide");
    }

}

function allSelected() {
    let boop = document.getElementById("shortCutsTab");
    let boop2 = document.getElementById("allTab");
    let shortcuts = document.getElementById("shortCuts");
    let allAvailable = document.getElementById("allAvailable");

    if (!boop2.classList.contains("active")) {
        boop2.classList.add("active");
    }

    if (boop.classList.contains("active")) {
        boop.classList.remove("active");
    }

    if (!shortcuts.classList.contains("tempHide")) {
        shortcuts.classList.add("tempHide");
    }

    if (allAvailable.classList.contains("tempHide")) {
        allAvailable.classList.remove("tempHide");
    }

}

function codeMagic() {
    let boop = document.querySelector("code");
    let something = document.querySelector("#removeMe");
    boop.removeChild(something);

    let haha = document.createElement("div")
    haha.innerHTML = `<pre>WITH
    with_all as
           (
           select accountid
           from imhotep.jobsearch
           cross join unnest(page) as t(pages)
           where unixtime between imhotep_unixtime(current_date - interval '30' day) and imhotep_unixtime(current_date - interval '0' day)
           and country='us'
           and accountid>0
           and pages='1'
           and contains (grp, 'privileged') = false
           and contains (grp, 'spider') = false
           and contains (useragent,'catchpoint') = false
           and contains (rcv, 'jsv') = true
           and contains (rcv, 'interaction') = true
           and lower(qnorm) like ('%hiring%')
           group by 1
           union all
           select accountid
           from imhotep.mobsearch
           cross join unnest(page) as t(pages)
           where unixtime between imhotep_unixtime(current_date - interval '30' day) and imhotep_unixtime(current_date - interval '0' day)
           and country='us'
           and accountid>0
           and pages='1'
           and contains (grp, 'privileged') = false
           and contains (grp, 'spider') = false
           and contains (useragent,'catchpoint') = false
           and contains (rcv, 'jsv') = true
           and contains (rcv, 'interaction') = true
           and lower(qnorm) like ('%hiring%')
           group by 1
           )
    select distinct (accountid)
    from with_all;</pre>`;
    boop.append(haha);
}