<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		DarkMode,
		Card,
		Fileupload,
		Helper,
		Label
	} from 'flowbite-svelte';
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
	<Card class="flex gap-2 p-4">
		<Label for="jarfile">Select a Minecraft JAR to extract textures</Label>
		<Fileupload id="jarfile" accept=".jar"></Fileupload>
		<Helper>
			<code>.minecraft/versions/&lt;version&gt;/&ltversion&gt;.jar</code>
		</Helper>
		<Helper>
			<a class="underline" href="https://minecraft.wiki/w/.minecraft#Locating"
				>How to find the <code>.minecraft</code> folder</a
			>
		</Helper>
	</Card>
</div>
