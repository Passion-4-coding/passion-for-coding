
<h2>
	<slot />
</h2>
<div class="line" />

<style>
  h2 {
		font-weight: 700;
		font-size: 54px;
		line-height: 36px;
		text-transform: uppercase;
		margin: 0px 0px 35px;
	}
	.line {
		width: 250px;
		height: 6px;
		background: var(--color-secondary);
	}
	@media(max-width: 992px) {
    h2 {
			font-size: 38px;
			line-height: 36px;
			margin: 0px 0px 15px;
    }
		.line {
			width: 150px;
			height: 4px;
		}
  }
  @media(max-width: 600px) {
		h2 {
			position: absolute;
			top: 15px;
			left: 0;
			right: 0;
			margin: 0 auto;
			text-align: center;
			font-size: 24px;
		}
		.line {
			display: none;
    }
	}
</style>