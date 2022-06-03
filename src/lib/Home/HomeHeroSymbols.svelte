<div class="icon icon-1">!=</div>
<div class="icon icon-2">﹛ ﹜</div>
<div class="icon icon-3">〈 〉</div>
<div class="icon icon-4">===</div>
<div class="icon icon-5">??</div>

<style>
  .icon {
    position: absolute;
    font-weight: bold;
    z-index: 2;
  }

  .icon-1 {
    left: 40px;
    top: 0px;
    font-size: 90px;
    animation: icon1 2s forwards;
  }

  .icon-2 {
    right: 450px;
    top: 85px;
    font-size: 110px;
    animation: icon2 2s forwards;
  }
  .icon-3 {
    right: 0px;
    bottom: 100px;
    font-size: 70px;
    animation: icon3 2s forwards;
  }
  .icon-4 {
    right: 300px;
    bottom: 60px;
    font-size: 110px;
    animation: icon4 2s forwards;
  }
  .icon-5 {
    left: 350px;
    top: 0px;
    font-size: 110px;
    animation: icon5 2s forwards;
  }

  @keyframes icon1 {
    0% {
      transform: scale(0,0) rotate(0deg); 
    }
    100% {
      transform: scale(1,1) rotate(-20deg); 
    }
  }

  @keyframes icon2 {
    0% {
      transform: scale(0,0) rotate(0deg); 
    }
    100% {
      transform: scale(1,1) rotate(120deg); 
    }
  }

  @keyframes icon3 {
    0% {
      transform: scale(0,0) rotate(0deg); 
    }
    100% {
      transform: scale(1,1) rotate(60deg); 
    }
  }

  @keyframes icon4 {
    0% {
      transform: scale(0,0); 
    }
    100% {
      transform: scale(1,1); 
    }
  }

  @keyframes icon5 {
    0% {
      transform: scale(0,0) rotate(0deg); 
    }
    100% {
      transform: scale(1,1) rotate(120deg); 
    }
  }
</style>

<!-- markup (zero or more items) goes here -->