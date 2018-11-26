<template>
  <div id="Index">
    <router-link to="/Main"><img src="Index.jpeg"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    name: String
  }
}

</script>
