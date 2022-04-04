
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="icon" href="./assets/img/logo.png">
    <title>SpotiBool</title>
</head>
<body id = "app">
    <header>
        <figure class="header__logo">
            <img src="./assets/img/logo.png" alt="logo">
        </figure>
    </header>

    <main>
        <div class="container">
            <!-- albums -->
            <div class="albums-wrapper">

                <?php
                foreach($discs as $disc){
                ?>                    
                    <div class="album-item">
                        <figure class="album__img">
                            <img src="<?= $disc['poster'] ?>">
                        </figure>
                    
                        <div class="album__info">
                            <h3 class="album__title"><?= $disc['title'] ?></h3>
                            <p class="album__artist"><?= $disc['author'] ?></p>
                            <p class="album__year"><?= $disc['year'] ?></p>
                        </div>
                    </div>

                <?php
                }
                ?>
            </div>         
        </div>
    </main>

    <script src="./main.js"></script>
    
</body>
</html>