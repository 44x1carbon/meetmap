<template>
	<div class="map-outer">
		<div class="vue-map-l"></div>
		<slot></slot>		
	</div>
</template>

<script>
import Q from 'q';
import Vue from 'vue'
import L from 'leaflet'
import { DeferredReadyMixin } from '../deferredReady'
import { DeferredReady } from '../deferredReady.js'
import { load } from '../maneger.js'

Vue.use(DeferredReady)

const props = {
	center: {
    required: true,
    type: Object
  },
	zoom: {
    required: false,
    type: Number
  },
	click: {
		type: Function
	}
}

/*子要素が追加された場合*/
const registerChild = function (child, type) {
  if (!this.mapObject)
    throw new Error("Map not initialized");
  child.$emit('map-ready', this.mapObject);
}

const eventListeners = {
	'register-component': registerChild
}

export default {
	mixins: [DeferredReadyMixin],
	created() {
		load()
  },
	deferredReady (){		
		const element = this.$el.getElementsByClassName('vue-map-l')[0];
		this.mapObject = L.map(element, {
			center: [this.center.lat, this.center.lng],
			zoom: this.zoom,
			scrollWheelZoom: false
		})
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.mapObject)
		this.$broadcast('ready-map',this.mapObject)
		this.mapObject.on('click',this.click)
	},
	watch: {
		center(val) {
			let {lat, lng} = val
			this.mapObject.panTo([lat, lng])
		}
	},
	events: eventListeners,
	props
}
</script>

<style>
.map-outer,.vue-map-l {
	width: 100%;
	height: 100%;
}
</style>