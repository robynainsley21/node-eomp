<template>
  <div class="container">
    
    <h1>This is an admin page</h1>

        <div class="row gap-2 justify-content-center my-2" v-if="products">
          <table class="table table-products" >
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Read More</th>
                    </tr>
                </thead>
                <tbody v-for="product in products()" :key="product.prodID">
                    <tr>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>: R{{ product.amount }}</td>
                        <td><i class="bi bi-arrow-right-circle-fill"></i></td>
                    </tr>
                </tbody>
        </table>
        </div>
        <div v-else>
            <Spinner />
        </div>
  </div>
  
</template>

<script>
import Spinner from '@/components/SpinnerComp.vue'

export default {
    methods:{
      fetchProducts(){
            this.$store.dispatch('fetchProducts')
        },
        products() {
          return this.$store.state.products;
        },
        
    },
components: {
    Spinner,
  },
  mounted() {
    this.fetchProducts();
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