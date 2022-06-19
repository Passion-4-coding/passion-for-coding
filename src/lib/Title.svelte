
<h2>
	<slot />
</h2>
<div class="line" />

<style>
  h2 {
		font-size: 40px;
		margin: 0px 0px 5px;
	}
	
	.line {
		width: 120px;
		height: 5px;
		background-color: var(--color-secondary);
		margin: 0 0 20px;
	}

	@media(max-width: 992px) {
		h2 {
			font-size: 36px;
		}
		.line {
			width: 110px;
		}
	}
	@media(max-width: 768px) {
		h2 {
			font-size: 28px;
			text-align: center;
		}
		.line {
			width: 90px;
			margin: 0 auto 20px;
		}
	}
	@media(max-width: 600px) {
		h2 {
			font-size: var(--font-size-xl);
		}
		.line {
			width: 70px;
			height: 3px;
		}
}
</style>