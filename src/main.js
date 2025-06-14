document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-collapsed');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // ...existing sidebar code...

    const excelInput = document.getElementById('excelUpload');
    excelInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Example: Read the first sheet and log as JSON
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            console.log('Excel Data:', jsonData);

            // TODO: Use jsonData to update your dashboard
        };
        reader.readAsArrayBuffer(file);
    });
});