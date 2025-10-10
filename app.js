import {
    ZipReader,
    BlobReader,
} from "https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.8.7/+esm";

const fileInputElement = document.querySelector("#file-input");
fileInputElement.onchange = selectFile;

const fileSizeElement = document.querySelector("#file-size");

const blockListElement = document.querySelector("#block-list")

let selectedFile;
let reader;
let fileSizeString;
let entriesAll;
let entriesFiltered;

async function selectFile() {
    try {
        selectedFile = fileInputElement.files[0];
        await loadFiles();
    } catch (error) {
        alert(error);
    }
}

async function loadFiles() {
    reader = await new ZipReader(new BlobReader(selectedFile));
    fileSizeString = `${Math.floor(reader.reader.size / 1e+6)} MB`;
    entriesAll = await reader.getEntries();
    
    entriesFiltered = entriesAll.filter(filterTextures);
    let totalTextures = entriesFiltered.length;
    entriesFiltered = entriesFiltered.filter(filterBlocks);
    let totalBlocks = entriesFiltered.length;
    
    let filteredBlocksText = entriesFiltered.reduce((accumulator, currentValue) => {
        return `${accumulator}${currentValue.filename}\n`;
    }, "").trim();
    blockListElement.value = filteredBlocksText;

    fileSizeElement.innerText = `JAR size: ${fileSizeString}, Textures: ${totalTextures}, Blocks: ${totalBlocks}`;
}

function filterTextures(file) {
    if (!file.filename.startsWith("assets/minecraft/textures/")) return false;
    if (!file.filename.endsWith(".png")) return false;
    return true;
}

function filterBlocks(file) {
    if (!file.filename.startsWith("assets/minecraft/textures/block/")) return false;
    return true;
}
