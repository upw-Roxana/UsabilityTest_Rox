Sortable.create(exL, {
    group: 'shared',
    animation: 100
});

Sortable.create(exR, {
    group: 'shared',
    animation: 100,
    filter: '.filtered', // 'filtered' class is not draggable
    sort: false
});