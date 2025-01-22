function generatePDF() {
  const element = document.querySelector(".container");
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("faycal-rafa-cv.pdf");
  });
}

// Add event listener to download button
document.querySelector(".download-btn").addEventListener("click", generatePDF);
