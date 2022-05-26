'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilproject);

    app.route('/tampil/:ID')
        .get(jsonku.tampilID);

    app.route('/tambah')
        .post(jsonku.tambahproject);

    app.route('/ubah')
        .put(jsonku.ubahproject);

    app.route('/hapus')
        .delete(jsonku.hapusproject);
};