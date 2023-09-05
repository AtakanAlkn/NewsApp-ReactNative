//Gelen HTML verisinin içerisinde gerekli aramayı yapar ve ilk değeri döndürür
const useSrc = html => {
  const imgSrcRegex = /<img.*?src="(.*?)"/;
  const match = html.match(imgSrcRegex);
  if (match) {
    return match[1];
  }
  return null;
};

export default useSrc;
