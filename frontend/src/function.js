import axios from 'axios';
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    const strapiData = response.data.data;
    const normalizeData = (item) => ({
      id: item.documentId,
      title: item.title,
      content: item.content,
      excerpt: item.excerpt,
      imageUrl: item.image?.url ? `${import.meta.env.VITE_STRAPI_API_URL}${item.image.url}` : null,
      smallImageUrl: item.image?.formats?.small?.url ? `${import.meta.env.VITE_STRAPI_API_URL}${item.image.formats.small.url}` : null, 
      date: item.publishedAt,
    });
    const formattedData = Array.isArray(strapiData) ? strapiData.map(normalizeData) : normalizeData(strapiData);
    return formattedData;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};


export const formatDate = (date) => {
  const d = new Date(date);

  return d.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

export const getImageAcf = async (id) => {
  const response = await axios.get(`https://tolkadminka.ru/wp-json/wp/v2/media/${id}`);

  return response.data.source_url;
}


export const scrollTop = () => {
  window.scrollTo(0,0)
}
