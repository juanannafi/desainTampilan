// carousel
const toggler = document.querySelector(".btn");

toggler.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
}); 

// hide tabel
function showTable(tableId, buttonElement) {
    const tables = document.querySelectorAll('.table-container'); // Menyembunyikan semua tabel
    tables.forEach(table => table.style.display = 'none');

    const tableToShow = document.getElementById(tableId); // Menampilkan tabel yang sesuai
    if (tableToShow) {
        tableToShow.style.display = 'block';
    }

    const buttons = document.querySelectorAll('.btn-primary'); // Menghapus kelas aktif dari semua tombol
    buttons.forEach(btn => btn.classList.remove('btn-active'));

    buttonElement.classList.add('btn-active'); // Menambahkan kelas aktif pada tombol yang diklik
};

// Menangani pemilihan dropdown
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        // Mengambil nilai dari data attribute
        const value = this.getAttribute('data-value');

        // Temukan baris dari dropdown
        const row = this.closest('tr');
        const dropdownButton = row.querySelector('.btn-primary');

        // Perbarui isi teks tombol dropdown dengan nilai yang dipilih
        dropdownButton.textContent = value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnCircles = document.querySelectorAll('.btn-circle');
    const btnKategori1 = document.querySelectorAll('.btn-kategori1');
    const btnKategori2 = document.querySelectorAll('.btn-kategori2');
    const btnKategori3 = document.querySelectorAll('.btn-kategori3');
    const tblPoinWrapper = document.getElementById('tbl-poin-wrapper');
    const tblPoinWrapper2 = document.getElementById('tbl-poin-wrapper2');
    const tblPoinWrapper3 = document.getElementById('tbl-poin-wrapper3');
    
    btnCircles.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const subTableRow = row.nextElementSibling; // Ambil elemen berikutnya
            
            // Toggle visibilitas tabel
            if (subTableRow.style.display === 'none' || subTableRow.style.display === '') {
                subTableRow.style.display = 'table-row'; // Tampilkan tabel
            } else {
                subTableRow.style.display = 'none'; // Sembunyikan tabel
            }

            // Toggle icon pada tombol
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });

    // Menangani pemilihan dropdown
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            // Ambil nilai dari data attribute
            const value = this.getAttribute('data-value');

            // Temukan parent row (baris) dari dropdown
            const row = this.closest('tr');
            const dropdownButton = row.querySelector('.btn-primary');

            // Perbarui teks tombol dropdown dengan nilai yang dipilih
            dropdownButton.textContent = value;
        });
    });

    //menangani klik pada tombol kategori (btn1)
    btnKategori1.forEach(button=> {
        button.addEventListener('click', function(){
            const tblPoinWrapper = document.getElementById('tbl-poin-wrapper');
            if (tblPoinWrapper.style.display === 'none' || tblPoinWrapper.style.display === ''){
                tblPoinWrapper.style.display = 'block';
            } else {
                tblPoinWrapper.style.display = 'none';
            }
        });
    });

    //btn2
    btnKategori2.forEach(button=> {
        button.addEventListener('click', function(){
            const tblPoinWrapper2 = document.getElementById('tbl-poin-wrapper2');
            if (tblPoinWrapper2.style.display === 'none' || tblPoinWrapper2.style.display === ''){
                tblPoinWrapper2.style.display = 'block';
            } else {
                tblPoinWrapper2.style.display = 'none';
            }
        });
    });

     //btn3
     btnKategori3.forEach(button=> {
        button.addEventListener('click', function(){
            const tblPoinWrapper3 = document.getElementById('tbl-poin-wrapper3');
            if (tblPoinWrapper3.style.display === 'none' || tblPoinWrapper3.style.display === ''){
                tblPoinWrapper3.style.display = 'block';
            } else {
                tblPoinWrapper3.style.display = 'none';
            }
        });
    });

    // Menangani klik pada tombol lain untuk menyembunyikan tbl-poin-wrapper (btn1)
    document.querySelectorAll('.btn-second, .btn-third').forEach(button => {
        button.addEventListener('click', function() {
            tblPoinWrapper.style.display = 'none';
        });
    });

    //(btn2)
    document.querySelectorAll('.btn-first, .btn-third').forEach(button => {
        button.addEventListener('click', function() {
            tblPoinWrapper2.style.display = 'none';
        });
    });

    //(btn3)
    document.querySelectorAll('.btn-first, .btn-second').forEach(button => {
        button.addEventListener('click', function() {
            tblPoinWrapper3.style.display = 'none';
        });
    });
});