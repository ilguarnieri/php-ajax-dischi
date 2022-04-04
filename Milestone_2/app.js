const app = new Vue({
    el: '#app',

    data: {
        genreSelect: '',
        artistSelect: '',
        albums: [],
        genres:[],
        artists:[],
        error: false
    },

    methods: {
        fetchAlbums: function(){
            //chiamata server
            axios.get('./main.php',{
                params:{
                    genre: this.genreSelect,
                    author: this.artistSelect
                }
            })
            .then( res => {
                //popolamento album
                this.albums = res.data;

                //popolamento genere e artisti se vuoti
                if(this.genres.length == 0 ||
                    this.artists.length == 0 ){
                    this.getInfo();
                }

                this.error = false;
            })
            //in caso di errore
            .catch(err => {
                console.log(err.response);
                this.albums = [];
                this.error = true;
            })
        },

        //push generi e artisti
        getInfo: function(){
            return this.albums.forEach(el => {
                if(!this.genres.includes(el.genre)){
                    this.genres.push(el.genre);
                }

                if(!this.artists.includes(el.author)){
                    this.artists.push(el.author);
                }
            })
        },

        //change select genre
        fetchGenre: function(){
            this.artistSelect = '';
            this.fetchAlbums()
        },

        //change select artist
        fetchArtist: function(){
            this.genreSelect = '';
            this.fetchAlbums()
        }
    },

    created() {
        setTimeout(this.fetchAlbums, 1000)        
    }
})