<script>
	import { page } from '$app/stores';
</script>

<h1 style="padding: 12rem; font-size:12rem; padding-bottom: 0;">
	{$page.status}
</h1>
<span style="display: block; margin: 0 12rem; font-size:4rem">
	{$page.error.message}
</span>
