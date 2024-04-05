import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFViewer, PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import '../Css/SecurityPage.css'
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    marginBottom: 10,
  },
});

const SecurityPage = () => {
  const [pdfs, setPDFs] = useState([]);
  const [selectedPDF, setSelectedPDF] = useState(null);

  useEffect(() => {
    // Fetch PDF documents from the server when the component mounts
    const fetchPDFs = async () => { 
      try {
        const response = await axios.get("http://localhost:8080/request/requests");
        const filteredRequests = response.data.filter(request => request.approveDeenAr && request.approveHead);
          
        setPDFs(filteredRequests);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };

    fetchPDFs();
  }, []);

  const handlePDFSelect = (pdf) => {
    setSelectedPDF(pdf);
  };

  return (
    <div className="container">
      <div className="pdf-list-container">
        <h2>PDF List</h2>
        <div className="pdf-list">
          {pdfs.map((pdf, index) => (
            <div key={index} className="pdf-item"  onClick={() => handlePDFSelect(pdf)}>
              <span>{pdf.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf-viewer-container">
        <h2>PDF Viewer</h2>
        <div className="pdf-viewer">
          {selectedPDF && (
            <PDFViewer width={600} height={800}>
              <Document>
                <Page style={styles.page}>
                  <Text style={styles.title}>{selectedPDF.name}</Text>
                  <Text style={styles.label}>Date: {selectedPDF.date}</Text>
                  <Text style={styles.label}>Start Time: {selectedPDF.startTime}</Text>
                  <Text style={styles.label}>End Time: {selectedPDF.endTime}</Text>
                  <Text style={styles.label}>Reason: {selectedPDF.reason}</Text>
                  {/* Render other fields from the PDF document here */}
                </Page>
              </Document>
            </PDFViewer>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
