<template>
    <div class="container pb-3">
        <div class="products">
            <h1 class="mb-2 text-start">/Products</h1>

        <div  class="row justify-content-center" v-if="products">
            <Card data-aos="fade-up" v-for="product in products()" :key="product.prodID">
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="small-img img-fluid rounded mx-auto d-block card-img-top" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title">{{ product.prodName }}</h5>
                    <h5 class="card-title">{{ product.category }}</h5>
                    <p class="lead"><span class="text-success">Quantity</span>: {{ product.quantity }}</p>
                    <p class="lead"><span class="text-success">Amount</span>: R{{ product.amount }}</p>
                    <router-link :to="{name: 'productDetail',params:{id:product.prodID}}"><i class="fas bi-arrow-right-circle-fill fa-10x"></i></router-link>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner />
        </div>
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

<style scoped>
*{
    line-height: 1.5;
    font-size: 16px;   
    letter-spacing: 0.05em;
}
.products{
    margin-top: 120px;
    width: 100%;
}
h1{
    font-size: 2rem;
}

.card-img-top{
    width: 10rem;
}
i{
    font-size: 2rem;
    color: #e21861;
}
</style>