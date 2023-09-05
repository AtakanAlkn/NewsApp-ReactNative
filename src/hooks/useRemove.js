const removeTags = html => {
  // Tüm HTML etiketlerini kaldırmak için regex kullanabilirsiniz.
  return html.replace(/<[^>]*>/g, '');
};

const useParagraph = html => {
  const pTagRegex = /<p>(.*?)<\/p>/g;
  const textList = [];

  let pTagMatch;
  while ((pTagMatch = pTagRegex.exec(html)) !== null) {
    const text = pTagMatch[1];
    // <br> ve <strong> etiketlerini kaldırmak için metni işleyin
    const cleanedText = removeTags(text);
    textList.push(cleanedText);
  }

  return textList;
};

export default useParagraph;
