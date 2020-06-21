<html>

<head>

  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="fontawesome/css/all.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="js/bootstrap.js"></script>

</head>

<body>

  <div class="container-fluid p-0 m-0">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navpok">
      <a class="navbar-brand col-5" href="#">THISISNOTPOKER</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link col" href="#">Jouez <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link col" href="#">Nos engagements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link col" href="#part">Les partenaires</a>
          </li>
        </ul>
      </div>
    </nav>

  </div>

  <div class="container">

    <div class="row mt-5 bg-grey">
      <div class="col-5 mb-3 text-center" id="hero">
        <div class="row text-center ">
          <div class="col mb-3">
            <h1 class="nameh">Hero Stark</h1>
            <img class="" id="Vilain" src="assets/stark.jpg" width="150" height="150">
          </div>
        </div>
        <div class='row herocards'>
          <div class="col ">
            <img class="Gamecards image-fluid flip d-block w-178 ml-3" id="HeroCards0" src="assets/back1.png" width="178" height="260">
          </div>
          <div class="col">
            <img class="Gamecards image-fluid flip d-block w-178 ml-2" id="HeroCards1" src="assets/back2.png" width="178" height="260">
          </div>
        </div>
      </div>
      <div class="col-2 lancejeu text-center ">
        <button type="button" id="play" onclick="flip()"class="btn-dark vertical-align-center">JOUER !</button>
        <div class="win">
          <p id="result"></p>
        </div>
      </div>
      <div class="col-5 mb-3 text-center Glower" id="vilain">
        <div class="row text-center mb-3">
          <div class="col">
            <h1 class="namev">Vilain Lannister</h1>
            <img class="" id="Vilain" src="assets/lannister.jpg" width="150" height="150">
          </div>
        </div>
        <div class='row mb-6'>
          <div class="col">
            <img class="Gamecards image-fluid flip d-block w-178 ml-3" id="VilainCards0" src="assets/back3.png" width="178" height="260">
          </div>
          <div class="col">
            <img class="Gamecards image-fluid flip d-block w-178 ml-2 " id="VilainCards1" src="assets/back4.png" width="178" height="260">
          </div>

        </div>
      </div>
    </div>
    <div class="row mt-6 text-center" id="floor">
      <div class="col ">
        <img class="Gamecards image-fluid flip d-block w-178 ml-3 " id="FloorCards0" src="assets/back5.png" width="178" height="260">
      </div>
      <div class="col">
        <img class="Gamecards image-fluid flip d-block w-178 ml-3" id="FloorCards1" src="assets/back6.png" width="178" height="260">
      </div>
      <div class="col">
        <img class="Gamecards image-fluid flipd-block w-178 ml-3" id="FloorCards2" src="assets/back7.png" width="178" height="260">
      </div>
      <div class="col">
        <img class="Gamecards image-fluid flip d-block w-178 " id="FloorCards3" src="assets/back8.png" width="178" height="260">
      </div>
      <div class="col">
        <img class="Gamecards image-fluid flip d-block w-178 " id="FloorCards4" src="assets/back9.png" width="178" height="260">
      </div>
    </div>
  </div>
  <div class="container-fluid gamepub">

    <div class="row text-center bg-dark mt-5 h-40 ">

      <div class="col-6 ">

        <img src="assets/engagement.png" class="img-fluid h-60 p-3" alt="">

      </div>
      <div class="col mt-4">

        <div class="row">

          <div class="col text-center">

            <h2 class="intro mb-2">Le jeu qui vous ressemble</h2>

          </div>
        </div>

        <div class="row mt-3">

          <div class="col intro">
            <i class="far fa-grin-beam fa-4x "></i>
            <h5 class="mt-2">Fun</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.</p>
          </div>
          <div class="col intro">
            <i class="fas fa-lock fa-4x"></i>
            <h5 class="mt-2">Securisé</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.</p>
          </div>
          <div class="col intro">
            <i class="fas fa-gamepad fa-4x"></i>
            <h5 class="mt-2">Experience de jeu</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.</p>
          </div>
        </div>

      </div>
    </div>


    <!--Carousel Bootstrap-->
    <div class=" mt-2 bg-dark carou container-fluid" id="part">
      <h1 class="mt-4 text-center intro">Nos Partenaires</h1>
      <h2 class="mt-4 mb-4 text-center"></h2>
      <div class="carousel slide" data-ride="carousel" id="multi_item">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/aces-magazine.png" alt="1 slide"></div>
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/chips-forum.png" alt="2 slide"></div>
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/kawaii-game.png" alt="3 slide"></div>
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/aces-magazine.png" alt="1 slide"></div>

            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/aces-magazine.png" alt="1 slide"></div>
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/chips-forum.png" alt="2 slide"></div>
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/kawaii-game.png" alt="3 slide"></div>
              <div class=" col-sm singlelogos"><img class="d-block w-50" src="assets/partners/aces-magazine.png" alt="1 slide"></div>
            </div>
          </div>

        </div>
        <a class="carousel-control-prev" href="#multi_item" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#multi_item" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <!-- footer---------------------------------------------------->
    <!-- Footer -->
    <footer class="page-footer font-small bg-dark">

      <!-- Footer Links -->
      <div class="container text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

          <!-- Grid column -->
          <div class="col">

            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 intro">TINP</h5>

            <ul class="list-unstyled intro">
              <li>
                <a class="intro" href="#!">Nous Contacter</a>
              </li>
              <li>
                <a class="intro" href="#!">Nous rejoindre</a>
              </li>
              <li>
                <a class="intro" href="#!">FAQ</a>
              </li>

            </ul>

          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none">

          <!-- Grid column -->
          <div class="col">

            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 intro">Le Jeu</h5>

            <ul class="list-unstyled">
              <li>
                <a class="intro" href="#!">Les Règles</a>
              </li>
              <li>
                <a class="intro" href="#!">Histoire</a>
              </li>

            </ul>

          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none">

          <!-- Grid column -->
          <div class="col">

            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 intro">Les Bonus</h5>

            <ul class="list-unstyled">
              <li>
                <a class="intro" href="#!">Premier Depôt</a>
              </li>
              <li>
                <a class="intro" href="#!">Early Adopter</a>
              </li>
              <li>
                <a class="intro" href="#!">Parrainage</a>
              </li>

            </ul>

          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none">

          <!-- Grid column -->
          <div class="col">

            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 intro">Nos Partenaires</h5>

            <ul class="list-unstyled">
              <li>
                <a class="intro" href="#!">Plop Game</a>
              </li>
              <li>
                <a class="intro" href="#!">Club not Poker</a>
              </li>
              <li>
                <a class="intro" href="#!">Deuces Magazine</a>
              </li>

            </ul>

          </div>
          <div class="col offset-1">

            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 intro"></h5>

            <ul class="list-unstyled">
              <li>
                <img class="intro" href="#!" src="assets/stripe.png" width="100" height="40">
              </li>
              <li>
                <img class="intro" href="#!" src="assets/visa.png" width="100" height="80">
              </li>


            </ul>

          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row -->

      </div>
      <!-- Footer Links -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href=""> THISISNOTPOKER.com</a>
      </div>
      <!-- Copyright -->

    </footer>
    <!-- Footer -->


</body>

<script type="module" src="js/startgame.js">
</script>

</html>