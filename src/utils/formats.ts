const formatName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
const formatId = (id: number) => {
  if (id < 10) return `00${id}`;
  if (id < 100) return `0${id}`;
  return id;
};

const formatSentencesWithSlash = (sentences: string) => {
  return sentences.replace(/[\n\/\f\s]+/g, " ");
};

export { formatName, formatId, formatSentencesWithSlash };
