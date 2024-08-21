<template>
  <div class="container">
    
    <h1>This is an admin page</h1>

        <h5>Products</h5>
        <div class="row gap-2 justify-content-center my-2" v-if="products">
          <table class="table table-products" >
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody v-for="product in products()" :key="product.prodID">
                    <tr>
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>R{{ product.amount }}</td>
                        <td><button><i class="bi bi-pencil-square"></i></button></td>
                        <td><button><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                </tbody>
        </table>
        </div>
        <div v-else>
            <Spinner />
        </div>

        <h5>Users</h5>
        <div class="row gap-2 justify-content-center my-2" v-if="users">
          <table class="table table-products" >
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Age</th>
                        <th scope="col">gender</th>
                        <th scope="col">Role</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Profile Pic</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody v-for="user in users()" :key="user.userID">
                    <tr>
                        <td>{{ user.userID }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.userAge }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>{{ user.userPass }}</td>
                        <td>{{ user.userProfile }}</td>
                        <td><button><i class="bi bi-pencil-square"></i></button></td>
                        <td><button><i class="bi bi-trash-fill"></i></button></td>
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
        fetchUsers(){
            this.$store.dispatch('fetchUsers')
        },
        users() {
          return this.$store.state.users;
        },
    },
components: {
    Spinner,
  },
  mounted() {
    this.fetchProducts();
    this.fetchUsers();
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