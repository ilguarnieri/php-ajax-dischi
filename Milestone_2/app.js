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
            axios.get('./main.php')
            .then( res => {
                this.albums = res.data;
                this.getGenre;
                this.error = false;
            })
            .catch(err => {
                console.error(err.response);
                this.albums = [];
                this.error = true;
            })
        },
    },

    computed:{
        getGenre: function(){
            return this.albums.forEach(el => {
                if(!this.genres.includes(el.genre)){
                    this.genres.push(el.genre);
                }

                if(!this.artists.includes(el.author)){
                    this.artists.push(el.author);
                }
            })
        },
    },

    created() {
        setTimeout(this.fetchAlbums, 1000)
    }
})