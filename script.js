let karyawanList = [];
let jabatanList = [];
let divisiList = [];

// Fungsi untuk menampilkan karyawan
function renderKaryawan() {
    const tbody = document.getElementById('karyawan-tbody');
    tbody.innerHTML = '';
    karyawanList.forEach((karyawan, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${karyawan.nama}</td>
                <td>${karyawan.jabatan}</td>
                <td>${karyawan.divisi}</td>
                <td>
                    <button class="btn btn-warning" onclick="editKaryawan(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteKaryawan(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Fungsi untuk menambah karyawan
function addKaryawan(event) {
    event.preventDefault();
    const nama = document.getElementById('karyawan-nama').value;
    const jabatan = document.getElementById('karyawan-jabatan').value;
    const divisi = document.getElementById('karyawan-divisi').value;

    karyawanList.push({ nama, jabatan, divisi });
    renderKaryawan();
    document.getElementById('tambahKaryawanForm').reset();
    $('#tambahKaryawan').modal('hide');
}

// Fungsi untuk mengedit karyawan
function editKaryawan(index) {
    const karyawan = karyawanList[index];
    document.getElementById('karyawan-nama').value = karyawan.nama;
    document.getElementById('karyawan-jabatan').value = karyawan.jabatan;
    document.getElementById('karyawan-divisi').value = karyawan.divisi;

    // Menghapus karyawan dari list untuk update
    document.getElementById('addKaryawanBtn').style.display = 'none';
    document.getElementById('updateKaryawanBtn').style.display = 'block';
    document.getElementById('updateKaryawanBtn').onclick = function() {
        updateKaryawan(index);
    };
    $('#tambahKaryawan').modal('show');
}

// Fungsi untuk memperbarui karyawan
function updateKaryawan(index) {
    const nama = document.getElementById('karyawan-nama').value;
    const jabatan = document.getElementById('karyawan-jabatan').value;
    const divisi = document.getElementById('karyawan-divisi').value;

    karyawanList[index] = { nama, jabatan, divisi };
    renderKaryawan();
    document.getElementById('tambahKaryawanForm').reset();
    $('#tambahKaryawan').modal('hide');
    document.getElementById('addKaryawanBtn').style.display = 'block';
    document.getElementById('updateKaryawanBtn').style.display = 'none';
}

// Fungsi untuk menghapus karyawan
function deleteKaryawan(index) {
    karyawanList.splice(index, 1);
    renderKaryawan();
}

// Fungsi untuk menambah jabatan
function addJabatan(event) {
    event.preventDefault();
    const nama = document.getElementById('jabatan-nama').value;
    jabatanList.push({ nama });
    renderJabatan();
    document.getElementById('tambahJabatanForm').reset();
    $('#tambahJabatan').modal('hide');
}

// Fungsi untuk menampilkan jabatan
function renderJabatan() {
    const tbody = document.getElementById('jabatan-tbody');
    tbody.innerHTML = '';
    jabatanList.forEach((jabatan, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${jabatan.nama}</td>
                <td>
                    <button class="btn btn-warning" onclick="editJabatan(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteJabatan(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Fungsi untuk mengedit jabatan
function editJabatan(index) {
    const jabatan = jabatanList[index];
    document.getElementById('jabatan-nama').value = jabatan.nama;

    // Menghapus jabatan dari list untuk update
    document.getElementById('addJabatanBtn').style.display = 'none';
    document.getElementById('updateJabatanBtn').style.display = 'block';
    document.getElementById('updateJabatanBtn').onclick = function() {
        updateJabatan(index);
    };
    $('#tambahJabatan').modal('show');
}

// Fungsi untuk memperbarui jabatan
function updateJabatan(index) {
    const nama = document.getElementById('jabatan-nama').value;

    jabatanList[index] = { nama };
    renderJabatan();
    document.getElementById('tambahJabatanForm').reset();
    $('#tambahJabatan').modal('hide');
    document.getElementById('addJabatanBtn').style.display = 'block';
    document.getElementById('updateJabatanBtn').style.display = 'none';
}

// Fungsi untuk menghapus jabatan
function deleteJabatan(index) {
    jabatanList.splice(index, 1);
    renderJabatan();
}

// Fungsi untuk menambah divisi
function addDivisi(event) {
    event.preventDefault();
    const nama = document.getElementById('divisi-nama').value;
    divisiList.push({ nama });
    renderDivisi();
    document.getElementById('tambahDivisiForm').reset();
    $('#tambahDivisi').modal('hide');
}

// Fungsi untuk menampilkan divisi
function renderDivisi() {
    const tbody = document.getElementById('divisi-tbody');
    tbody.innerHTML = '';
    divisiList.forEach((divisi, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${divisi.nama }</td>
                <td>
                    <button class="btn btn-warning" onclick="editDivisi(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteDivisi(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Fungsi untuk mengedit divisi
function editDivisi(index) {
    const divisi = divisiList[index];
    document.getElementById('divisi-nama').value = divisi.nama;

    // Menghapus divisi dari list untuk update
    document.getElementById('addDivisiBtn').style.display = 'none';
    document.getElementById('updateDivisiBtn').style.display = 'block';
    document.getElementById('updateDivisiBtn').onclick = function() {
        updateDivisi(index);
    };
    $('#tambahDivisi').modal('show');
}

// Fungsi untuk memperbarui divisi
function updateDivisi(index) {
    const nama = document.getElementById('divisi-nama').value;

    divisiList[index] = { nama };
    renderDivisi();
    document.getElementById('tambahDivisiForm').reset();
    $('#tambahDivisi').modal('hide');
    document.getElementById('addDivisiBtn').style.display = 'block';
    document.getElementById('updateDivisiBtn').style.display = 'none';
}

// Fungsi untuk menghapus divisi
function deleteDivisi(index) {
    divisiList.splice(index, 1);
    renderDivisi();
}