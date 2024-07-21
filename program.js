let currentSlide = 0;

const facultyContent = [
    {
        faculty: "Fakultas Ilmu Komputer",
        programs: {
            "Sistem Informasi": "Program Studi Sistem Informasi berfokus pada pengembangan sistem informasi yang efektif dan efisien untuk mendukung operasi bisnis dan organisasi.",
            "D3 Teknik Informatika": "Program Studi Teknik Informatika mengajarkan keterampilan teknis dalam pengembangan perangkat lunak, jaringan komputer, dan keamanan siber.",
            "D3 Manajemen Informatika": "Program Studi Manajemen Informatika mempersiapkan mahasiswa untuk mengelola proyek teknologi informasi dan mengembangkan solusi TI yang inovatif.",
            "Informatika" : "",
            "Teknologi Informasi" : "",
            "Teknik Komputer": ""
        }
    },
    {
        faculty: "Fakultas Ekonomi dan Sosial",
        programs: {
            "Ekonomi": "Program Studi Ekonomi membahas teori dan kebijakan ekonomi serta aplikasinya dalam konteks global dan lokal.",
            "Ilmu Komunikasi": "Program Studi Manajemen menawarkan pembelajaran tentang pengelolaan organisasi, strategi bisnis, dan kepemimpinan.",
            "Akuntansi": "Program Studi Akuntansi mempersiapkan mahasiswa untuk karir di bidang akuntansi keuangan, audit, dan perpajakan.",
            "Hubungan Internasional": "Program Studi Akuntansi mempersiapkan mahasiswa untuk karir di bidang akuntansi keuangan, audit, dan perpajakan.",
            "Ilmu Internasional": "Program Studi Akuntansi mempersiapkan mahasiswa untuk karir di bidang akuntansi keuangan, audit, dan perpajakan.",
            "Kewirausahaan": "Program Studi Akuntansi mempersiapkan mahasiswa untuk karir di bidang akuntansi keuangan, audit, dan perpajakan."
        }

    },
    {
        faculty: "Fakultas Sains & Teknologi",
        programs: {
            "Geografi": "Program Studi Biologi mengeksplorasi berbagai aspek kehidupan, mulai dari molekul hingga ekosistem.",
            "Arsitektur": "Program Studi Kimia menyediakan pendidikan tentang sifat, struktur, dan reaksi bahan kimia.",
            "Perencanaan Wilayah dan Kota": "Program Studi Fisika mengajarkan prinsip-prinsip dasar alam semesta, dari partikel subatom hingga kosmos.",
        }
    },
    {
        faculty: "Pascasarjana",
        programs: {
            "Magister Informatika": "Program Magister Manajemen berfokus pada pengembangan keterampilan kepemimpinan dan manajemen strategis.",
            "Magister PJJ informatika": "Program Magister Teknik Informatika menawarkan pendidikan lanjutan dalam pengembangan dan manajemen sistem informasi.",
            "Doktoral Informatika": "Program Doktor Ilmu Ekonomi mengajarkan penelitian lanjutan dalam teori ekonomi dan kebijakan."
        }
    }
];

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    updateContent();
}

function changeProgram(program) {
    const content = facultyContent[currentSlide];
    const programDetail = content.programs[program];
    document.getElementById('program-content').innerHTML = `<h4>${program}</h4><p>${programDetail}</p>`;
}

function updateContent() {
    const content = facultyContent[currentSlide];
    document.getElementById('content').innerHTML = `<h3>${content.faculty}</h3>${generateProgramList(content.programs)}`;
    changeProgram(Object.keys(content.programs)[0]);
}

function generateProgramList(programs) {
    return `<ul id="program-list">${Object.keys(programs).map(program => `<li onclick="changeProgram('${program}')">${program}</li>`).join('')}</ul>`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent(); 
});


 
