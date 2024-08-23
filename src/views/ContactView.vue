<template>
    <div class="contact">
        <div class="container text-white bg-transparent with-blur-backdrop rounded">
            <h1 class="text-center contactMain">CONTACT US:</h1>
            <form action="https://formspree.io/f/mgvwwenn" class="row g-3" method="POST" target="_blank">
                <div data-aos="fade-down" class="col-md-6 order-md-2">
                    <img src="https://aneeqbass.github.io/ecommerceImages/contactImg.jpg" class="img-thumbnail cont-img"
                        alt="">
                </div>
                <div data-aos="fade-up" class="col-md-6 order-md-1">
                    <label for="inputName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="inputName" name="First Name" required>
                    <label for="inputLastName" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="inputLastName" name="Surname" required>
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" name="Email" required
                        placeholder="example@gmail.com">
                    <label for="inputMessage">Send Us A Message</label>
                    <textarea class="form-control" name="message" placeholder="Type message..." required></textarea>
                    <br>
                    <button class="form-control submitBnt">Submit</button>
                    <br><br>
                    <h5>Our Info:</h5>
                    <p id="infoEmail">Email: </p>
                    <p id="infoPhone">Phone: 076 048 6780</p>
                    <hr>
                    <h5>Follow us:</h5>
                    <div class="socialLinks">
                        <a href="https://facebook.com/" target="_blank"><img class="facebookLogo" src=""
                                alt="">@</a><br>
                        <a href="https://www.instagram.com/" target="_blank"><img class="instaLogo" src="" alt="">@</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact {
    margin-top: 120px;
    width: 100%;
}
</style>