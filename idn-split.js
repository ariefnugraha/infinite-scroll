
        $(document).ready(function(){

            if($(".split-page").length > 0){
                $('.read-more-btn-check').remove();

                $('#article-content').addClass('split-page-available');
            }

            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                urlCurrent = window.location.href;
                lastString = urlCurrent.substring(urlCurrent.lastIndexOf('/') + 1);
                slashNo = urlCurrent.substr(-1);
                url = window.location.href.replace(/\/$/, '');

            if (slashNo == "/"){
                window.history.pushState({path:newurl},'',url);
            }

            if(lastString > 0){
                $(".split-page").each(function() {
                    console.log('target:' + $(this).data('target'));
                    if ($(this).data('target') <= lastString) {
                        $(this).addClass('open');
                    }
                });

                $(".show-page").each(function() {
                    var value = $(this).attr('target');
                        nextValue = Number(value) + 1;
                        searchLastTarget = Number(lastString) + 1;

                    if ($(this).attr('target') <= lastString){
                        $(this).remove();
                    }

                    if ($(this).attr('target') >= lastString){
                        $('.show-page[target="'+searchLastTarget+'"]').removeClass('hide');
                    }
                });
            }

            $('.show-page').click(function(){
                var value = $(this).attr('target');
                    nextValue = Number(value) + 1;
                    url = window.location.href.replace(/\/$/, '');
                    lastSeg = url.substr(url.lastIndexOf('/') + 1);
                    current = window.location.href;
                    i = current.lastIndexOf('/') + 1;
                    pathSegment = window.location.pathname.split('/');
                    pathName = window.location.pathname
                    if (lastSeg == (value - 1)) {
                        pathName = pathName.substring(0, pathName.lastIndexOf("/"));
                    }
                    newurl = window.location.protocol + '//' + window.location.host + pathName + '/' + value;
                    // newurl = window.location.protocol + "//" + window.location.host + '/' + pathSegment[1] + '/' + pathSegment[2] + '/' +  pathSegment[3] + '/' + pathSegment[4] + '/' + value;
                    current = current.substr(0, i) + value;

                $('.split-page' + $(this).attr('target')).addClass('open');
                $(this).remove();

                $('.show-page[target="'+nextValue+'"]').removeClass('hide');

                $(this).attr('target', value);

                window.history.pushState({path:newurl},'',newurl);

                var articleTitle = document.querySelector('.title-text').textContent.trim();

                                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'justForYouView',
                        'ecommerce': {
                            'promoView': {
                                'promotions': [
                                                                                                            {
                                        'id': '5d0047e95de141a363a397677826d6e8d6261546',
                                        'name': 'Bukan Genre Horor, 7 Game Ini Bikin Bulu Kuduk Merinding',
                                        'creative': 'https://cdn.idntimes.com/content-images/post/20211013/horor0-c4b2401c16d610d6e407b680b25503ca_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 1' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': '1b9b8822f86e8e5c6e81b647bf584bae7d9bd922',
                                        'name': '7 Senjata Terkuat Game Final Fantasy, Bisa Tebak, kupo?',
                                        'creative': 'https://cdn.idntimes.com/content-images/post/20211010/fviir-cloud-and-sephiroth-clash-93de8f33a7eda0cc2c0a50dd1531a0da_600x400.png', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 2' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': '9c9ca31833e5cee04612565e06a31cc223631ebc',
                                        'name': 'Berani Beda, 7 Franchise Game Ini Pernah Berubah Genre',
                                        'creative': 'https://cdn.idntimes.com/content-images/post/20211104/genre6-e19cee0c99aa6d16bb9e0bbdd0eaec9c_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 3' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': '5b3579b5fdceb091a1640dfd727bc2ff777a7896',
                                        'name': '7 Crossover di Game Terunik, Pertemuan Para Protagonis!',
                                        'creative': 'https://cdn.idntimes.com/content-images/post/20211101/cross-b778becf8d7b24155be7f765c491e0a9_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 4' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': 'c01f5b2c9bcfd873b7fbe4851666f939839efa4c',
                                        'name': '5 Poin Plus yang Bikin Xiaomi 11T Worth It untuk Dibeli',
                                        'creative': 'https://cdn.idntimes.com/content-images/community/2021/11/img-20211106-221803-75518cf7651a87340b376c775dc61640-4bf3d71b72780e94ad5530bd4d6117ca_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 5' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': '112263d4557d6f24a78a633c3fad86bf2394b2b0',
                                        'name': 'Kerja Jadi Mudah, 6 Alasan HP vivo V21 Cocok untuk Penulis ',
                                        'creative': 'https://cdn.idntimes.com/content-images/community/2021/11/photogrid-plus-1636123754443-4b4af9a6a864671d8e9178cb9eb0daf9-30d2e3939417dfe0f16026a7df952b3a_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 6' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': 'a17158edb0dee9159eff15331a4a3d852f448090',
                                        'name': 'Review vivo V21 Smartphone Kece dengan Kamera Berkualitas',
                                        'creative': 'https://cdn.idntimes.com/content-images/community/2021/11/untitled-7b473d64fc0c621002d6c621b2a340d9-95f5b8ec47727428d932ab13b9d1ec07_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 7' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': '7ef6c52276682f2c5f7a7878c541b236c5b49a43',
                                        'name': '6 Fakta Forza Horizon 5, Game Racing Terbaik Tahun 2021',
                                        'creative': 'https://cdn.idntimes.com/content-images/post/20211108/forza3-17ade5616d25f7dd25c305a818794c30_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 8' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': '510102eb7df2d8a327596d9b45a143b06715d853',
                                        'name': '5 Treasure Cookie Run yang Cocok untuk Menghancurkan Rintangan',
                                        'creative': 'https://cdn.idntimes.com/content-images/community/2021/10/compress-20211031-134612-2807-b383504511d4cd14b25273d672b4d0cc-e4b903e969f99b71445eb454176fb083_600x400.jpg', // image url if no image just use ‘text’
                                        'position': 'article page - Berita Terkini Lainnya - 9' // page group - article list name - slot or position
                                    },
                                                                                                            {
                                        'id': 'c1477f7a477…