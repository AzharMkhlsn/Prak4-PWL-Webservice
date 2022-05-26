'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("REST API!", res)
};
exports.tampilproject = function (req, res) {
    connection.query('SELECT * FROM project', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilID = function (req, res) {
    let id_project = req.params.id;
    connection.query('SELECT * FROM project WHERE id = ?', [id_project],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tambahproject = function (req, res) {
    var nama_project = req.body.nama;
    var isi_project = req.body.isi;

    connection.query('INSERT INTO project (nama,isi) VALUES(?,?)',
        [nama_project, isi_project],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Project!", res)
            }
        });
};


//mengubah data berdasarkan id
exports.ubahproject = function (req, res) {
    var id_project = req.body.id;
    var nama_project = req.body.nama;
    var isi_project = req.body.isi;

    connection.query('UPDATE project SET  nama=?, isi=? WHERE id=?', [nama_project, isi_project, id_project],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Project", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapusproject= function (req, res) {
    var id_project = req.body.id;
    connection.query('DELETE FROM project WHERE id=?',[id_project],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}


