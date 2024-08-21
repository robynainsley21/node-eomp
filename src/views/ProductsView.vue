<template>
    <div class="container">

        <h1 class="mb-2 text-start">Products</h1>

        <div class="row gap-2 justify-content-center my-2" v-if="products">
            <Card v-for="product in products()" :key="product.prodID">
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                    </div>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner />
        </div>

    </div>  
</template>

<script>
import Spinner from '@/components/SpinnerComp.vue'
import Card from '@/components/CardComp.vue'

export default {
    methods:{
        getProducts(){
            this.$store.dispatch('fetchProducts')
        },
        products() {
          return this.$store.state.products;
        },
    },
components: {
    Spinner,
    Card
  },
  mounted() {
    this.getProducts();
  }
}
</script>

<style>
.table-products{
    --bs-table-bg: transparent !important;
}
td{
    color: white;
}
</style>