// tarihi alır ve geriye ay / gün formatnda döndürür.
const formatDate = (dateStr) => {
  // metin formatındaki tarihi aralarındaki - göre parçalama
  const date = dateStr.split("-");

  //formatla ve döndür
  return date[2] + "/" + date[1];
};

export default formatDate;
