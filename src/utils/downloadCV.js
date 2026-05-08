export function downloadCV(cvUrl, cvFilename) {
  try {
    if (!cvUrl) return;

    const filename = cvFilename || cvUrl.split('/').pop() || 'Aboubakr_Ramadan_Nafady_CV.pdf';

    // If the file already supports direct download (static file in public/),
    // we can use a simple anchor download.
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', filename);
    link.rel = 'noopener noreferrer';
    link.click();
  } catch (e) {
    // Fallback: just navigate to the URL.
    window.location.href = cvUrl;
  }
}

