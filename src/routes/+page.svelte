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
		Fileupload,
		Textarea
	} from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline, MoonOutline, SunOutline } from 'flowbite-svelte-icons';

	let fileuploadRef = $state() as HTMLInputElement;
	let textareaRef = $state() as HTMLTextAreaElement;
	let files: FileList | null = $state(null);

	function handleOnChange(event: Event) {
		console.log(files[0]);
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
		<Card class="flex gap-2 p-4">
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
				clearable
			/>
		</Card>

		<Card class="flex gap-2 p-4">
			<Label for="blocklist_display">Textures:</Label>
			<Textarea id="blocklist_display" bind:elementRef={textareaRef} rows={10} class="w-full" />
		</Card>
	</div>
</div>
