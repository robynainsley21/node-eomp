<template>
 <div class="col-md-4 mb-3">
    <div class="card">
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CardComp",
}
</script>

<style scoped>

</style>