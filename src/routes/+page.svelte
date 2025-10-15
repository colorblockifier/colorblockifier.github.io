<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		DarkMode,
		Card,
		Helper,
		Label,
		Fileupload
	} from 'flowbite-svelte';
	import { Table } from '@flowbite-svelte-plugins/datatable';
	import { ArrowUpRightFromSquareOutline, MoonOutline, SunOutline } from 'flowbite-svelte-icons';
	import { ZipReader, BlobReader } from '@zip.js/zip.js';

	let fileuploadRef = $state() as HTMLInputElement;
	let files: FileList | null = $state(null);

	let reader;
	let allFiles;

	let textureFiles = $state([{ filename: 'example1', compressedSize: 0 }]);
	let tableItems = $derived.by(() => {
		// return textureFiles.map((file) => ({ filename: file.filename }));
		return textureFiles;
		// return [{ name: 'example1' }, { name: 'example2' }].map((file) => ({ filename: file.name }));
	});

	function handleOnChange(event: Event) {
		// 	console.log(files[0]);
		loadFile(files[0]);
	}

	$inspect(textureFiles, tableItems);

	async function loadFile(file) {
		reader = new ZipReader(new BlobReader(file));
		allFiles = await reader.getEntries();
		textureFiles = allFiles.filter(filterTextures).filter(filterBlocks);
	}

	function filterTextures(file) {
		if (!file.filename.startsWith('assets/minecraft/textures/')) return false;
		if (!file.filename.endsWith('.png')) return false;
		return true;
	}

	function filterBlocks(file) {
		if (!file.filename.startsWith('assets/minecraft/textures/block/')) return false;
		return true;
	}
</script>

<div class="flex h-dvh flex-col">
	<Navbar class="bg-gray-200 dark:bg-gray-800">
		<NavHamburger />
		<NavBrand>
			<span
				class="bg-gradient-to-r from-red-400 via-green-400 to-purple-400 bg-clip-text font-mono text-xl font-bold tracking-widest text-transparent"
				>colorblockifier</span
			>
		</NavBrand>
		<NavUl>
			<NavLi class="underline" href="https://github.com/colorblockifier/colorblockifier.github.io"
				>About</NavLi
			>
		</NavUl>
		<DarkMode class="cursor-pointer">
			{#snippet lightIcon()}
				<MoonOutline />
			{/snippet}
			{#snippet darkIcon()}
				<SunOutline />
			{/snippet}
		</DarkMode>
	</Navbar>

	<div class="flex grow flex-col items-center gap-4 bg-gray-100 p-4 dark:bg-gray-700">
		<Card class="flex max-w-xl gap-2 p-4">
			<div>
				<Label for="jarfile">Select a Minecraft JAR to extract textures</Label>
				<Helper>
					<a
						class="flex flex-row items-center gap-1 underline"
						href="https://minecraft.wiki/w/.minecraft#Locating"
					>
						<span>How to find the <code>.minecraft</code> folder</span>
						<ArrowUpRightFromSquareOutline strokeWidth="1.5" />
					</a>
				</Helper>
			</div>
			<Fileupload
				id="jarfile_input"
				bind:files
				bind:elementRef={fileuploadRef}
				onchange={handleOnChange}
				accept=".jar"
			/>
		</Card>

		<Card class="max-w-xl gap-2 p-4">
			<Table
				items={tableItems}
				onRefresh={console.log}
				onSearch={console.log}
				onUpdate={console.log}
			></Table>
		</Card>
	</div>
</div>
