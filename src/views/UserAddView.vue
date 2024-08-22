<template>
    <div class="container">
        <h1>This is an single product page</h1> 
        <div>
            <div class="row justify-content-center" v-if="product" >
            <Card>
                <template #cardHeader>
                    {{ product.productURL }}
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <h5 class="card-title fw-bold">{{ product.category }}</h5>
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                </template>
            </Card>
        </div>
        <div v-else> 
            <Spinner/>
        </div>
        </div>



    </div>
</template>

<script>
import Spinner from '@/components/SpinnerComp.vue'

import Card from '@/components/CardComp.vue'

export default {
    methods:{
        fetchProducts(){
            this.$store.dispatch('fetchProducts')
        },
        products() {
          return this.$store.state.products;
        },
        fetchProduct(){
            this.$store.dispatch('fetchProduct', this.$route.params.id )
        },
        // this.$route.params.id
        
        
    },
    computed:{
        product(){
            return this.$store.state.product;
        }
    },
components: {
    Spinner,
    Card
  },
  mounted() {
    // this.fetchProducts(),
    this.fetchProduct()
  }
}
</script>

<style>

</style>