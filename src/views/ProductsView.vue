<template>
    <div class="container">

        <h1 class="mb-2 text-start">Products</h1>

        <table class="table table-products ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Read More</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
        </table>
    </div>  
</template>

<script>
export default {

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