import {
    ZipReader,
    BlobReader,
} from "https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.8.7/+esm";

const fileInput = document.querySelector("#file-input");
fileInput.onchange = selectFile;

let selectedFile;
let reader;
let fileSizeString;
let entries;

async function selectFile() {
    try {
        selectedFile = fileInput.files[0];
        await loadFiles();
    } catch (error) {
        alert(error);
    }
}

async function loadFiles() {
    reader = await new ZipReader(new BlobReader(selectedFile));
    fileSizeString = `${Math.floor(reader.reader.size / 1e+6)} MB`;
    entries = await reader.getEntries();

    console.log(reader);
    console.log(fileSizeString);
    console.log(entries);
}
