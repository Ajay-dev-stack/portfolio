
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');

    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
    }
}

function downloadResume(event) {
    if (event && typeof event.preventDefault === 'function') event.preventDefault();

    // Path to the resume file in the `resume/` folder (relative to site root)
    const filePath = 'resume/Ajay Selvan A S Java Full Stack Developer.pdf';
    const suggestedName = 'Ajay_Selvan_Resume.pdf';

    // Create temporary link to trigger native download
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', suggestedName);
    link.style.display = 'none';
    document.body.appendChild(link);

    // Attempt to trigger download. Some browsers may ignore "download" for cross-origin.
    link.click();
    document.body.removeChild(link);

    // Button feedback (gracefully handle cases where event/button isn't available)
    let btn = null;
    if (event && event.target) {
        btn = event.target.closest ? event.target.closest('.resume-btn') : null;
    }
    if (!btn) btn = document.querySelector('.resume-btn');

    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span style="font-size: 1.3em;">✓</span> Downloaded!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    }
}