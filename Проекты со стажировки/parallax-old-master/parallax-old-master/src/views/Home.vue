<template>
  <div class="container"  @wheel.prevent="wheelHandler">
    <div 
      class="relax"
      v-rellax="{
      speed: 3,
      vertical: false,
      horizontal: true
    }"
    >I’m extra slow and smooth</div>
    <div 
      class="relax"
      v-rellax="{
      speed: 10,
      vertical: false,
      horizontal: true
    }"
    >I’m super fast!!</div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    wheelHandler(event) {
      // console.log(event)
      event.view.scrollBy({left:event.deltaY, top:0, behavior: 'smooth'})
    }
  }
}

</script>

<style scoped lang="scss">

.container {
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.relax {
  width: 3000px;
  height: 100px;
  border: 2px solid black;
}
</style>
