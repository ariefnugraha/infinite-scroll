let infiniteScroll = new InfiniteAjaxScroll('.container', {
    item: '.article',
    next: '.next',
    pagination: '.pager',
    spinner: '.loader',
    triggerPageThreshold: 2,
})

infiniteScroll.on('last', function() {
    document.querySelector('.no-more').style.opacity = 1
})

infiniteScroll.on('page', e => {
    document.title = e.title;
    let state = history.state;
    history.replaceState(state, e.title, e.url);
    
})