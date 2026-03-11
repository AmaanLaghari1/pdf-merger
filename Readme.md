Overview

This project provides a simple Node.js tool to merge two PDF files into a single document.

Features:

Merge PDF A and PDF B into a single PDF.

Fast and memory-efficient using pdf-lib.

Saves the merged document locally.

Technology Stack

Node.js

pdf-lib

System Requirements

Windows OS / macOS / Linux

Node.js (v18+ recommended)

npm

Check Node.js version:

node -v
npm -v
Project Structure

Installation

Clone the project or create a new folder.

Initialize npm:

npm init -y

Install dependencies:

npm install pdf-lib
Usage

Place the PDFs you want to merge in the project folder:

pdfA.pdf
pdfB.pdf

Run the script:

node index.js

The merged PDF will be created as:

merged.pdf
Performance

The merging process is fast (<0.5 seconds for small PDFs).

Memory-efficient: loads only pages and merges in-memory.

Troubleshooting

Ensure PDF files exist in the same folder as index.js.

Check file names and extensions.

For large PDFs, you may enable object streams to reduce memory:

const mergedBytes = await mergedPdf.save({ useObjectStreams: true });
Future Improvements

Merge multiple PDFs dynamically from a folder.

Add CLI arguments for input/output files.

Extract specific pages instead of full PDFs.

Add compression or optimization for large files.

This setup provides a simple, efficient PDF merging tool using Node.js with index.js as the entry point.