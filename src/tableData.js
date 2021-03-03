const formatTableData = (dataArr) => {
  const formattedData = [];
  dataArr.forEach(item => {
    formattedData.push({
      picture: item.picture.thumbnail,
      firstName: item.name.first,
      lastName: item.name.last,
      email: item.email,
      cell: item.cell
    });
  });
  return formattedData;
}

export default formatTableData;