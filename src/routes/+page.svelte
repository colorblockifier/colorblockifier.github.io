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
		Button,
		Popover,
		Kbd,
		Dropzone,
		Alert
	} from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';

	let filesInDropzone: FileList | null = $state(null);

	function handleOnChange(event: Event) {
		console.log('handleOnChange fired.');
		const target = event.target as HTMLInputElement;
		filesInDropzone = target.files;
	}

	function handleOnDrop(event: DragEvent) {
		console.log('handleOnDrop fired.');
		event.preventDefault();
		filesInDropzone = event.dataTransfer?.files ?? null;
	}

	function showFiles(files: FileList | null): string {
		console.log('showFiles fired.');
		if (!files || files.length === 0) return 'No files selected.';
		return Array.from(files)
			.map((file) => file.name)
			.join(', ');
	}
</script>

<Navbar class="bg-gray-100">
	<NavHamburger />
	<NavBrand>
		<span
			class="bg-gradient-to-r from-red-400 via-green-400 to-purple-400 bg-clip-text font-mono text-xl font-bold tracking-widest text-transparent"
			>colorblockifier</span
		>
	</NavBrand>
	<NavUl class="hover:underline">
		<NavLi href="https://github.com/colorblockifier/colorblockifier.github.io">About</NavLi>
	</NavUl>
	<DarkMode class="cursor-pointer" />
</Navbar>

<div class="flex flex-col items-center p-4">
	<Card class="flex gap-4 p-4">
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
		<Dropzone
			class="p-3"
			id="jarfile"
			accept=".jar"
			bind:files={filesInDropzone}
			onChange={handleOnChange}
			onDrop={handleOnDrop}
		>
			{#if !filesInDropzone || filesInDropzone.length === 0}
				<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
					<span class="font-semibold">Click to upload</span>
					or drag and drop
				</p>
				<p class="text-xs text-gray-500 dark:text-gray-400">
					<code>.minecraft/versions/&lt;version&gt;/&ltversion&gt;.jar</code>
				</p>
			{:else}
				<p class="text-sm text-green-600">{showFiles(filesInDropzone)}</p>
				<button
					class="mt-2 text-sm text-red-500 hover:underline"
					onclick={() => (filesInDropzone = null)}>Clear Files</button
				>
			{/if}
		</Dropzone>
	</Card>
</div>
