<template>
  <div class="banner" >
    <mt-swipe class="banner-swiper" :auto="4000">
      <mt-swipe-item class="banner-swiper-item" v-for="banner in banner" :key="banner.id">
        <img :src="banner.img_url"  mode="widthFix" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    banner: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.banner{
    position: relative;
    top: 0;
    height: 160px;
}
.banner-swiper {
  height: 160px;
  margin-left: -8px !important;
  margin-right: -8px !important;
}
.banner-swiper img {
  height: 100%;
  width: 100%;
}
</style>