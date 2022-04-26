Vue.component('base-head-table', {
   template:
       '<thead class="table-primary">' +
            '<tr>' +
                // '<th class="text-center" style="width: 5%">Id</th>'+
                '<th class="text-start" style="width: 55%">Name</th>'+
                '<th class="text-center" style="width: 10%">Format</th>'+
                '<th class="text-center" style="width: 10%">Download</th>'+
                '<th class="text-center" style="width: 5%"></th>'+
            '</tr>'+
       '</thead>'
});

Vue.component('base-body-table', {
    props: ['files'],
    template:
        '<tbody class="search-input">' +
            '<tr class="" v-for="file in files" v-bind:key="file.id">' +
                '<td class="">{{ file.name }}</td>' +
                '<td class="text-center">{{ file.format }}</td>' +
                '<td class="text-center"><a download v-bind:href="file.download"><span class="bi-download"></span></a></td>' +
                '<td class="text-center"><button style="color: darkorange" class="btn bi-star-fill"></button> </td>' +
            '</tr>' +
        '</tbody>'
});

Vue.component('base-container', {
    props: ['files'],
    template:
        '<div class="container" style="max-width: 1000px; margin-top: 70px">' +
            '<div class="row ">'+
                '<div class="col-sm-3"><h2>Public books:</h2></div>' +
                '<div style="margin-left: -3em" class="col-sm-3"><input  id="search-input" class="form-control h-75" type="search" placeholder="Search"></div>' +
            '</div>' +
            '<table class="table table-dark table-hover table-striped table-bordered">' +
                '<base-head-table></base-head-table>' +
                '<base-body-table v-bind:files="files"></base-body-table>' +
            '</table>'+
        '</div>'
});
//🔍
let publicPDF = new Vue({
    el: '#publicPDF',
    template: '<base-container v-bind:files="files"></base-container>',
    data: {
        files: [
            { id: '1', name: 'first text.txt', format: 'PDF', download: '//downloader.disk.yandex.ru/disk/ffb0a49a500935c840781fac6f0df0849d1de59c050e58d96786a8fa4e32d3ed/6266c14b/fOvF4HtEAVTuNw5R93L4y4_pu9XWcxJj4BT04KS0mqJmuuElrL-1WWvSCoxn1TV7VUlOQsipiJOY3iBYoytVmw%3D%3D?uid=853831496&filename=Spring_in_Action_Sixth_Edition_v4_MEAP.pdf&disposition=attachment&hash=&limit=0&content_type=application%2Fpdf&owner_uid=853831496&fsize=11513741&hid=a6aba0c1f9370de3e4ab0664758e4091&media_type=document&tknv=v2&etag=1be282d1538ec16b973d636ad4b1350b' },
            { id: '2', name: 'second text.txt', format: 'PDF', download: '//downloader.disk.yandex.ru/disk/ffb0a49a500935c840781fac6f0df0849d1de59c050e58d96786a8fa4e32d3ed/6266c14b/fOvF4HtEAVTuNw5R93L4y4_pu9XWcxJj4BT04KS0mqJmuuElrL-1WWvSCoxn1TV7VUlOQsipiJOY3iBYoytVmw%3D%3D?uid=853831496&filename=Spring_in_Action_Sixth_Edition_v4_MEAP.pdf&disposition=attachment&hash=&limit=0&content_type=application%2Fpdf&owner_uid=853831496&fsize=11513741&hid=a6aba0c1f9370de3e4ab0664758e4091&media_type=document&tknv=v2&etag=1be282d1538ec16b973d636ad4b1350b' },
            { id: '3', name: 'third text.txt', format: 'PDF', download: '//downloader.disk.yandex.ru/disk/ffb0a49a500935c840781fac6f0df0849d1de59c050e58d96786a8fa4e32d3ed/6266c14b/fOvF4HtEAVTuNw5R93L4y4_pu9XWcxJj4BT04KS0mqJmuuElrL-1WWvSCoxn1TV7VUlOQsipiJOY3iBYoytVmw%3D%3D?uid=853831496&filename=Spring_in_Action_Sixth_Edition_v4_MEAP.pdf&disposition=attachment&hash=&limit=0&content_type=application%2Fpdf&owner_uid=853831496&fsize=11513741&hid=a6aba0c1f9370de3e4ab0664758e4091&media_type=document&tknv=v2&etag=1be282d1538ec16b973d636ad4b1350b' }
        ]
    }
});