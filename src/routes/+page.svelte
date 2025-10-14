<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
</script>

<Navbar>
	<NavHamburger />
	<NavBrand>
		<span class="text-xl font-semibold tracking-widest">colorblockifier</span>
	</NavBrand>
	<NavUl>
		<NavLi href="https://github.com/colorblockifier/colorblockifier.github.io">About</NavLi>
	</NavUl>
	<DarkMode class="cursor-pointer" />
</Navbar>
