<template>
<div class="modal-background fade-in" @click.self="$emit('on:close')">
  <div class="modal-container">


    <form class="form">
        <h2>CONTACT US</h2>
        <p type="Name:"><input placeholder="Write your name here.."></p>
        <p type="Email:"><input placeholder="Let us know how to contact you back.."></p>
        <p type="Message:"><input placeholder="What would you like to tell us.."></p>
        <button>Send Message</button>
        <div>
          <span class="fa fa-phone"></span>001 1023 567
          <span class="fa fa-envelope-o"></span> contact@company.com
        </div>
    </form>


</div>
</div>

</template>

<script>
export default {
  emits:['on:close'],
  setup(){

  }

}
</script>

<style scoped>


.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}




</style>