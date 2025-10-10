import {
    ZipReader,
    BlobReader,
} from "https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.8.7/+esm";

const fileInput = document.querySelector("#file-input");
fileInput.onchange = selectFile;

let entries;
let selectedFile;

async function selectFile() {
    try {
        selectedFile = fileInput.files[0];
        await loadFiles();
    } catch (error) {
        alert(error);
    }
}

async function loadFiles() {
    entries = await new ZipReader(new BlobReader(selectedFile)).getEntries();
    console.log(entries);
}
