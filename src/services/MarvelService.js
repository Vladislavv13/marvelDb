import { useHttp } from "../hooks/http.hook";


const  useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=f7d4b67e8dd65d18782ca7dd9d84e3bd';
    const _baseOffset = 110;

  

  const getAllCharacters =  async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacters);
   }

  const getCharacters = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacters(res.data.results[0]);
   }

  const _transformCharacters = (char) => {
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

   return {loading, error, getAllCharacters, getCharacters, clearError}
}


export default useMarvelService;