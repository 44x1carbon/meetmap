<template>
	<span class="mobile-fab-tip">{{ caption }}</span>
	<a class="btn-floating" :class="[color]" @click="click"><i class="material-icons">{{ icon }}</i></a>
</template>

<script>
export default {
	props: [ 'caption', 'color', 'icon', 'click']
}
</script>

<style>
.fixed-action-btn ul {
	display: none;
}
.fixed-action-btn:hover ul {
	display: block;
}
.material-tooltip {
	display: none !important;
}
.mobile-fab-tip {
	position: fixed;
	right: 85px;
	padding: 7px 5px 4px 5px;
	text-align: right;
	background-color: #323232;
	border-radius: 2px;
	color: #FFF;
	opacity: 0;
}
.mobile-fab-tip {
	-webkit-animation: fadein 1s;
	-moz-animation: fadein 1s;
	-o-animation: fadein 1s;
	animation: fadein 1s;
	-webkit-animation-fill-mode: forwards;
	-moz-animation-fill-mode: forwards;
	-o-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
	-webkit-animation-delay: 0.5s;
	-moz-animation-delay: 0.5s;
	-o-animation-delay: 0.5s;
	animation-delay: 0.5s;
}
@keyframes fadein {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
@-moz-keyframes fadein {
	/* Firefox */
	0% { opacity: 0; }
	100% { opacity: 1; }
}
@-webkit-keyframes fadein {
	/* Safari and Chrome */
	0% { opacity: 0; }
	100% { opacity: 1; }
}
@-o-keyframes fadein {
	/* Opera */
	0% { opacity: 0; }
	100% { opacity: 1; }
}
</style>