<template>
  <div>
  <nav class="navbar navbar-expand-lg bg-transparent position-fixed w-100 sticky-top">
    <div class="container-fluid m-auto">
      <a class="navbar-brand">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link to="/" class="nav-link" >Home</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/products" class="nav-link" >Products</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/admin" class="nav-link" >Admin</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/contact" class="nav-link" >Contact</router-link>
          </li>
          <!-- <li class="nav-item">
              <router-link to="/productDetail" class="nav-link" >Product Detail</router-link>
          </li> -->
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </div>  
</template> 
  
<script>
export default {
    name: "NavBarComp"
};
</script>

<style>
.navbar {
  background-color: transparent !important; /* Makes the background transparent */
  backdrop-filter: blur(10px); /* Optional: Adds a blur effect to the background */
}

.navbar .nav-link {
  color: white; /* Adjust text color to ensure readability */
}

.navbar-toggler-icon {
  background-color: white; /* Optional: Change the color of the navbar toggler icon */
}
</style>
  