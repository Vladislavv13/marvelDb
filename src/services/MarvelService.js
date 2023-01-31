class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=f7d4b67e8dd65d18782ca7dd9d84e3bd';
    _baseOffset = 110;

    getResourse = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
   }

   getAllCharacters =  async (offset = this._baseOffset) => {
        const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacters);
   }

   getCharacters = async (id) => {
        const res = await this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacters(res.data.results[0]);
   }

   _transformCharacters = (char) => {
        return {
          i: char.comics.i,
          id: char.id,
            name : char.name, 
            description :char.description ? `${char.description.slice(0, 210)}...` : 'There is no decription for this charter',
            thumbnail: char.thumbnail.path  + '.' + char.thumbnail.extension ,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
   }
}


export default MarvelService;