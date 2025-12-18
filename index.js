
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

    let btn = null;
    if (event && event.target) {
        btn = event.target.closest ? event.target.closest('.resume-btn') : null;
    }
    if (!btn) btn = document.querySelector('.resume-btn');

    // Prevent multiple clicks
    if (btn && btn.classList.contains('disabled')) return;

    // Path to the resume file in the `resume/` folder (relative to site root)
    const filePath = 'resume/Ajay Selvan A S_Resume.pdf';
    const suggestedName = 'Ajay_Selvan_Resume.pdf';

    // UI Feedback: Start downloading
    if (btn) {
        btn.classList.add('disabled');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="resume-icon">⏳</span> Downloading...';
        
        // Revert button state after 2 seconds
        setTimeout(() => {
            btn.innerHTML = '<span style="font-size: 1.3em;">✓</span> Downloaded!';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.classList.remove('disabled');
            }, 2000);
        }, 1000); // Simulate short delay for "Downloading..." effect
    }

    // Create temporary link to trigger native download
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', suggestedName);
    link.style.display = 'none';
    document.body.appendChild(link);

    // Attempt to trigger download
    link.click();
    
    // Clean up
    setTimeout(() => {
        document.body.removeChild(link);
    }, 100);
}