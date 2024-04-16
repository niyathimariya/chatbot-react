import jsPDF from 'jspdf';

export const generatePDF = (meetingDetails) => {
  console.log('generatePDF function is called');
  const pdf = new jsPDF();
  let y = 10;

  // Loop through meetingDetails and add each field to the PDF
  Object.entries(meetingDetails).forEach(([key, value]) => {
    pdf.text(10, y, `${key}: ${value}`);
    y += 10;
  });

  // Save the PDF
  pdf.save('meeting_details.pdf');
};
