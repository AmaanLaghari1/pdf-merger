import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

async function mergePDFs() {

  console.time("MERGE_TIME");

  // Read PDFs
  const pdfA = await PDFDocument.load(fs.readFileSync("pdf/pdfA.pdf"));
  const pdfB = await PDFDocument.load(fs.readFileSync("pdf/pdfB.pdf"));

  // Create new merged PDF
  const mergedPdf = await PDFDocument.create();

  // Copy pages from PDF A
  const pagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
  pagesA.forEach(page => mergedPdf.addPage(page));

  // Copy pages from PDF B
  const pagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
  pagesB.forEach(page => mergedPdf.addPage(page));

  // Save merged PDF
  const mergedBytes = await mergedPdf.save();
  fs.writeFileSync("pdf/merged.pdf", mergedBytes);

  console.timeEnd("MERGE_TIME");

}

mergePDFs();