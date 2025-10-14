<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
</script>

<Navbar>
	<NavHamburger />
	<NavBrand>
		<span
			class="bg-gradient-to-r from-red-400 via-green-400 to-purple-400 bg-clip-text font-mono text-xl font-bold tracking-widest text-transparent"
			>colorblockifier</span
		>
	</NavBrand>
	<NavUl>
		<NavLi href="https://github.com/colorblockifier/colorblockifier.github.io">About</NavLi>
	</NavUl>
	<DarkMode class="cursor-pointer" />
</Navbar>
