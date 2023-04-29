
export const getGifs = async (categoria) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=Dp7V07IE0CMDY5JlOX1uiWb3Up5cLRJe&q=${categoria}&limit=${ 5 }`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const listaGifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log(listaGifs);
    return listaGifs;

}