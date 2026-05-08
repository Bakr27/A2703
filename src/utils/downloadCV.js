export function downloadCV(cvUrl, cvFilename) {
  try {
    if (!cvUrl) return;

    const filename =
      cvFilename ||
      cvUrl.split('/').pop() ||
      'Aboubakr_Ramadan_Nafady_CV.pdf';

    const link = document.createElement('a');

    link.href = cvUrl;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (e) {
    window.open(cvUrl, '_blank');
  }
}